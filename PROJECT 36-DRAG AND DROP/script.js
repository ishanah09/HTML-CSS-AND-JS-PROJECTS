let leftBox = document.querySelector("#left");
let rightBox = document.querySelector("#right");
let listEl = document.querySelectorAll(".list");

listEl.forEach((list) => {
  list.addEventListener("dragstart", (event) => {
    if (event.target.tagName === "DIV") {
      selected = null;

      let selectedList = event.target;
      rightBox.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      rightBox.addEventListener("drop", () => {
        rightBox.appendChild(selectedList);
        selectedList = null;
      });
      leftBox.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      leftBox.addEventListener("drop", () => {
        leftBox.appendChild(selectedList);
        selectedList = null;
      });
    }
  });
});
