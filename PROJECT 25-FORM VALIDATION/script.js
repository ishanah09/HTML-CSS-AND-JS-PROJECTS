let formEl = document.querySelector("#form");

let nameEl = document.querySelector("#name");
let nameErrorEl = document.querySelector("#name-error");

let phoneEl = document.querySelector("#phone");
let phoneErrorEl = document.querySelector("#phone-error");

let emailEl = document.querySelector("#email");
let emailErrorEl = document.querySelector("#email-error");

let messageEl = document.querySelector("#message");
let messageErrorEl = document.querySelector("#message-error");

let submitEl = document.querySelector("#submit");
let submitErrorEl = document.querySelector("#subit-error");

function nameValidate() {
  let name = nameEl.value;
  name = name.trim();

  if (name.length < 1) {
    nameErrorEl.innerHTML = "name is required";
    return false;

  }
   else if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameErrorEl.innerHTML = "Write full name";
    return false;
  } 
  else {
    nameErrorEl.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function phoneValidate() {
  let phone = phoneEl.value;
  phone = phone.trim();

  if (phone.length == 0) {
    phoneErrorEl.innerHTML = "Phone number is required";
    return false;
  } else if (phone.length != 10) {
    phoneErrorEl.innerHTML = "Phone number should be 10 digits";
    return false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneErrorEl.innerHTML = "Only digits are allowed.";
    return false;
  } else {
    phoneErrorEl.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function emailValidate() {
  let email = emailEl.value;
  email = email.trim();

  if (email.length == 0) {
    emailErrorEl.innerHTML = "Email is required";
    return false;
  } else if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailErrorEl.innerHTML = "Please enter a valid email address.";
    return false;
  } else {
    emailErrorEl.innerHTML = '<i class="fas fa-check-circle"></i>'; //
    return true;
  }
}



function messageValidate() {
  let message = messageEl.value.trim();

  if (message.length < 30) {
    messageErrorEl.innerHTML = "Atleast 30 characters required";
    return false;
  } else {
    messageErrorEl.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

nameEl.addEventListener("input", nameValidate);

phoneEl.addEventListener("input", phoneValidate);

messageEl.addEventListener("input", messageValidate);

emailEl.addEventListener("input", emailValidate);


submitEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    !nameValidate() ||
    !emailValidate() ||
    !phoneValidate() ||
    !messageValidate()
  ) {
    submitErrorEl.style.display = "block";
    submitErrorEl.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitErrorEl.style.display = "none";
    }, 3000);
    return false;
  }
 else
 {
  formEl.reset();
  nameErrorEl.innerHTML = "";
 phoneErrorEl.innerHTML = "";
  emailErrorEl.innerHTML = "";
 messageErrorEl.innerHTML = "";

 }
});

