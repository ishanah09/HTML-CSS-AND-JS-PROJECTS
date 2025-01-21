let formEl = document.querySelector("#form");
let inputEl = document.querySelector("#input");

let messageEl = document.querySelector("#message");
let strengthEl = document.querySelector("#strength");

inputEl.addEventListener("input", () => {
  if (inputEl.value.length > 0) {
    messageEl.style.display = "block";
    
  }

  if (inputEl.value.length < 4) {
    messageEl.style.color = "red";
    strengthEl.innerHTML = "weak";
    formEl.style.borderColor="red";
  }
  else   if (inputEl.value.length > 4 && inputEl.value.length < 8) {
    messageEl.style.color = "yellow";
    strengthEl.innerHTML = "medium";
    formEl.style.borderColor="yellow";
  }

  else   if (inputEl.value.length > 8) {
    messageEl.style.color = "lightgreen";
    strengthEl.innerHTML = "strong";
    formEl.style.borderColor="lightgreen";
  }

});


