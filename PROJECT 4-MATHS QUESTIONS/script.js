let scoreEl = document.querySelector("#score");
let questionEl = document.querySelector("#question");

let formEl = document.querySelector("#form");
let answer;
let score = 0;

let randomNumber1;
let randomNumber2;

function showQuestion() {
  let questionNumber = Math.ceil(Math.random() * 4);

  randomNumber1 = Math.ceil(Math.random() * 100);
  randomNumber2 = Math.ceil(Math.random() * 100);

  switch (questionNumber) {
    case 1:
      addition();
      break;

    case 2:
      subtraction();
      break;

    case 3:
      multiplication();
      break;

    case 4:
      division();
      break;
  }
}

showQuestion();

function addition() {
  questionEl.innerHTML = `What is ${randomNumber1} added to ${randomNumber2} ?`;
  answer = randomNumber1 + randomNumber2;
  console.log(answer);
}

function subtraction() {
  if (randomNumber2 > randomNumber1) {
    questionEl.innerHTML = `What is ${randomNumber1} subtracted from ${randomNumber2} ?`;
    answer = randomNumber2 - randomNumber1;
    console.log(answer);
  } else {
    questionEl.innerHTML = `What is ${randomNumber2} subtracted from ${randomNumber1} ?`;
    answer = randomNumber1 - randomNumber2;
    console.log(answer);
  }
}

function multiplication() {
  questionEl.innerHTML = `What is ${Math.ceil(
    randomNumber1 / 5
  )} multiplied by ${Math.floor(randomNumber2 / 5)} ?`;

  answer = Math.ceil(randomNumber1 / 5) * Math.floor(randomNumber2 / 5);
  console.log(answer);
}

function division() {
  let randomNumber3 = Math.ceil(Math.random() * 15);
  let randomNumber4 = Math.ceil(Math.random() * 15);

  let number = randomNumber3 * randomNumber4;

  questionEl.innerHTML = `What is ${number} divided by ${randomNumber4} ?`;
  answer = number / randomNumber4;
  console.log(answer);
}

function checkAnswer(event) {
  event.preventDefault();
  let formData = new FormData(formEl);
  let data = {};
  formData.forEach((value, key) => {
    data[key] = +value;
  });

  if (data.answer === answer) {
    score++;
    Toastify({
      text: `Your are right and your score is ${score}`,
      duration: 1500,

      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`

      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } else {
    score--;
    Toastify({
      text: `Your are wrong and your score is ${score}`,
      duration: 1500,

      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`

      style: {
        background: "linear-gradient(to right, #e33217, #ff001e)",
      },
    }).showToast();
  }
  scoreEl.innerHTML = score;

  event.target.reset();
  showQuestion();
}
