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
    // 1) grab whatever comes back as “peers”
    const peersRaw = store.getState().peers;

    // 2) normalize into a real Array
    let peers = [];
    if (Array.isArray(peersRaw)) {
      // already an array
      peers = peersRaw;
    } else if (peersRaw instanceof Map) {
      // Map<peerId, peer>
      peers = Array.from(peersRaw.values());
    } else if (peersRaw instanceof Set) {
      // Set<peer>
      peers = Array.from(peersRaw);
    } else if (peersRaw && typeof peersRaw[Symbol.iterator] === 'function') {
      // any other iterable
      peers = Array.from(peersRaw);
    } else if (peersRaw && typeof peersRaw === 'object') {
      // plain { peerId: peer, … }
      peers = Object.values(peersRaw);
    } else {
      console.warn('⚠️ Unable to normalize peersRaw:', peersRaw);
      return;
    }

    // (Optional) inspect what you got back
    console.log('✅ normalized peers array:', peers);

    // 3) clear out old videos
    const container = document.getElementById('video-section');
    if (!container) {
      console.error('❌ Missing #video-section container!');
      return;
    }
    container.innerHTML = '';

    // 4) now safely loop
    peers.forEach(peer => {
      const videoEl = document.createElement('video');
      videoEl.autoplay    = true;
      videoEl.playsInline = true;
      videoEl.muted       = peer.isLocal;

      // Attach video track
      if (peer.videoTrack?.track) {
        // Preferred: SDK attach
        actions.attachVideo(peer.videoTrack, videoEl);
        // Fallback: manual stream attach
        // videoEl.srcObject = new MediaStream([peer.videoTrack.track]);
      }

      container.appendChild(videoEl);
    });
  });
}

initVideoSession();
