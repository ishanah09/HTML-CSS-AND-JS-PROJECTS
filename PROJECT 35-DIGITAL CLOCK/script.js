let hoursEl = document.querySelector("#hours");
let minutesEl = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");

function makeTwoDigit(number) {
  return number > 9 ? number : `0${number}`;
}

setInterval(() => {
  let curenttime = new Date();
  let hours = makeTwoDigit(curenttime.getHours());
  let minutes = makeTwoDigit(curenttime.getMinutes());
  let seconds = makeTwoDigit(curenttime.getSeconds());

  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}, 1000);
