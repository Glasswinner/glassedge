import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // ✅ Create a short TDM room code
    const shortCode = "TDM-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // ✅ Generate Management Token using your ms_key
    const payload = {
      access_key: process.env.HMS_key, // App Access Key
      type: "management",              // required for room creation
      version: 2
    };

    const managementToken = jwt.sign(payload, process.env.ms_key, {
      algorithm: 'HS256',
      expiresIn: '10m'
    });

    // ✅ Call 100ms API to create room
    const response = await fetch('https://api.100ms.live/v2/rooms', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${managementToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: shortCode,
        description: 'GlassEDGE TDM Session',
        template_id: process.env.template_key,
        region: 'us',
        max_peers: 2
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const roomData = await response.json();

    return res.status(200).json({
      room_id: roomData.id,
      room_code: shortCode
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create 100ms room' });
  }
}
