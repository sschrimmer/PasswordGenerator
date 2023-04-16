// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var checkCasing;
// Write password to the #password input
function checkLength() {
  passwordLength =  prompt("Welcome to the Password Generator how long would you like your password to be?")
  if(passwordLength < 8){
   alert("Password length needs to be 8 to 128 characters");
   checkLength()
  } else if(passwordLength > 128){
   alert("Password length needs to be 8 to 128 characters")
   checkLength()
  } else if(isNaN(passwordLength)){
   alert("Password needs to be a number")
   checkLength()
  }else{
   alert(`Password length set to ${passwordLength}, you will now be asked how you will like us to generate your password`)
  }
  return passwordLength
}

function determineCasing(){
 checkCasing =  prompt("Do you want your password to contain uppercase or lowercase yes or no?")
  if(checkCasing === "yes"){
   checkCasing = true
  } else if(checkCasing === "no"){
checkCasing = false
  } else if(""){
   alert("Please answer yes or no")
   determineCasing()
  }else{
    alert("Please answer yes or no")
    determineCasing()
  }
  return checkCasing
}


function writePassword() {
checkLength()
determineCasing()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
