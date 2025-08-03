import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const shortCode = "TDM-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // ✅ Add jti: unique ID per token
    const payload = {
      access_key: process.env.HMS_key,
      type: "management",
      version: 2,
      jti: Math.random().toString(36).substring(2) + Date.now() // unique ID
    };

    const managementToken = jwt.sign(payload, process.env.ms_key, {
      algorithm: 'HS256',
      expiresIn: '10m'
    });

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

    const raw = await response.text();

    if (!response.ok) {
      console.error("100ms error:", raw);
      return res.status(response.status).json({ error: raw });
    }

    const roomData = JSON.parse(raw);

    return res.status(200).json({
      room_id: roomData.id,
      room_code: shortCode
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create 100ms room' });
  }
}
