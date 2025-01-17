let timerEl = document.querySelector("#timer");
let playButton = document.querySelector("#play");
let resetButton = document.querySelector("#reset");
let stopButton = document.querySelector("#stop");

let hourseEl = document.querySelector("#hours");
let minutesEl = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");
let milisecEl = document.querySelector("#milisec");

let hours = 0;
let minutes = 0;
let sec = 0;
let milisec = 0;
let interval;

resetButton.classList.add("hide");
stopButton.classList.add("hide");
timerEl.classList.add("border-none");

function makeTwoDigit(number) {
  return number > 9 ? number : `0${number}`;
}

playButton.addEventListener("click", () => {
  playButton.classList.add("hide");
  resetButton.classList.remove("hide");
  stopButton.classList.remove("hide");
  timerEl.classList.remove("border-none");

  interval = setInterval(() => {
    milisec += 10;

    if (milisec >= 1000) {
      milisec = 0;
      sec++;
    }

    if (sec >= 60) {
      sec = 0;
      minutes++;
    }

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    milisecEl.innerHTML = makeTwoDigit(Math.floor(milisec / 10)); //
    secondsEl.innerHTML = makeTwoDigit(sec);
    minutesEl.innerHTML = "";
    hourseEl.innerHTML = "";

    if (minutes > 0 || hours > 0) {
      minutesEl.innerHTML = `${makeTwoDigit(minutes)}:`;
    }

    if (hours > 0) {
      hourseEl.innerHTML = `${makeTwoDigit(hours)}:`;
    }
  }, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);

  playButton.style.width = "50%";
  playButton.classList.remove("hide");
  stopButton.classList.add("hide");
  timerEl.classList.add("border-none");
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);

  hours = 0;
  minutes = 0;
  sec = 0;
  milisec = 0;

  milisecEl.innerHTML = "00";
  secondsEl.innerHTML = "00";

  minutesEl.innerHTML = "";

  hourseEl.innerHTML = "";

  playButton.classList.remove("hide");
  resetButton.classList.add("hide");
  stopButton.classList.add("hide");
  playButton.style.width = "100%";
  timerEl.classList.add("border-none");
});
