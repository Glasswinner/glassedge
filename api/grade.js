export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { transcript, eventCode, prompt } = req.body;

  if (!transcript || !eventCode || !prompt) {
    return res.status(400).json({ error: "Missing transcript, event code, or prompt" });
  }

  try {
    const config = await import(`../../data/${eventCode}grade.js`).then(mod => mod.default);

    const deepseekRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528:free",
        messages: [
          { role: "system", content: config.instructions },
          {
            role: "user",
            content: `Event: ${config.eventName}\n\nPrompt: ${prompt}\n\nTranscript:\n${transcript}`
          }
        ]
      })
    });

    const result = await deepseekRes.json();
    const aiText = result.choices?.[0]?.message?.content || "";

    const scoreMatch = aiText.match(/score[:\s]*([0-9]{1,3})/i);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;
    const feedbackMatch = aiText.match(/feedback[:\s]*(.+)/is);
    const feedback = feedbackMatch ? feedbackMatch[1].trim() : "No feedback provided.";

    return res.status(200).json({ score, feedback });
  } catch (err) {
    console.error("🔥 DeepSeek grading error:", err);
    return res.status(500).json({ error: "Grading failed", message: err.message });
  }
}
