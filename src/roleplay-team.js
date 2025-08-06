// src/roleplay-team.js

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

  await actions.join({ userName: mode, authToken: token });
  console.log('✅ Joined room as', mode, store.getState().localPeer?.id);

  await actions.setAudioSettings({ enabled: true });
  await actions.setVideoSettings({ enabled: true });
  console.log('✅ Published local audio/video');

  store.subscribe(() => {
    const raw = store.getState().peers;
    console.log('🔍 peersRaw:', raw, raw?.constructor?.name);

    // normalize
    let peers = [];
    if (Array.isArray(raw)) peers = raw;
    else if (raw instanceof Map)   peers = Array.from(raw.values());
    else if (raw instanceof Set)   peers = Array.from(raw);
    else if (raw && raw[Symbol.iterator]) peers = Array.from(raw);
    else if (raw && typeof raw === 'object') peers = Object.values(raw);
    else return console.warn('⚠️ Unknown peers type:', raw);
    console.log('✅ normalized peers:', peers);

    const container = document.getElementById('video-section');
    if (!container) return console.error('❌ Missing #video-section');
    container.innerHTML = '';

    if (peers.length === 0) {
      container.textContent = '⏳ Waiting for video streams…';
      return;
    }

    peers.forEach(peer => {
      console.group(`Peer ${peer.id}`);
      console.log('peer.isLocal:', peer.isLocal);
      console.log('peer.videoTrack:', peer.videoTrack);

      // Try multiple ways to extract a MediaStream
      let stream = null;
      if (peer.videoTrack?.track) {
        console.log('⏺ raw track:', peer.videoTrack.track);
        stream = new MediaStream([peer.videoTrack.track]);
      } 
      else if (peer.videoTrack instanceof MediaStream) {
        console.log('⏺ already MediaStream');
        stream = peer.videoTrack;
      } 
      else if (peer.videoTrack?.stream instanceof MediaStream) {
        console.log('⏺ found .stream property');
        stream = peer.videoTrack.stream;
      }

      if (!stream) {
        console.warn('⚠️ No MediaStream for peer', peer.id);
      } else {
        console.log('🎥 Attaching MediaStream with', stream.getTracks().length, 'track(s)');
      }

      // create and style video
      const videoEl = document.createElement('video');
      videoEl.autoplay    = true;
      videoEl.playsInline = true;
      videoEl.muted       = peer.isLocal;
      videoEl.width       = 300;
      videoEl.height      = 200;
      videoEl.style.objectFit = 'cover';

      // attach stream & play
      if (stream) {
        videoEl.srcObject = stream;
        videoEl.play()
          .then(() => console.log('▶️ play() succeeded'))
          .catch(err => console.warn('⏯ play() failed:', err));
      }

      container.appendChild(videoEl);
      console.groupEnd();
    });
  });
}

initVideoSession().catch(err => console.error('Init failed:', err));
