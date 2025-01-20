let msgEl = document.querySelector("#msg");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz0XKsbcyEf-7Cc8OrHC6cG5Go8jzgAg-D9o9p7HuxW2tD0TazdMr-4eTVb1-62Fu8AJQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      msgEl.innerHTML = "Thank You For Subscribing!";

      setTimeout(() => {
        msgEl.style.display = "none";
      }, 5000);
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
