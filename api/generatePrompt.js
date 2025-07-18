async function fetchPromptFromModel(userPrompt) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [{ role: "user", content: userPrompt }],
      temperature: 0.9
    })
  });

  const result = await response.json();
  if (!result.choices || !result.choices[0]) {
    throw new Error("No prompt choices returned from model");
  }

  let content = result.choices[0].message.content;

  // Strip everything before and including </think> or similar
  const thinkEndMatch = content.match(/<\/think>|<\/thinking>|<\/reflection>/i);
  if (thinkEndMatch) {
    content = content.slice(thinkEndMatch.index + thinkEndMatch[0].length).trimStart();
  }

  // Remove any line/paragraph containing "here is a generated response:"
  content = content.replace(/^.*here is a generated response:.*$/gim, '').replace(/\n{3,}/g, '\n\n').trim();

  return content;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { eventCode } = req.body;
  console.log("🔍 Requested event code:", eventCode);

  if (!eventCode) {
    return res.status(400).json({ error: 'Missing event code' });
  }

  try {
    const mod = await import(`../data/${eventCode}.js`);
    const config = mod.default?.default || mod.default || mod;

    console.log("✅ FINAL config keys:", Object.keys(config));

    if (!Array.isArray(config.indicatorSets)) {
      console.error("❌ Missing or invalid indicatorSets in config");
      return res.status(500).json({ error: `Prompt config for '${eventCode}' is missing valid indicator sets.` });
    }

    const indicators = config.indicatorSets[
      Math.floor(Math.random() * config.indicatorSets.length)
    ];
    const examples = config.exampleRoleplays;

    if (!Array.isArray(examples) || examples.length < 1 || typeof config.promptTemplate !== 'function') {
      console.error("❌ Example roleplays or promptTemplate are missing or invalid");
      return res.status(500).json({ error: 'Prompt config is missing example roleplays or template.' });
    }

    const userPrompt = config.promptTemplate({ indicators, exampleRoleplays: examples });
    console.log("🧠 Final prompt preview:", userPrompt.slice(0, 400), '...');

    try {
      const modelOutput = await fetchPromptFromModel(userPrompt);
      return res.status(200).json({ prompt: modelOutput, indicators });
    } catch (firstError) {
      console.warn("⚠️ First model call failed. Retrying once...", firstError.message);
      try {
        const retryOutput = await fetchPromptFromModel(userPrompt);
        return res.status(200).json({ prompt: retryOutput, indicators });
      } catch (secondError) {
        console.error("❌ Second model call failed:", secondError.message);
        return res.status(500).json({ error: 'Failed to generate prompt after two attempts.' });
      }
    }

  } catch (error) {
    console.error("💥 Error in generatePrompt handler:", error);
    return res.status(500).json({ error: 'Server error while generating prompt. Check event code and config file.' });
  }
}
