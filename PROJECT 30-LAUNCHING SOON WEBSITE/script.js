let dayEl = document.querySelector("#day");
let hoursEl = document.querySelector("#hours");
let minutesEl = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");

let timeDiff;

function makeTwoDigit(number) {
  return number > 9 ? number : `0${number}`;
}

let x=setInterval(() => {
  let lauchDate = new Date("jan 31 2025 ");
  let currentdate = new Date();
  timeDiff = lauchDate.getTime() - currentdate.getTime();


  let days = makeTwoDigit(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
  dayEl.innerHTML = days;

  let hours = makeTwoDigit(
    Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  hoursEl.innerHTML = hours;
  let minutes = makeTwoDigit(
    Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  );
  minutesEl.innerHTML = minutes;
  let seconds = makeTwoDigit(Math.floor((timeDiff % (1000 * 60)) / 1000));

  secondsEl.innerHTML = seconds;


  if (timeDiff < 0) {
    clearInterval(x)
    dayEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
  }
}, 1000);


