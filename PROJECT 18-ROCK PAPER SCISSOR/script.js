let scoreEl = document.querySelector("#score");
let rulesEl = document.querySelector("#rules");
let crossBtnEl = document.querySelectorAll(".cross-btn");
let rulesContainerEl = document.querySelector("#rules-container");

let rockEl = document.querySelector("#rock");
let paperEl = document.querySelector("#paper");
let scissorEl = document.querySelector("#scissor");

let gameContainerEl = document.querySelector("#game-container");
let containerEl = document.querySelector("#container");
let resultContainerEl = document.querySelector("#result-container");
let resultEl = document.querySelector("#result");
let playButtonEl = document.querySelector("#playBtn");

let userEl = document.querySelector("#user");
let houseEl = document.querySelector("#house");
let houseCircleEl = document.querySelector("#house-circle");

function appendUserImage(name) {
  userEl.innerHTML = "";
  let userDiv = document.createElement("div");
  userDiv.className = name;
  let userImage = document.createElement("img");
  userImage.src = `./images/icon-${name}.svg`;
  userEl.appendChild(userDiv);
  userDiv.appendChild(userImage);
  return userDiv;
}

function appendHouseImage(name) {
  houseEl.innerHTML = "";
  let houseDiv = document.createElement("div");
  houseDiv.className = name;
  let houseImage = document.createElement("img");
  houseImage.src = `./images/icon-${name}.svg`;
  houseEl.appendChild(houseDiv);
  houseDiv.appendChild(houseImage);
  return houseDiv;
}

scoreEl.innerHTML = "0";

let score = 0;

let user = "";
let house = "";
let game = ["paper", "scissor", "rock"];

paperEl.addEventListener("click", () => {
  user = game[0];
  house = game[Math.floor(Math.random() * 3)];

  containerEl.classList.add("hide");
  gameContainerEl.classList.remove("hide");

  const userDiv = appendUserImage(user);

  setTimeout(() => {
    houseCircleEl.classList.add("hide");
    const houseDiv = appendHouseImage(house);
    houseEl.classList.remove("hide");

    if (house == "paper") {
      resultEl.innerHTML = "DRAW";
      playButtonEl.style.color = "blue";
    } else if (house == "scissor") {
      resultEl.innerHTML = "YOU LOSE";
      playButtonEl.style.color = "red";
      houseDiv.classList.add("circle");
      score--;
      scoreEl.innerHTML = score;
    } else if (house == "rock") {
      resultEl.innerHTML = "YOU WIN";
      playButtonEl.style.color = "green";
      userDiv.classList.add("circle");
      score++;
      scoreEl.innerHTML = score;
    }
    resultContainerEl.classList.remove("hide");
  }, 1000);
});

scissorEl.addEventListener("click", () => {
  user = game[1];
  house = game[Math.floor(Math.random() * 3)];

  containerEl.classList.add("hide");
  gameContainerEl.classList.remove("hide");

  const userDiv = appendUserImage(user);

  setTimeout(() => {
    houseCircleEl.classList.add("hide");
    const houseDiv = appendHouseImage(house);
    houseEl.classList.remove("hide");

    if (house == "scissor") {
      resultEl.innerHTML = "DRAW";
      playButtonEl.style.color = "blue";
    } else if (house == "rock") {
      resultEl.innerHTML = "YOU LOSE";
      playButtonEl.style.color = "red";
      houseDiv.classList.add("circle");
      score--;
      scoreEl.innerHTML = score;
    } else if (house == "paper") {
      resultEl.innerHTML = "YOU WIN";
      playButtonEl.style.color = "green";
      userDiv.classList.add("circle");
      score++;
      scoreEl.innerHTML = score;
    }
    resultContainerEl.classList.remove("hide");
  }, 1000);
});

rockEl.addEventListener("click", () => {
  user = game[2];
  house = game[Math.floor(Math.random() * 3)];

  containerEl.classList.add("hide");
  gameContainerEl.classList.remove("hide");

  const userDiv = appendUserImage(user);

  setTimeout(() => {
    houseCircleEl.classList.add("hide");
    const houseDiv = appendHouseImage(house);
    houseEl.classList.remove("hide");

    if (house == "rock") {
      resultEl.innerHTML = "DRAW";
      playButtonEl.style.color = "blue";
    } else if (house == "paper") {
      resultEl.innerHTML = "YOU LOSE";
      playButtonEl.style.color = "red";
      houseDiv.classList.add("circle");
      score--;
      scoreEl.innerHTML = score;
    } else if (house == "scissor") {
      resultEl.innerHTML = "YOU WIN";
      playButtonEl.style.color = "green";
      userDiv.classList.add("circle");
      score++;
      scoreEl.innerHTML = score;
    }
    resultContainerEl.classList.remove("hide");
  }, 1000);
});

rulesEl.addEventListener("click", () => {
  rulesContainerEl.classList.remove("hide");
});

crossBtnEl.forEach((element) => {
  element.addEventListener("click", () => {
    rulesContainerEl.classList.add("hide");
  });
});

playButtonEl.addEventListener("click", () => {
  user = "";
  house = "";

  resultContainerEl.classList.add("hide");
  containerEl.classList.remove("hide");
  gameContainerEl.classList.add("hide");
  houseCircleEl.classList.remove("hide");
  houseEl.classList.add("hide");
});
