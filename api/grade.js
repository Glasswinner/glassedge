export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { transcript, eventCode, prompt } = req.body;

  console.log("📥 Incoming Grade Payload:", {
    transcriptExists: Boolean(transcript),
    eventCodeExists: Boolean(eventCode),
    promptExists: Boolean(prompt),
    eventCode,
    prompt,
    transcriptPreview: transcript?.slice?.(0, 100)
  });

  if (!transcript || !eventCode || !prompt) {
    return res.status(400).json({
      error: "Missing transcript, event code, or prompt",
      received: { transcript, eventCode, prompt }
    });
  }

  try {
    const mod = await import(`../grading/${eventCode}grade.js`);
    const config = mod.default?.default || mod.default || mod;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek-r1-distill-llama-70b",
        messages: [
          { role: "system", content: config.instructions },
          {
            role: "user",
            content: `Event: ${config.eventName}\n\nPrompt: ${prompt}\n\nTranscript:\n${transcript}`
          }
        ]
      })
    });

    const result = await response.json();
    const aiText = result?.choices?.[0]?.message?.content?.trim();

    console.log("💬 AI Text Response:", aiText);

    if (!aiText) {
      console.error("❌ DeepSeek returned empty or invalid content:", result);
      return res.status(500).json({
        score: 0,
        feedback: "DeepSeek did not return a valid response.",
        full: ""
      });
    }

    const scoreMatch = aiText.match(/score[:\s]*([0-9]{1,3})/i);
    const feedbackMatch = aiText.match(/feedback[:\s]*(.+)/is);

    const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;
    let feedback = "No feedback provided.";

    if (!feedbackMatch) {
      const afterScore = aiText.split(/score[:\s]*[0-9]{1,3}/i)[1];
      if (afterScore) feedback = afterScore.trim();
    } else {
      feedback = feedbackMatch[1].trim();
    }

    return res.status(200).json({
      score,
      feedback,
      full: aiText
    });
  } catch (err) {
    console.error("🔥 Grading error:", err.message, err.stack);
    return res.status(500).json({ error: "Grading failed", message: err.message });
  }
}
