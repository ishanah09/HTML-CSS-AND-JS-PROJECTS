let formEl = document.querySelector("#form");
let buttonEl = document.querySelector("#button");

let imageEl = document.querySelector("#image");
let imageBoxEl = document.querySelector("#image-box");
let inputEl = document.querySelector("#input");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  buttonEl.innerHTML = "Generating QR Code...";
  buttonEl.style.backgroundColor = "#14001d";
  imageBoxEl.classList.add("hide");

  setTimeout(() => {
    buttonEl.innerHTML = "Generate QR Code";
    buttonEl.style.backgroundColor = "#47185c";
    let formData = new FormData(formEl);
    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    let data1 = data.code;
    imageEl.src = `${url}${data.code}`;
    imageBoxEl.classList.toggle("hide");
  }, 750);
});


inputEl.addEventListener("input",()=>
{
  if(inputEl.value.trim()==="")
  {
    imageBoxEl.classList.add("hide");
    imageEl.src="";
  }
})
