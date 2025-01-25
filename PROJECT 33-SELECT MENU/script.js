let selectEl = document.querySelector("#select");
let selectTextEl = document.querySelector("#select-text");
let arrowEl = document.querySelector("#arrow-image");
let listEl = document.querySelector("#list");
let optionsEl = document.querySelectorAll(".options");

selectEl.addEventListener("click", () => {
  arrowEl.classList.toggle("rotate-arrow");
  listEl.classList.toggle("hide");
});

optionsEl.forEach((option) => {
  option.addEventListener("click", () => {
    selectTextEl.innerHTML = option.textContent;

    arrowEl.classList.toggle("rotate-arrow");
    listEl.classList.toggle("hide");
  });
});
