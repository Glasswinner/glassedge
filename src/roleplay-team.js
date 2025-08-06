// src/roleplay-team.js

import { HMSReactiveStore } from "@100mslive/hms-video-store";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room_id");
const mode   = params.get("mode") === "host" ? "host" : "guest";

// Fetches an auth token for this room and role from your backend
async function getAuthToken() {
  const res = await fetch('/api/create-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ room_id: roomId, role: mode })
  });
  const { token } = await res.json();
  return token;
}

// Initializes the video session: join room, enable mic/cam, and render peers
async function initVideoSession() {
  const hms     = new HMSReactiveStore();
  const actions = hms.getActions();
  const store   = hms.getStore();
  const token   = await getAuthToken();

  // Join the room and enable audio/video
  await actions.join({ userName: mode, authToken: token });
  await actions.setAudioSettings({ enabled: true });
  await actions.setVideoSettings({ enabled: true });

  // Subscribe to store updates and render video elements for each peer
  store.subscribe(() => {
    const peersState = store.getState().peers;
    // Convert peersState (Map or object) into an array
    const peers = peersState instanceof Map
      ? Array.from(peersState.values())
      : Object.values(peersState);

    const container = document.getElementById('video-section');
    container.innerHTML = '';

    peers.forEach(peer => {
      const videoEl = document.createElement('video');
      videoEl.autoplay    = true;
      videoEl.playsInline = true;
      videoEl.muted       = peer.isLocal;
      container.appendChild(videoEl);

      if (peer.videoTrack) {
        actions.attachVideo(peer.videoTrack, videoEl);
      }
    });
  });
}

initVideoSession();
