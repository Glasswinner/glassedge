// src/tdm.js
const API_BASE = window.location.origin;

function getEventCode() {
  return new URLSearchParams(window.location.search).get('event') || '';
}

async function createRoom() {
  try {
    const res = await fetch(`${API_BASE}/api/create-room`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    if (res.ok && data.room_id && data.room_code) {
      const eventCode = getEventCode();
      window.location.href =
        `roleplayscenarioteam.html?event=${encodeURIComponent(eventCode)}` +
        `&room_id=${encodeURIComponent(data.room_id)}` +
        `&code=${encodeURIComponent(data.room_code)}` +
        `&mode=host`;
    } else {
      alert('❌ Failed to create room: ' + (data.error || 'Unknown error'));
    }
  } catch (err) {
    alert('❌ Network error creating room: ' + err.message);
  }
}

function joinRoom() {
  const code = prompt('Enter the room code:');
  if (!code) return;
  const eventCode = getEventCode();
  window.location.href =
    `roleplayscenarioteam.html?event=${encodeURIComponent(eventCode)}` +
    `&code=${encodeURIComponent(code.trim())}` +
    `&mode=guest`;
}

function sameDevice() {
  const eventCode = getEventCode();
  window.location.href =
    `roleplayscenario.html?event=${encodeURIComponent(eventCode)}` +
    `&tdm=true`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Create Room card
  const createCard = document.getElementById('create-room-card');
  createCard.querySelector('img').addEventListener('click', createRoom);
  createCard.querySelector('.click-here').addEventListener('click', createRoom);

  // Join Room card
  const joinCard = document.getElementById('join-room-card');
  joinCard.querySelector('img').addEventListener('click', joinRoom);
  joinCard.querySelector('.click-here').addEventListener('click', joinRoom);

  // Same Device card
  const sameCard = document.getElementById('same-device-card');
  sameCard.querySelector('img').addEventListener('click', sameDevice);
  sameCard.querySelector('.click-here').addEventListener('click', sameDevice);
});