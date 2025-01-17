let formEl = document.querySelector("#form");
let allClear = document.querySelector("#ac");
let del = document.querySelector("#del");
let dot = document.querySelector("#dot");

let operators = document.querySelectorAll(".operators");
let numbers = document.querySelectorAll(".numbers");
let inputEl = document.querySelector("#input");

let str = "";
const validCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  ".",
  "(",
  ")",
];

allClear.addEventListener("click", (event) => {
  event.preventDefault();
  inputEl.value = "";
  console.log(inputEl.value);
});

del.addEventListener("click", (event) => {
  event.preventDefault();
  str = inputEl.value;
  str = str.length > 0 ? str.slice(0, -1) : str;
  inputEl.value = str;
  console.log("Delete executed");
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputEl.value += number.value;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    inputEl.value += operator.value;
  });
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {};
  let formData = new FormData(formEl);
  formData.forEach((value, key) => {
    data[key] = value;
  });

  str = data.input;

  inputEl.value = eval(str);
  console.log(inputEl.value);
  
});

inputEl.addEventListener("input", (event) => {
  let inputValue = event.target.value;

  const isValid = inputValue
    .split("")
    .every((char) => validCharacters.includes(char));

  if (isValid) {
    inputEl.value = inputValue;
  } else {
    str = inputValue;
    inputValue = inputValue.length > 0 ? inputValue.slice(0, -1) : inputValue;
    inputEl.value = inputValue;
  }
});

dot.addEventListener("click", () => {
  if (!inputEl.value.includes(".")) {
    inputEl.value = inputEl.value ? inputEl.value + "." : "0.";
  }
});
