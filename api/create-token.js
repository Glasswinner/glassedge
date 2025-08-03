import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { room_id, role } = req.body;

    if (!room_id || !role) {
      return res.status(400).json({ error: 'Missing room_id or role' });
    }

    // ✅ Create the join token payload
    const payload = {
      access_key: process.env.HMS_key,   // App Access Key
      room_id: room_id,
      user_id: Math.random().toString(36).substring(2, 10), // random user ID
      role: role,                        // "host" or "guest"
      type: 'app',
      version: 2,
      jti: Math.random().toString(36).substring(2) + Date.now() // unique token ID
    };

    // ✅ Sign with App Secret
    const token = jwt.sign(payload, process.env.ms_key, {
      algorithm: 'HS256',
      expiresIn: '1h'
    });

    return res.status(200).json({ token });

  } catch (err) {
    console.error('create-token error:', err);
    res.status(500).json({ error: 'Failed to create token' });
  }
}
