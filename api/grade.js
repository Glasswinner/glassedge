export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { transcript, eventCode } = req.body;

  if (!transcript || !eventCode) {
    return res.status(400).json({ error: "Missing transcript or event code" });
  }

  // Dummy score/feedback while DeepSeek is being integrated
  return res.status(200).json({
    score: 94,
    feedback: `Good job on your ${eventCode} roleplay. You spoke clearly and covered key points.`
  });
}
