// ✅ transcriptbackend.js (replaces Cloudinary logic)
// Accepts base64 audio/video from frontend and sends to Deepgram

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { base64, mimetype } = req.body;

    if (!base64 || !mimetype) {
      return res.status(400).json({ error: 'Missing audio data or mimetype' });
    }

    const binary = Buffer.from(base64.split(',')[1], 'base64');

    const deepgramRes = await fetch('https://api.deepgram.com/v1/listen?punctuate=true&model=nova-3', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.glassedge_transcript}`,
        'Content-Type': mimetype,
      },
      body: binary
    });

    const data = await deepgramRes.json();

    if (!deepgramRes.ok) {
      console.error("❌ Deepgram failed:", data);
      return res.status(500).json({ error: 'Deepgram transcription failed', details: data });
    }

    const transcript = data?.results?.channels?.[0]?.alternatives?.[0]?.transcript || '';
    return res.status(200).json({ transcript });
  } catch (err) {
    console.error("🔥 Transcript error:", err);
    return res.status(500).json({ error: 'Server error', message: err.message });
  }
}
