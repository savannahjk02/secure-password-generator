// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //create function (function declaration/expression)
}

var numOfCharacters = prompt ("How many characters do you want?");

numOfCharacters = parseInt(numOfCharacters);

// 4 ifs, 4 confirmExpressionconditionals


// processing... (random generate characters)
// return password

function generatePassword(){
  return ("random Password")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
