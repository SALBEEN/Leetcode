const Username = "Salbeen";
const email = "salbeen@gmail.com";
const password = "salbeen123";
const confirmPassword = "salbeen1234";
const age = 20;

let isValid = true;

//username validation
if (Username === "") {
  console.log("Username cannot be empty");
  isValid = false;
}

//email validation

const emailPattern = /^[a-zA-Z0.-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (emailPattern.test(email)) {
  console.log("Email Matched!");
  isValid = true;
}

//password validation

const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
if (passwordPattern.test(password)) {
  console.log("password is valid");
}

if (password !== confirmPassword) {
  console.log("Password doesnot match");
}
