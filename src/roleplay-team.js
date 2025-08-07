// src/roleplay-team.js

import { HMSReactiveStore } from "@100mslive/hms-video-store";

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room_id");
const mode   = params.get("mode") === "host" ? "host" : "guest";

async function getAuthToken() {
  console.log("🔑 Fetching auth token…");
  const res = await fetch("/api/create-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ room_id: roomId, role: mode }),
  });
  const { token } = await res.json();
  console.log("🔑 Received token");
  return token;
}

async function initVideoSession() {
  console.log("🚀 initVideoSession starting…");
  const hms     = new HMSReactiveStore();
  const actions = hms.getActions();
  const store   = hms.getStore();

  // 1️⃣ Join & publish *first*
  const token = await getAuthToken();
  console.log("🚪 Joining room…");
  await actions.join({ userName: mode, authToken: token });
  console.log("🎙 Audio on…");
  await actions.setAudioSettings({ enabled: true });
  console.log("📹 Video on…");
  await actions.setVideoSettings({ enabled: true });
  console.log("✅ Joined & published as", mode);

  // 2️⃣ Now subscribe & render
  store.subscribe(() => {
    console.log("🔄 Store update (post-publish)");
    const raw = store.getState().peers;
    console.log("🔍 Raw peersState:", raw);

    // Inline normalize…
    let peers = [];
    if (Array.isArray(raw)) peers = raw;
    else if (raw instanceof Map) peers = Array.from(raw.values());
    else if (raw instanceof Set) peers = Array.from(raw);
    else if (raw && typeof raw[Symbol.iterator] === "function") peers = Array.from(raw);
    else if (raw && typeof raw === "object") peers = Object.values(raw);
    console.log("✅ Normalized peers:", peers);

    const container = document.getElementById("video-section");
    if (!container) return;
    container.innerHTML = "";
    if (peers.length === 0) {
      container.textContent = "⏳ Waiting for video streams…";
      return;
    }

    peers.forEach((peer, idx) => {
      console.log(`👤 peer[${idx}] id=${peer.id} isLocal=${peer.isLocal}`, peer.videoTrack);
      const videoEl = document.createElement("video");
      videoEl.autoplay = true;
      videoEl.playsInline = true;
      videoEl.muted = peer.isLocal;

      // Attach logic
      if (peer.videoTrack?.track) {
        console.log("🔗 Attaching track…");
        try {
          actions.attachVideo(peer.videoTrack, videoEl);
          console.log("✅ SDK attach OK");
        } catch (err) {
          console.warn("⚠️ SDK attach failed:", err);
          videoEl.srcObject = new MediaStream([peer.videoTrack.track]);
          console.log("✅ Manual attach OK");
        }
        videoEl.play().catch(e => console.warn("⏯ play() failed:", e));
      } else {
        console.warn("❌ No videoTrack for peer", peer.id);
      }

      container.appendChild(videoEl);
    });
  });

  // 3️⃣ Immediate initial render
  console.log("⚡ Triggering initial render");
  hms.triggerOnSubscribe();
}

initVideoSession().catch(err => {
  console.error("❌ initVideoSession error:", err);
});
