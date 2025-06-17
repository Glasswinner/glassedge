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
    // ✅ FIX: handle .default.default wrap for ESModules in Vercel/runtime
    const mod = await import(`./data/${eventCode}.js`);
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

    if (!Array.isArray(examples) || examples.length < 2 || typeof config.promptTemplate !== 'function') {
      console.error("❌ Example roleplays or promptTemplate are missing or invalid");
      return res.status(500).json({ error: 'Prompt config is missing example roleplays or template.' });
    }

    const userPrompt = config.promptTemplate({ indicators, exampleRoleplays: examples });

    console.log("🧠 Final prompt preview:", userPrompt.slice(0, 400), '...');

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528:free",
        messages: [{ role: "user", content: userPrompt }],
        temperature: 0.9
      })
    });

    const result = await response.json();
    console.log("🧠 OpenRouter result:", result);

    if (!result.choices || !result.choices[0]) {
      console.error("❌ No prompt choices returned from model");
      return res.status(500).json({ error: 'Failed to generate prompt from model.' });
    }

    res.status(200).json({ prompt: result.choices[0].message.content });

  } catch (error) {
    console.error("💥 Error in generatePrompt handler:", error);
    res.status(500).json({ error: 'Server error while generating prompt. Check event code and config file.' });
  }
}
