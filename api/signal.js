// /api/signal.js

// 🔹 In-memory signaling store (replace with Redis or DB later if needed)
let signals = {};

/**
 * POST: Send a signaling message
 * Body: { roomCode, type: 'offer'|'answer'|'candidate', data: <object> }
 *
 * GET: Fetch all pending signaling messages for a room
 * Query: ?roomCode=XXXX
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { roomCode, type, data } = req.body;

    if (!roomCode || !type || !data) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!signals[roomCode]) signals[roomCode] = [];

    // Save the signaling message for this room
    signals[roomCode].push({ type, data, timestamp: Date.now() });

    return res.status(200).json({ status: 'ok' });
  }

  if (req.method === 'GET') {
    const { roomCode } = req.query;
    if (!roomCode) return res.status(400).json({ error: 'Missing roomCode' });

    const messages = signals[roomCode] || [];
    // Clear messages after fetching so they aren’t sent multiple times
    signals[roomCode] = [];

    return res.status(200).json({ messages });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
