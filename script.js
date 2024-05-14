const passwordBox = document.getElementById("password");

const copyPass = document.getElementById("copy-pass");
const copied = document.querySelector(".copy");

const button = document.getElementById("btn");

/*==================== INITIAL SETUP ====================*/

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|{}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

/*==================== HANDLER FUNCTIONS ====================*/

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);

  copied.style.display = "block";
  setTimeout(function () {
    copied.style.display = "none";
  }, 2000);
};

/*==================== EVENT LISTENERS ====================*/

button.addEventListener("click", createPassword);
copyPass.addEventListener("click", copyPassword);
