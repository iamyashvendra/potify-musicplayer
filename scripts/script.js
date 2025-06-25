document.addEventListener("DOMContentLoaded", function () {
  const tracks = [
    {
      name: "Sun Sathiyaan 💔",
      artist: "ABCD2",
      cover: "img/1.jpg",
      source: "mp3/1.mp3",
      favorited: false,
    },
    {
      name: "ANTIDOTE",
      artist: "Karan Aujla",
      cover: "img/2.jpg",
      source: "mp3/2.mp3",
      favorited: true,
    }
    // Add more songs here easily
  ];

  let currentTrackIndex = 0;
  const audio = new Audio();
  const playBtn = document.querySelector(".play-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const trackName = document.querySelector(".album-info__track");
  const trackArtist = document.querySelector(".album-info__name");
  const trackCover = document.querySelector(".player-cover__img");
  const progressBar = document.querySelector(".progress__current");

  function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.source;
    trackName.textContent = track.name;
    trackArtist.textContent = track.artist;
    trackCover.src = track.cover;
    updateProgress();
  }

  function updateProgress() {
    audio.ontimeupdate = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = progress + "%";
    };
  }

  function playPause() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
  }

  playBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", nextTrack);
  prevBtn.addEventListener("click", prevTrack);

  loadTrack(currentTrackIndex);
});
