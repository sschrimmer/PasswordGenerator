// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var checkCasing;
var determineNumeric;
var determineSpecialCharacters;
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
  else{}  
  }
  return checkCasing
}
function determineNumeric(){
  checkNumeric =  prompt("Do you want your password to contain any numbers yes or no?")
   if(checkNumeric === "yes"){
    checkNumeric = true
   } else if(checkNumeric === "no"){
 checkNumeric= false
   } else if(""){
    alert("Please answer yes or no")
    determineNumeric()
   }else{
     alert("Please answer yes or no")
     determineNumeric()
   }
   return determineNumeric
 }

 function determineSpecialCharacters(){
  determineSpecialCharacters =  prompt("Do you want your password to contain any special characters yes or no?")
   if(determineSpecialCharacters === "yes"){
    determineSpecialCharacters = true
   } else if(determineSpecialCharacters === "no"){
 determineSpecialCharacters = false
   } else if(""){
    alert("Please answer yes or no")
    determineSpecialCharacters()
   }else{
     alert("Please answer yes or no")
     determineSpecialCharacters()
   }
   return determineSpecialCharacters
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
