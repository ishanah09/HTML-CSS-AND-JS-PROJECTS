let sucessEl = document.querySelector("#success");
let erroEl = document.querySelector("#error");
let invalidEl = document.querySelector("#invalid");

let toastContainerEl = document.querySelector("#toast-container");

toastContainerEl.innerHTML = "";

function appendToast(msg) {
  let toastDiv = document.createElement("div");
  toastDiv.className = "toast";
  toastDiv.innerHTML = msg;

  if (msg.includes("error")) {
    toastDiv.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toastDiv.classList.add("invalid");
  }

  toastContainerEl.appendChild(toastDiv);

setTimeout(() => {
  toastDiv.remove();
}, 6000);



}

sucessEl.addEventListener("click", () => {
  let msg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';

  appendToast(msg);
});

erroEl.addEventListener("click", () => {
  let msg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';

  appendToast(msg);
});

invalidEl.addEventListener("click", () => {
  let msg =
    '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';
  appendToast(msg);
});
