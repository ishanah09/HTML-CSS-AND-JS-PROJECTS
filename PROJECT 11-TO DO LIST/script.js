let inputEl = document.querySelector("#input");
let addButtonEl = document.querySelector("#add-btn");
let listContainerEl = document.querySelector("#list-container");
let data = [];
listContainerEl.innerHTML = "";

const generateList = (data) => {
  return `
   <li>
       <div class="image"></div>
       <p>${data[data.length - 1]}</p>
       <button class="cross-btn">X</button>
   </li>
  `;
};

const renderList = () => {
  if (inputEl.value === "") {
    alert("You must write something!");
  } else {
    let input = inputEl.value;
    data.push(input);
    listContainerEl.innerHTML += generateList(data);
    inputEl.value = "";
    saveData();
  }
};
addButtonEl.addEventListener("click", renderList);

listContainerEl.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    e.target.classList.toggle("checked");

    e.target.nextElementSibling.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("dataList", listContainerEl.innerHTML);
}

function showData() {
  listContainerEl.innerHTML = localStorage.getItem("dataList");
}

showData();
