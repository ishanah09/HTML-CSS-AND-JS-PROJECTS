let createButton = document.querySelector("#create-button");
let notesContainer = document.querySelector("#notes-container");

function createNotes(content = "") {
  let notesDiv = document.createElement("div");
  notesDiv.className = "notes";

  let textarea = document.createElement("textarea");
  textarea.rows = 6;
  textarea.value = content;

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";

  notesContainer.appendChild(notesDiv);
  notesDiv.appendChild(textarea);
  notesDiv.appendChild(deleteButton);

  textarea.addEventListener("input", saveData);
}

createButton.addEventListener("click", () => {
  createNotes();
});
notesContainer.addEventListener("click", () => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    saveData();
  }
});

let notesArray = [];

function saveData() {
  notesArray = [];
  let textareas = document.querySelectorAll("textarea");
  textareas.forEach((textarea) => {
    notesArray.push(textarea.value);
  });
  localStorage.setItem("notesArray", JSON.stringify(notesArray));
  console.log(notesArray);
}

function showData() {
  let savedNotes = JSON.parse(localStorage.getItem("notesArray") || "[]");
  console.log(savedNotes);

  notesContainer.innerHTML = "";
  savedNotes.forEach((note) => {
    createNotes(note);
  });
}

showData();
