// CONTACT FORM
const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasError = false;

const email = document.querySelector("#email");
const invalidEmail = document.querySelector("#invalidEmailError");
let EmailError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const sentMessage = document.querySelector("#submit-message");

form.addEventListener("submit", formValidation);

function formValidation() {
  event.preventDefault();

  //first name validation
  const nameValue = name.value;
  if (verifyLength(nameValue, 1, /[a-zA-Z.-]/g) === true) {
    nameError.style.display = "none";
    nameHasError = false;
  } else {
    nameError.style.display = "block";
    nameHasError = true;
  }

  //last name validation
  const lastNameValue = lastName.value;
  if (verifyLength(lastNameValue, 1, /[a-zA-Z.-]/g) === true) {
    lastNameError.style.display = "none";
    lastNameHasError = false;
  } else {
    lastNameError.style.display = "block";
    lastNameHasError = true;
  }

  //email validation
  const emailValue = email.value;
  if (verifyEmail(emailValue)) {
    invalidEmail.style.display = "none";
    emailHasError = false;
  } else {
    invalidEmail.style.display = "block";
    emailHasError = true;
  }

  //message validation
  const messageValue = message.value;
  if (verifyLength(messageValue, 1, /[a-zA-Z.-]/g)) {
    messageError.style.display = "none";
    messageHasError = false;
  } else {
    messageError.style.display = "block";
    messageHasError = true;
  }

  //where to redirect if form pass validation
  if (
    nameHasError === true ||
    lastNameHasError === true ||
    emailHasError === true ||
    messageHasError === true
  ) {
  } else {
    window.location.href = "message-sent.html";
  }
}

//length check
function verifyLength(value, lengthCheck) {
  const valueIsTrimmed = value.trim();

  if (valueIsTrimmed.length >= lengthCheck) {
    return true;
  } else {
    return false;
  }
}

// email validation
function verifyEmail(email) {
  const regEx = /\S+@\S+\.\S+/;

  if (regEx.test(email)) {
    return true;
  } else {
    return false;
  }
}
