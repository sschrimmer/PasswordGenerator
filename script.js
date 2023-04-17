// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var checkUpperCase;
var checkLowerCase;
var checkNumeric;
var checkSpecialCharacters;
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = lowerCaseCharacters.toUpperCase()
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()?,.";

// Write password to the #password input
function checkLength() {
  passwordLength = prompt("Welcome to the Password Generator how long would you like your password to be?")
  if (passwordLength < 8) {
    alert("Password length needs to be 8 to 128 characters");
    checkLength()
  } else if (passwordLength > 128) {
    alert("Password length needs to be 8 to 128 characters")
    checkLength()
  } else if (isNaN(passwordLength)) {
    alert("Password needs to be a number")
    checkLength()
  } else {
    alert(`Password length set to ${passwordLength}, you will now be asked how you will like us to generate your password`)
  }
  return passwordLength
}

function determineUpperCase() {
  checkUpperCase = prompt("Do you want your password to contain uppercase yes or no?")
  if (checkUpperCase === "yes") {
    checkUpperCase = true
  } else if (checkUpperCase === "no") {
    checkUpperCase = false
  } else if ("") {
    alert("Please answer yes or no")
    determineUpperCase()
  } else {
    alert("Please answer yes or no")
    determineUpperCase()

  }
  return checkUpperCase
}

function determineLowerCase() {
  checkLowerCase = prompt("Do you want your password to contain lowercase yes or no?")
  if (checkLowerCase === "yes") {
    checkLowerCase = true
  } else if (checkLowerCase === "no") {
    checkLowerCase = false
  } else if ("") {
    alert("Please answer yes or no")
    determineLowerCase()
  } else {
    alert("Please answer yes or no")
    determineLowerCase()

  }
  return checkLowerCase
}


function determineNumeric() {
  checkNumeric = prompt("Do you want your password to contain any numbers yes or no?")
  if (checkNumeric === "yes") {
    checkNumeric = true
  } else if (checkNumeric === "no") {
    checkNumeric = false
  } else if ("") {
    alert("Please answer yes or no")
    determineNumeric()
  } else {
    alert("Please answer yes or no")
    determineNumeric()
  }
  return checkNumeric
}

function determineSpecialCharacters() {
  checkSpecialCharacters = prompt("Do you want your password to contain any special characters yes or no?")
  if (checkSpecialCharacters === "yes") {
    checkSpecialCharacters = true
  } else if (checkSpecialCharacters === "no") {
    checkSpecialCharacters = false
  } else if ("") {
    alert("Please answer yes or no")
    determineSpecialCharacters()
  } else {
    alert("Please answer yes or no")
    determineSpecialCharacters()
  }
  return checkSpecialCharacters
}

function writePassword() {
  checkLength()
  determineUpperCase()
  determineLowerCase()
  determineNumeric()
  determineSpecialCharacters()
  var possibleCharsString = ''
  if (checkUpperCase) {
    possibleCharsString = possibleCharsString.concat(upperCaseCharacters)
  }
  if (checkLowerCase) {
    possibleCharsString = possibleCharsString.concat(lowerCaseCharacters)
  }
  if (checkNumeric) {
    possibleCharsString = possibleCharsString.concat(numericCharacters)
  }
  if (checkSpecialCharacters) {
    possibleCharsString = possibleCharsString.concat(specialCharacters)
  }
  console.log('possible characters', possibleCharsString)
var result = '';
for (i = 0; i < passwordLength; i ++) {
  var randomIndex = Math.floor( Math.random() * possibleCharsString.length)
  result += possibleCharsString[randomIndex]
}
console.log (result)

  var passwordText = document.querySelector("#password");

  passwordText.value = result;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
