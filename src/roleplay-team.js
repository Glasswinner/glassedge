import { HMSReactiveStore } from "@100mslive/hms-video-store";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room_id");
const mode   = params.get("mode") === "host" ? "host" : "guest";

async function getAuthToken() {
  const res = await fetch('/api/create-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ room_id: roomId, role: mode })
  });
  const { token } = await res.json();
  return token;
}

async function initVideoSession() {
  const hms     = new HMSReactiveStore();
  const actions = hms.getActions();
  const store   = hms.getStore();
  const token   = await getAuthToken();

  // join the room and enable mic/cam
  await actions.join({ userName: mode, authToken: token });
  await actions.setAudioSettings({ enabled: true });
  await actions.setVideoSettings({ enabled: true });

  // render video tiles for peers
  store.subscribe(() => {
    const peers     = store.getState().peers;
    const container = document.getElementById('video-section');
    container.innerHTML = '';

    peers.forEach(peer => {
      const videoEl = document.createElement('video');
      videoEl.autoplay   = true;
      videoEl.playsInline = true;
      videoEl.muted      = peer.isLocal;
      container.appendChild(videoEl);
      if (peer.videoTrack) {
        actions.attachVideo(peer.videoTrack, videoEl);
      }
    });
  });
}

initVideoSession();
