// /api/rooms.js

// 🔹 In-memory store (replace with DB/Redis later)
let rooms = {};

// 🔹 Helper: Generate secure random room codes
function generateRoomCode(length = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { action, roomCode } = req.body;

    // ✅ Create a new room
    if (action === 'make-room') {
      const newCode = generateRoomCode();
      rooms[newCode] = {
        status: 'waiting',
        scenario: null,
        users: [],
        createdAt: Date.now()
      };
      return res.status(200).json({ roomCode: newCode });
    }

    // ✅ Join an existing room
    if (action === 'join-room') {
      if (!roomCode || !rooms[roomCode]) {
        return res.status(404).json({ error: 'Room not found' });
      }

      const room = rooms[roomCode];
      if (room.status !== 'waiting') {
        return res.status(400).json({ error: 'Room already active or full' });
      }

      // Activate room
      room.status = 'active';
      // Here you could trigger roleplay generation and attach it
      if (!room.scenario) {
        room.scenario = "🔹 Placeholder scenario - generate real one here.";
      }

      return res.status(200).json({ status: 'ok', scenario: room.scenario });
    }

    return res.status(400).json({ error: 'Invalid action' });
  }

  // GET request for debugging: list rooms
  if (req.method === 'GET') {
    return res.status(200).json({ rooms });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
