export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // ✅ Generate a short room code for TDM
    const shortCode = "TDM-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // ✅ Call 100ms API to create a room using your template
    const response = await fetch('https://api.100ms.live/v2/rooms', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HMS_key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: shortCode,
        description: 'GlassEDGE TDM Session',
        template_id: process.env.template_key,
        region: 'us',        // Use 'us' for low latency in the US
        recording_info: { enabled: false },
        max_peers: 2,        // Hard cap for TDM
        enabled: true
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const roomData = await response.json();

    return res.status(200).json({
      room_id: roomData.id,    // needed to generate tokens
      room_code: shortCode     // the code you show to the user
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create 100ms room' });
  }
}
