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

  // 1️⃣ Join the room
  const token = await getAuthToken();
  console.log("🚪 Joining room…");
  await actions.join({ userName: mode, authToken: token });

  // 2️⃣ Publish your mic & camera
  console.log("🎙 Audio on…");
  await actions.setLocalAudioEnabled(true);
  console.log("📹 Video on…");
  await actions.setLocalVideoEnabled(true);
  console.log("✅ Joined & published as", mode);

  // 3️⃣ Render on every peer update
  store.subscribe(() => {
    console.log("🔄 Store update (post-publish)");
    const raw = store.getState().peers;
    // normalize Map/Set/object/array → Array<peer>
    const peers = Array.isArray(raw)
      ? raw
      : raw instanceof Map
      ? Array.from(raw.values())
      : raw instanceof Set
      ? Array.from(raw)
      : raw && typeof raw[Symbol.iterator] === "function"
      ? Array.from(raw)
      : raw && typeof raw === "object"
      ? Object.values(raw)
      : [];

    console.log("✅ Normalized peers:", peers);
    const container = document.getElementById("video-section");
    if (!container) return;
    container.innerHTML = "";

    if (peers.length === 0) {
      container.textContent = "⏳ Waiting for video streams…";
      return;
    }

    peers.forEach((peer, idx) => {
      console.log(
        `👤 peer[${idx}] id=${peer.id} isLocal=${peer.isLocal}`,
        peer.videoTrack
      );
      const videoEl = document.createElement("video");
      videoEl.autoplay = true;
      videoEl.playsInline = true;
      videoEl.muted = peer.isLocal;

      if (peer.videoTrack) {
        console.log("🔗 Attaching track…");
        actions
          .attachVideo(peer.videoTrack, videoEl)
          .then(() => videoEl.play().catch(()=>{}))
          .catch(err => console.warn("⚠️ attach/play failed:", err));
      } else {
        console.warn("❌ No videoTrack for peer", peer.id);
      }

      container.appendChild(videoEl);
    });
  });

  // 4️⃣ Kick off an initial render pass
  console.log("⚡ Triggering initial render");
  hms.triggerOnSubscribe();
}

initVideoSession().catch(err => {
  console.error("❌ initVideoSession error:", err);
});
