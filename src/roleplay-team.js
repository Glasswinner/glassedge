// src/roleplay-team.js

import { HMSReactiveStore } from "@100mslive/hms-video-store";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room_id");
const mode   = params.get("mode") === "host" ? "host" : "guest";

// Fetches an auth token for this room and role
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

  // Subscribe inside so store/actions are in scope
  store.subscribe(() => {
    const raw = store.getState().peers;

    // INLINE normalization into an Array
    let peers = [];
    if (Array.isArray(raw)) {
      peers = raw;
    } else if (raw instanceof Map) {
      peers = Array.from(raw.values());
    } else if (raw instanceof Set) {
      peers = Array.from(raw);
    } else if (raw && typeof raw[Symbol.iterator] === "function") {
      peers = Array.from(raw);
    } else if (raw && typeof raw === "object") {
      peers = Object.values(raw);
    } else {
      console.warn("⚠️ Unable to normalize peersRaw:", raw);
      return;
    }

    const container = document.getElementById("video-section");
    if (!container) {
      console.error("❌ Missing #video-section container!");
      return;
    }
    container.innerHTML = "";

    if (peers.length === 0) {
      container.textContent = "⏳ Waiting for video streams…";
      return;
    }

    peers.forEach((peer) => {
      const videoEl = document.createElement("video");
      videoEl.autoplay    = true;
      videoEl.playsInline = true;
      videoEl.muted       = peer.isLocal;

      // Try SDK attach
      let attached = false;
      if (peer.videoTrack?.track) {
        try {
          actions.attachVideo(peer.videoTrack, videoEl);
          attached = true;
        } catch (err) {
          console.warn("attachVideo failed:", err);
        }
      }

      // Manual fallback
      if (!attached && peer.videoTrack?.track) {
        videoEl.srcObject = new MediaStream([peer.videoTrack.track]);
      }

      // Force playback
      videoEl.play().catch((err) => {
        console.warn("videoEl.play() failed:", err);
      });

      container.appendChild(videoEl);
    });
  });

  // Trigger initial render so you see your own tile immediately
  hms.triggerOnSubscribe();

  // Then join & publish
  const token = await getAuthToken();
  await actions.join({ userName: mode, authToken: token });
  await actions.setAudioSettings({ enabled: true });
  await actions.setVideoSettings({ enabled: true });
  console.log("✅ Joined as", mode);
}

initVideoSession().catch((err) => {
  console.error("❌ initVideoSession failed:", err);
  const container = document.getElementById("video-section");
  if (container) container.textContent = "⚠️ Video init failed. Check console.";
});
