// src/roleplay-team.js

import { HMSReactiveStore } from "@100mslive/hms-video-store";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room_id");
const mode   = params.get("mode") === "host" ? "host" : "guest";

// Fetches an auth token for this room and role
async function getAuthToken() {
  console.log("🔑 Fetching auth token for room:", roomId, "role:", mode);
  const res = await fetch("/api/create-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ room_id: roomId, role: mode }),
  });
  const { token } = await res.json();
  console.log("🔑 Received token:", token);
  return token;
}

async function initVideoSession() {
  console.log("🚀 Initializing video session...");
  const hms     = new HMSReactiveStore();
  const actions = hms.getActions();
  const store   = hms.getStore();

  // Subscribe inside so store/actions are in scope
  store.subscribe(() => {
    console.log("🔄 Store update received");
    const raw = store.getState().peers;
    console.log("🔍 Raw peersState:", raw, raw?.constructor?.name);

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
    console.log("✅ Normalized peers array:", peers);

    const container = document.getElementById("video-section");
    if (!container) {
      console.error("❌ Missing #video-section container!");
      return;
    }
    container.innerHTML = "";

    if (peers.length === 0) {
      console.log("⏳ No peers yet, showing placeholder");
      container.textContent = "⏳ Waiting for video streams…";
      return;
    }

    peers.forEach((peer, idx) => {
      console.log(`👤 Rendering peer[${idx}]:`, peer.id, "isLocal:", peer.isLocal);

      const videoEl = document.createElement("video");
      videoEl.autoplay    = true;
      videoEl.playsInline = true;
      videoEl.muted       = peer.isLocal;

      // Try SDK attach
      let attached = false;
      if (peer.videoTrack?.track) {
        console.log("🔗 Attempting SDK attach for peer:", peer.id);
        try {
          actions.attachVideo(peer.videoTrack, videoEl);
          attached = true;
          console.log("✅ SDK attach succeeded for peer:", peer.id);
        } catch (err) {
          console.warn("⚠️ attachVideo failed for peer:", peer.id, err);
        }
      }

      // Manual fallback
      if (!attached && peer.videoTrack?.track) {
        console.log("🔄 Falling back to manual MediaStream for peer:", peer.id);
        videoEl.srcObject = new MediaStream([peer.videoTrack.track]);
      }

      // Force playback
      videoEl.play().then(() => {
        console.log("▶️ videoEl.play() succeeded for peer:", peer.id);
      }).catch((err) => {
        console.warn("⏯️ videoEl.play() failed for peer:", peer.id, err);
      });

      container.appendChild(videoEl);
    });
  });

  // Trigger initial render so you see your own tile immediately
  console.log("⚡ Triggering initial store callback");
  hms.triggerOnSubscribe();

  // Then join & publish
  const token = await getAuthToken();
  console.log("🚪 Joining room with token");
  await actions.join({ userName: mode, authToken: token });

  console.log("🎙 Enabling audio");
  await actions.setAudioSettings({ enabled: true });

  console.log("📹 Enabling video");
  await actions.setVideoSettings({ enabled: true });

  console.log("✅ Joined as", mode);
}

initVideoSession()
  .then(() => console.log("🏁 initVideoSession complete"))
  .catch((err) => {
    console.error("❌ initVideoSession failed:", err);
    const container = document.getElementById("video-section");
    if (container) container.textContent = "⚠️ Video init failed. Check console.";
  });
