let progressBar = document.querySelector("#progressBar");
let songsEl = document.querySelector("#song");
let control = document.querySelector("#ctrl-icon");

songsEl.onloadedmetadata = function () {
  progressBar.max = songsEl.duration;
  progressBar.value = songsEl.currentTime;
};

control.addEventListener("click", () => {
  if (control.classList.contains("fa-play")) {
    songsEl.play();
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
  } else {
    songsEl.pause();
    control.classList.remove("fa-pause");
    control.classList.add("fa-play");
  }
});

progressBar.onchange = function () {
  songsEl.play();
  song.currentTime = progressBar.value;
  control.classList.add("fa-pause");
  control.classList.remove("fa-play");

};

if (songsEl.play()) {
  setInterval(() => {
    progressBar.value = songsEl.currentTime;
  }, 500);
}
