// src/roleplay-team.js

import { HMSReactiveStore } from "@100mslive/hms-video-store";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room_id");
const mode   = params.get("mode") === "host" ? "host" : "guest";

async function getAuthToken() {
  const res = await fetch("/api/create-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ room_id: roomId, role: mode }),
  });
  const { token } = await res.json();
  return token;
}

async function initVideoSession() {
  const hms     = new HMSReactiveStore();
  const actions = hms.getActions();
  const store   = hms.getStore();

  // Subscribe *inside* init so `store` and `actions` are in scope
  store.subscribe(() => {
    const raw = store.getState().peers;
    // … your normalization logic here …
    const peers = normalize(raw); // assume you inline the same normalization

    const container = document.getElementById("video-section");
    container.innerHTML = "";
    if (peers.length === 0) {
      container.textContent = "⏳ Waiting for video streams…";
      return;
    }

    peers.forEach(peer => {
      const videoEl = document.createElement("video");
      videoEl.autoplay    = true;
      videoEl.playsInline = true;
      videoEl.muted       = peer.isLocal;

      let attached = false;
      if (peer.videoTrack?.track) {
        try {
          actions.attachVideo(peer.videoTrack, videoEl);
          attached = true;
        } catch {}
      }
      if (!attached && peer.videoTrack?.track) {
        videoEl.srcObject = new MediaStream([peer.videoTrack.track]);
      }
      videoEl.play().catch(()=>{});
      container.appendChild(videoEl);
    });
  });

  // Immediately trigger an initial render
  hms.triggerOnSubscribe();

  // Then join & publish
  const token = await getAuthToken();
  await actions.join({ userName: mode, authToken: token });
  await actions.setAudioSettings({ enabled: true });
  await actions.setVideoSettings({ enabled: true });
}

initVideoSession().catch(err => {
  console.error("❌ initVideoSession failed:", err);
});
