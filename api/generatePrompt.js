import prompts from '../data/deca_prompts.json';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { eventCode } = req.body;

  if (!eventCode || !prompts[eventCode]) {
    return res.status(400).json({ error: 'Invalid or missing event code' });
  }

  const samplePrompt = prompts[eventCode][
    Math.floor(Math.random() * prompts[eventCode].length)
  ];

  const systemPrompt = `
You are a DECA roleplay prompt writer for the event: ${eventCode}.

Here is an example prompt:
"${samplePrompt}"

Now, generate a **new and original** DECA roleplay prompt. It should:
- Be 3–4 paragraphs long
- Include a clear business setting and participant role
- Describe a realistic business scenario
- Include a challenge or situation for the competitor to solve
- Be appropriate for a 10-minute DECA roleplay

Match the tone and detail of real DECA prompts.
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: systemPrompt }],
        temperature: 0.9
      })
    });

    let result;
    try {
      result = await response.json();
      console.log("OpenAI API raw result:", result);
    } catch (e) {
      console.error("Error parsing OpenAI response:", e);
      return res.status(500).json({ error: 'Failed to parse OpenAI response' });
    }

    if (!result.choices || !result.choices[0]) {
      console.error("OpenAI error details:", result);
      return res.status(500).json({ error: 'Invalid OpenAI response format' });
    }

    res.status(200).json({ prompt: result.choices[0].message.content });

  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    res.status(500).json({ error: 'Server error while generating prompt' });
  }
}
