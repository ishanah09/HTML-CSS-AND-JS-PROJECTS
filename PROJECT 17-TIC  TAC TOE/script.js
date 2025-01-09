let restartButtonEl = document.querySelector("#restarButton");
let resultEl = document.querySelector("#result");
let gameBox = document.querySelector(".game-box");
let boxEl = document.querySelectorAll(".box");

let currentPlayer = "X";
let winnerPlayer = "";
let winnerArray = [];

let playerXMoves = [];
let playerOMoves = [];
const winningConditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal (top-left to bottom-right)
  [2, 4, 6], // Diagonal (top-right to bottom-left)
];

boxEl.forEach((box, i) => {
  box.addEventListener("click", () => {
    box.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
      playerXMoves.push(i);
    } else {
      playerOMoves.push(i);
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    resultEl.innerHTML = `Player ${currentPlayer}'s turn`;
    box.classList.add("disabled");

    console.log("X is ", playerXMoves);
    console.log("o is ", playerOMoves);
    checkWinner();
  });
});

function checkWinner() {
  let winnerFound = false;
  winningConditions.forEach((items) => {
    if (items.every((item) => playerXMoves.includes(item))) {
      console.log("X is the winner!");
      winnerFound = true;
      winnerPlayer = "X";
      winnerArray = items;
    }
    if (items.every((item) => playerOMoves.includes(item))) {
      console.log("O is the winner!");
      winnerFound = true;
      winnerPlayer = "O";
      winnerArray = items;
    }

    if (winnerFound) {
      boxEl.forEach((box) => {
        box.classList.add("disabled");
        resultEl.innerHTML = `Player ${winnerPlayer} Wins!`;
      });

      for (let i of winnerArray) {
        boxEl[i].classList.add("winner");
      }
    }

    if (playerXMoves.length + playerOMoves.length == 9) {
      boxEl.forEach((box) => {
        box.classList.add("disabled");
        if (!winnerFound) {
        resultEl.innerHTML = `It's a draw!`;
        }
      });
    }
  });
}

function winners(array) {
  for (let i = 0; i <= array.length; i++) {
    boxEl[i].classList.add("winner");
  }
}

function restartGame() {
  currentPlayer = "X";
  winnerPlayer = "";

  playerXMoves = [];
  playerOMoves = [];

  boxEl.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("disabled");
    box.classList.remove("winner");
  });
}

restartButtonEl.addEventListener("click", () => {
  restartGame();
});
