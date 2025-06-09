export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { eventCode } = req.body;
  if (!eventCode) {
    return res.status(400).json({ error: 'Missing event code' });
  }

  try {
    const config = await import(`../data/prompts/${eventCode}.js`).then(mod => mod.default);

    const indicators = config.indicatorSets[Math.floor(Math.random() * config.indicatorSets.length)];
    const examples = config.exampleRoleplays;
    const userPrompt = config.promptTemplate({ indicators, exampleRoleplays: examples });

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
    console.log("OpenRouter result:", result);

    if (!result.choices || !result.choices[0]) {
      console.error("No choices returned:", result);
      return res.status(500).json({ error: 'Failed to generate prompt' });
    }

    res.status(200).json({ prompt: result.choices[0].message.content });

  } catch (error) {
    console.error("Error in generatePrompt handler:", error);
    res.status(500).json({ error: 'Server error while generating prompt' });
  }
}
