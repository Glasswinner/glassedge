export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'Missing video URL' });
  }

  try {
    const response = await fetch('https://api.deepgram.com/v1/listen?punctuate=true', {
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
    console.error('Deepgram error:', err);
    res.status(500).json({ error: 'Deepgram transcription failed.' });
  }
}
