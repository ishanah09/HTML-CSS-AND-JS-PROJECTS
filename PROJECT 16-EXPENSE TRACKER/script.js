let formEl = document.querySelector("#form");
let inputContainerEl = document.querySelector("#input-container");
let incomeEl = document.querySelector("#income");
let expenseEl = document.querySelector("#expense");
let balanceEl = document.querySelector("#balance");

let editFormEl = document.querySelector("#edit-form");
let cancelButton = document.querySelector("#cancel-button");

let listContainerEl = document.querySelector("#list-container");

listContainerEl.innerHTML = "";

let income = 0;
let expense = 0;
let balance = 0;
let expenseData = [];
let editIndex = -1;

function renderList(data) {
  let list = document.createElement("li");

  let listDiv = document.createElement("div");
  listDiv.className = "list";
  if (data.option == "income") {
    listDiv.style.backgroundColor = "#A8E6A3";
  } else {
    listDiv.style.backgroundColor = "#F5A4A4";
  }

  let span1 = document.createElement("span");
  span1.id = "description";
  span1.textContent = data.description;

  let span2 = document.createElement("span");
  span2.id = "amount";
  span2.textContent = `₹${data.amount}`;

  let dropDownDiv = document.createElement("div");
  dropDownDiv.className = "drop-down";
  dropDownDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>`;

  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList = "buttons hide";

  let editDiv = document.createElement("div");
  editDiv.className = "edit";
  editDiv.innerHTML = `<i class="fa-solid fa-pen"></i>`;

  let deleteDiv = document.createElement("div");
  deleteDiv.className = "delete";
  deleteDiv.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  list.appendChild(listDiv);
  listDiv.appendChild(span1);
  listDiv.appendChild(span2);
  listDiv.appendChild(dropDownDiv);
  list.appendChild(buttonsDiv);
  buttonsDiv.appendChild(editDiv);
  buttonsDiv.appendChild(deleteDiv);
  listContainerEl.appendChild(list);

  dropDownDiv.addEventListener("click", () => {
    buttonsDiv.classList.toggle("hide");
  });

  editDiv.addEventListener("click", () => {
    inputContainerEl.classList.add("hide");
    editFormEl.classList.remove("hide");
    buttonsDiv.classList.add("hide");

    editIndex = expenseData.indexOf(data);

    document.querySelector("#edit-description").value = data.description;
    document.querySelector("#edit-amount").value = data.amount;
    document.querySelector(
      `#edit-options [value="${data.option}"]`
    ).selected = true;

    if (data.option === "income") {
      income -= Number(data.amount);
    } else {
      expense -= Number(data.amount);
    }

    updateBalance();
  });

  deleteDiv.addEventListener("click", (event) => {
    let index = expenseData.indexOf(data);
    if (index !== -1) {
      if (data.option === "income") {
        income -= Number(data.amount);
      } else {
        expense -= Number(data.amount);
      }
    }
    updateBalance();
    list.remove();
    expenseData.splice(index, 1);
    saveData();
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {};
  let formData = new FormData(formEl);
  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (data.option == "income") {
    income = income + Number(data.amount);
  } else {
    expense = expense + Number(data.amount);
  }
  updateBalance();
  renderList(data);

  expenseData.push(data);
  console.log(expenseData);

  event.target.reset();
  saveData();
});

editFormEl.addEventListener("submit", () => {
  event.preventDefault();
  if (editIndex < 0) return;
  let editData = {};

  let editFormData = new FormData(editFormEl);
  editFormData.forEach((value, key) => {
    editData[key] = value;
  });

  expenseData.splice(editIndex, 1, editData);

  listContainerEl.innerHTML = "";

  if (editData.option === "income") {
    income += Number(editData.amount);
  } else {
    expense += Number(editData.amount);
  }

  expenseData.forEach((data) => {
    renderList(data);
  });

  updateBalance();
  editIndex = -1;
  inputContainerEl.classList.remove("hide");
  editFormEl.classList.add("hide");
  saveData();
});

cancelButton.addEventListener("click", () => {
  inputContainerEl.classList.remove("hide");
  editFormEl.classList.add("hide");
});

function updateBalance() {
  balance = income - expense;

  incomeEl.textContent = `${income.toFixed(2)}`;
  expenseEl.textContent = `${expense.toFixed(2)}`;
  balanceEl.textContent = `${balance.toFixed(2)}`;

  balanceEl.style.color = balance >= 0 ? "green" : "red";
}

function saveData() {
  localStorage.setItem("listArray", JSON.stringify(expenseData));
}

function showData() {
  const savedExpenseData = JSON.parse(
    localStorage.getItem("listArray") || "[]"
  );

  expenseData = savedExpenseData;

  console.log(expenseData);

  listContainerEl.innerHTML = "";

  income = 0;
  expense = 0;
  savedExpenseData.forEach((data) => {
    renderList(data);
    if (data.option === "income") {
      income += Number(data.amount);
    } else {
      expense += Number(data.amount);
    }
  });

  updateBalance();
}

showData();
