// /api/rooms.js

let rooms = {};

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
        status: 'waiting',    // Always start as waiting
        users: [],            // Track users
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

      // Allow only the first guest to join and flip to active
      if (room.status === 'active') {
        return res.status(400).json({ error: 'Room already active or full' });
      }

      room.status = 'active';
      room.users.push('guest');
      return res.status(200).json({ status: 'ok' });
    }

    return res.status(400).json({ error: 'Invalid action' });
  }

  // ✅ GET: check room status
  if (req.method === 'GET') {
    const { roomCode } = req.query;
    if (roomCode) {
      const room = rooms[roomCode];
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
      return res.status(200).json({ status: room.status });
    }

    return res.status(200).json({ rooms });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
