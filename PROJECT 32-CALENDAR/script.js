let dateEl = document.querySelector("#date");
let dayEl = document.querySelector("#day");
let monthEl = document.querySelector("#month");
let yearEl = document.querySelector("#year");

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function makeTwoDigit(number) {
  return number > 9 ? number : `0${number}`;
}

let currentdate = new Date();

dateEl.innerHTML = makeTwoDigit(currentdate.getDate());

dayEl.innerHTML = daysOfTheWeek[currentdate.getDay()];
monthEl.innerHTML = monthsOfTheYear[currentdate.getMonth()];
yearEl.innerHTML = currentdate.getFullYear();
