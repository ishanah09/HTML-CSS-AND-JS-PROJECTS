let resultEl = document.querySelector("#result");
let lengthEl = document.querySelector("#length");
let uppercaseEl = document.querySelector("#uppercase");
let numbersEl = document.querySelector("#numbers");
let symbolsEl = document.querySelector("#symbols");
let buttonEl = document.querySelector("#button");
let passRangeInputEl = document.querySelector("#passRangeInput");

const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  ":",
  ";",
  "'",
  '"',
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
  "~",
  "`",
];
let password;
let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

passRangeInputEl.addEventListener("input", () => {
  lengthEl.innerHTML = passRangeInputEl.value;
});

buttonEl.addEventListener("click", () => {
  let mixedCharacters = [...lowercaseLetters];
  password = "";

  isUpperCase = uppercaseEl.checked;
  isNumbers = numbersEl.checked;
  isSymbols = symbolsEl.checked;

  isUpperCase
    ? (mixedCharacters = mixedCharacters.concat(uppercaseLetters))
    : null;
  isNumbers ? (mixedCharacters = mixedCharacters.concat(numbers)) : null;
  isSymbols ? (mixedCharacters = mixedCharacters.concat(symbols)) : null;
  console.log(mixedCharacters);

  console.log(passRangeInputEl.value);

  for (let i = 0; i < passRangeInputEl.value; i++) {
    let random = Math.floor(Math.random() * mixedCharacters.length);
    password = password.concat(mixedCharacters[random]);
  }
  console.log(password);
  resultEl.innerHTML = password;

  
});


const copyToClipboard=(element)=>
{

  navigator.clipboard.writeText(element.textContent).then(()=>
  {
    alert("copied to clipboard")
  }).catch((error)=>
  {
    console.log(error);
    alert("can't copy")
    
  })
}

resultEl.addEventListener("click",()=>
{
  if(resultEl.textContent.length>0)
    {
      copyToClipboard(resultEl);
    }
})