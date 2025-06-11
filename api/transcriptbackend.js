export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  // 🔍 DEBUG LOG HERE
  console.log("📥 Received request body:", req.body);

  if (!url) {
    console.log("❌ No 'url' provided in request body.");
    return res.status(400).json({ error: 'Missing video URL' });
  }

  try {
    const response = await fetch('https://api.deepgram.com/v1/listen?model=nova-3&punctuate=true', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.glassedge_transcript}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    const transcript = data?.results?.channels?.[0]?.alternatives?.[0]?.transcript || '';

    res.status(200).json({ transcript });
  } catch (err) {
    console.error("❌ Deepgram transcription failed:", err);
    res.status(500).json({ error: 'Deepgram transcription failed.' });
  }
}
