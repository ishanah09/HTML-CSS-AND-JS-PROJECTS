let icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  if (icon.src.includes("moon")) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");

    icon.src = "images/sun.png";
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");

    icon.src = "images/moon.png";
  }
});

let data = localStorage.getItem("theme");

if (data === "light") {
  document.body.classList.remove("dark-theme");
  icon.src = "images/moon.png";
} else {
  document.body.classList.add("dark-theme");
  icon.src = "images/sun.png";
}
