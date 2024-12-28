let boxEl = document.querySelector("#box");
let question = document.querySelector("#question");
let answerContainerEl = document.querySelector(".answer-container");
let scoreContainerEl = document.querySelector("#score");
let buttonEl = document.querySelector("#button");

// const questions = [
//   {
//     question: "Which is larget animal in the world?",
//     answers: [
//       { text: "Shark", correct: false },
//       { text: "Blue whale", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },

//   {
//     question: "Which is the smallest country in the world?",
//     answers: [
//       { text: "Vatican City", correct: true },
//       { text: "Bhutan", correct: false },
//       { text: "Nepal", correct: false },
//       { text: "Shri Lanka", correct: false },
//     ],
//   },

//   {
//     question: "Which is the largest desert in the world?",
//     answers: [
//       { text: "Kalahari", correct: false },
//       { text: "Gobi", correct: false },
//       { text: "Sahara", correct: false },
//       { text: "Antarctica", correct: true },
//     ],
//   },

//   {
//     question: "Which is the smallest continent in the world?",
//     answers: [
//       { text: "Asia", correct: false },
//       { text: "Australia", correct: true },
//       { text: "Arctic", correct: false },
//       { text: "Africa", correct: false },
//     ],
//   },
// ];

const questions1 = [
  {
    question: "What is the capital city of Italy?",
    answers: [
      { text: "Venice", correct: false },
      { text: "Rome", correct: true },
      { text: "Florence", correct: false },
      { text: "Milan", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Pb", correct: false },
    ],
  },
  {
    question: "Who is known as the Father of Computers?",
    answers: [
      { text: "Charles Babbage", correct: true },
      { text: "Alan Turing", correct: false },
      { text: "Ada Lovelace", correct: false },
      { text: "John von Neumann", correct: false },
    ],
  },
  {
    question: "Which is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "0°C", correct: true },
      { text: "32°C", correct: false },
      { text: "100°C", correct: false },
      { text: "-1°C", correct: false },
    ],
  },
];

