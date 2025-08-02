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
        status: 'waiting',
        hostJoined: true,
        guestJoined: false,
        users: ['host'],
        createdAt: Date.now(),
        lastActive: Date.now()
      };
      return res.status(200).json({ roomCode: newCode });
    }

    // ✅ Join an existing room as guest
    if (action === 'join-room') {
      if (!roomCode || !rooms[roomCode]) {
        return res.status(404).json({ error: 'Room not found' });
      }

      const room = rooms[roomCode];
      if (room.guestJoined) {
        return res.status(400).json({ error: 'Guest already joined' });
      }

      room.status = 'active';
      room.guestJoined = true;
      room.users.push('guest');
      room.lastActive = Date.now();

      return res.status(200).json({ status: 'ok', room });
    }

    // ✅ Leave room (optional cleanup)
    if (action === 'leave-room') {
      if (roomCode && rooms[roomCode]) {
        delete rooms[roomCode];
        return res.status(200).json({ status: 'room deleted' });
      }
      return res.status(404).json({ error: 'Room not found' });
    }

    return res.status(400).json({ error: 'Invalid action' });
  }

  if (req.method === 'GET') {
    const { roomCode } = req.query;
    if (roomCode) {
      const room = rooms[roomCode];
      if (!room) return res.status(404).json({ error: 'Room not found' });
      return res.status(200).json({ status: room.status, room });
    }

    // ✅ Optionally auto-clean old rooms (30 min)
    const now = Date.now();
    for (const code in rooms) {
      if (now - rooms[code].lastActive > 30 * 60 * 1000) {
        delete rooms[code];
      }
    }

    return res.status(200).json({ rooms });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
