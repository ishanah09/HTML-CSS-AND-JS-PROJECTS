let questionEl = document.querySelector(".question");
let answerEl = document.querySelector(".answer");
let yearsEl = document.querySelector("#years");
let monthsEl = document.querySelector("#months");
let daysEl = document.querySelector("#days");

let button1El = document.querySelector("#button1");
let button2El = document.querySelector("#button2");
let dateinput = document.querySelector("#dob");
let input = document.querySelector(".input");

button1El.addEventListener("click", () => {
  let dateOfBirth = dateinput.value;
  dateOfBirth = new Date(dateOfBirth);

  if (isNaN(dateOfBirth.getTime()) || dateOfBirth - new Date() > 0) {
    alert("please enter valid DATE OF BIRTH");
    dateinput.value = "";
  } else {
    questionEl.classList.toggle("hide");
    answerEl.classList.toggle("hide");
    input.classList.toggle("hide");
    ageUpdate(dateOfBirth);
  }
});

button2El.addEventListener("click", () => {
  questionEl.classList.toggle("hide");
  answerEl.classList.toggle("hide");
  input.classList.toggle("hide");
  dateinput.value = "";
});

function makeTwoDigitNumber(number) {
  return number > 9 ? number : `0${number}`;
}

function ageUpdate(dateOfBirth) {
  const currentDate = new Date();

  let years = currentDate.getFullYear() - dateOfBirth.getFullYear();

  let months = currentDate.getMonth() - dateOfBirth.getMonth();

  let days = currentDate.getDate() - dateOfBirth.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += previousMonth.getDate();
  }

  yearsEl.innerHTML = makeTwoDigitNumber(years);
  monthsEl.innerHTML = makeTwoDigitNumber(months);
  daysEl.innerHTML = makeTwoDigitNumber(days);
}
