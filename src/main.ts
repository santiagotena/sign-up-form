const password = document.querySelector("#password") as HTMLInputElement;
const confirmPassword = document.querySelector("#confirm-password") as HTMLInputElement;
const errorMessage = document.querySelector(".error-message");

const submit = (e) => {
  e.preventDefault();
  if (password.value !== confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorMessage.textContent = "Passwords don't match";
    return;
  }
  if (password.value.length < 8) {
    password.classList.add("error");
    errorMessage.textContent =
      "Password needs to be at least 8 characters long.";
    return;
  }
  if (!password.value.match(/[a-z]/)) {
    password.classList.add("error");
    errorMessage.textContent =
      "Password needs to have at least 1 lower case letter.";
    return;
  }
  if (!password.value.match(/[A-Z]/)) {
    password.classList.add("error");
    errorMessage.textContent =
      "Password needs to have at least 1 upper case letter.";
    return;
  }
  if (!password.value.match(/\d+/g)) {
    password.classList.add("error");
    errorMessage.textContent = "Password needs to have at least 1 number.";
    return;
  }
  errorMessage.textContent = "Form added successfully";
  setTimeout(() => {
    window.location.reload();
  }, 5000);
};

const form = document.querySelector("form");
form.addEventListener("submit", submit);