const questions2 = [
  {
    question: "Which continent is known as the 'Dark Continent'?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question: "What is the currency of the United Kingdom?",
    answers: [
      { text: "Euro", correct: false },
      { text: "Pound Sterling", correct: true },
      { text: "Dollar", correct: false },
      { text: "Franc", correct: false },
    ],
  },
  {
    question: "What is the primary language spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "French", correct: false },
      { text: "English", correct: false },
    ],
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    answers: [
      { text: "Root", correct: false },
      { text: "Leaf", correct: true },
      { text: "Stem", correct: false },
      { text: "Flower", correct: false },
    ],
  },
];
const questions3 = [
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Marie Curie", correct: false },
    ],
  },
  {
    question: "What is the national animal of India?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Bengal Tiger", correct: true },
      { text: "Peacock", correct: false },
      { text: "Lion", correct: false },
    ],
  },
  {
    question: "Which is the longest bone in the human body?",
    answers: [
      { text: "Femur", correct: true },
      { text: "Tibia", correct: false },
      { text: "Humerus", correct: false },
      { text: "Radius", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Evening Star?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "Who wrote the epic poem 'The Odyssey'?",
    answers: [
      { text: "Homer", correct: true },
      { text: "Virgil", correct: false },
      { text: "Sophocles", correct: false },
      { text: "Aristotle", correct: false },
    ],
  },
];
const questions4 = [
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      { text: "300,000 km/s", correct: true },
      { text: "150,000 km/s", correct: false },
      { text: "450,000 km/s", correct: false },
      { text: "600,000 km/s", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Canberra", correct: true },
      { text: "Melbourne", correct: false },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    question: "What is the square root of 144?",
    answers: [
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "16", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    answers: [
      { text: "Leonardo da Vinci", correct: false },
      { text: "Michelangelo", correct: true },
      { text: "Raphael", correct: false },
      { text: "Donatello", correct: false },
    ],
  },
];
const questions5 = [
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    answers: [
      { text: "Italy", correct: false },
      { text: "France", correct: true },
      { text: "Spain", correct: false },
      { text: "Germany", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in sushi?",
    answers: [
      { text: "Rice", correct: true },
      { text: "Fish", correct: false },
      { text: "Seaweed", correct: false },
      { text: "Soy Sauce", correct: false },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Monaco", correct: false },
      { text: "Liechtenstein", correct: false },
      { text: "San Marino", correct: false },
    ],
  },
  {
    question: "Which instrument has 88 keys?",
    answers: [
      { text: "Violin", correct: false },
      { text: "Piano", correct: true },
      { text: "Guitar", correct: false },
      { text: "Flute", correct: false },
    ],
  },
];
const questions6 = [
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "South America", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
];
const questions7 = [
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false },
      { text: "120°C", correct: false },
    ],
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Alexander Fleming", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Louis Pasteur", correct: false },
    ],
  },
  {
    question: "What is the currency of the United Kingdom?",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
      { text: "Pound Sterling", correct: true },
      { text: "Yen", correct: false },
    ],
  },
  {
    question: "How many colors are there in a rainbow?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
];
const questions8 = [
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Mount Fuji", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Onion", correct: false },
      { text: "Lemon", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest by area?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: [
      { text: "Jane Austen", correct: true },
      { text: "Charlotte Bronte", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mary Shelley", correct: false },
    ],
  },
];
const questions9 = [
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Gold", correct: false },
      { text: "Steel", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Skin", correct: true },
      { text: "Liver", correct: false },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: [
      { text: "China", correct: false },
      { text: "Brazil", correct: true },
      { text: "United States", correct: false },
      { text: "Japan", correct: false },
    ],
  },
];
const questions10 = [
  {
    question: "What is the smallest country in the world by area?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "What is the speed of light?",
    answers: [
      { text: "300,000 km/s", correct: true },
      { text: "150,000 km/s", correct: false },
      { text: "400,000 km/s", correct: false },
      { text: "250,000 km/s", correct: false },
    ],
  },
  {
    question: "What is the national flower of Japan?",
    answers: [
      { text: "Lotus", correct: false },
      { text: "Cherry Blossom", correct: true },
      { text: "Rose", correct: false },
      { text: "Tulip", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Helium", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Who is the author of 'The Catcher in the Rye'?",
    answers: [
      { text: "J.D. Salinger", correct: true },
      { text: "F. Scott Fitzgerald", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "George Orwell", correct: false },
    ],
  },
];

questionsArray = [
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
  questions6,
  questions7,
  questions8,
  questions9,
  questions10,
];

let questions = [];

let questionNumber = 0;
let score = 0;

function renderQuiz() {
  boxEl.classList.remove("hide");
  scoreContainerEl.classList.add("hide");
  buttonEl.classList.add("hide");

  let random = Math.floor(Math.random() * questionsArray.length);
  console.log(random);

  questions = [...questionsArray[random]];

  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    showScoreCard();
  }
}

function showQuestion() {
  question.innerHTML = `${questionNumber + 1}. ${
    questions[questionNumber].question
  }`;

  answerContainerEl.innerHTML = "";

  questions[questionNumber].answers.forEach((answer) => {
    let answerDiv = document.createElement("button");
    answerDiv.className = "answer-btn";
    answerDiv.textContent = answer.text;
    answerDiv.dataset.correct = answer.correct;
    answerContainerEl.appendChild(answerDiv);
    answerDiv.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  let buttons = document.querySelectorAll(".answer-btn");
  if (e.target.dataset.correct === "false") {
    e.target.classList.add("incorrect");
  }
  if (e.target.dataset.correct === "true") {
    score++;
  }

  buttons.forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  buttonEl.classList.remove("hide");
  buttonEl.addEventListener("click", handleNextQuestion);
}

function handleNextQuestion() {
  questionNumber++;
  renderQuiz();
}

function showScoreCard() {
  boxEl.classList.add("hide");
  scoreContainerEl.classList.remove("hide");
  buttonEl.classList.remove("hide");
  buttonEl.innerHTML = "Play Again";

  scoreContainerEl.innerHTML = `Your score is ${score} out of ${questions.length}`;

  questionNumber = 0;
  score = 0;
  buttonEl.removeEventListener("click", handleNextQuestion);
  buttonEl.addEventListener("click", renderQuiz);
}

renderQuiz();
