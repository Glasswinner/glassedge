export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { roomName } = req.query;

  if (!roomName) {
    return res.status(400).json({ error: 'Missing roomName parameter' });
  }

  try {
    const response = await fetch(`https://api.daily.co/v1/rooms/${roomName}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${process.env.video_key}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    return res.status(200).json({ message: `Room ${roomName} deleted` });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to delete room' });
  }
}
