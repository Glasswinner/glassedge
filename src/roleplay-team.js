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
    }

    // (Optional) inspect what you got back
    console.log('normalized peers array:', peers);

    // 3) clear out old videos
    const container = document.getElementById('video-section');
    container.innerHTML = '';

    // 4) now safely loop
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
