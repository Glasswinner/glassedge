export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Missing video URL" });
    }

    const deepgramRes = await fetch("https://api.deepgram.com/v1/listen?punctuate=true&model=nova-3", {
      method: "POST",
      headers: {
        "Authorization": `Token ${process.env.glassedge_transcript}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const text = await deepgramRes.text();
    console.log("🧠 Deepgram raw response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.status(500).json({ error: "Invalid JSON from Deepgram", raw: text });
    }

    if (!deepgramRes.ok) {
      console.error("❌ Deepgram error:", data);
      return res.status(500).json({ error: "Deepgram transcription failed", details: data });
    }

    const transcript = data?.results?.channels?.[0]?.alternatives?.[0]?.transcript || "";
    return res.status(200).json({ transcript });
  } catch (err) {
    console.error("🔥 Transcription error:", err);
    return res.status(500).json({ error: "Server error", message: err.message });
  }
}
