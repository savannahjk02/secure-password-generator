// password character length variable
var numOfCharacters = 12;
var characterArray = [];
// var numOfCharacters = parseInt(numOfCharacters);

// password lowercase variable
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",""];
//password uppercase variable
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//password numbers variable
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
//password special characters variable
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  prompts();
  var passwordText = document.querySelector("#password");
 
  if (prompts){
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;
  } else {
    passwordText.value = "";
  }
  
 }
 
//create function (function declaration/expression)
function generatePassword(){
var password = "";
for (var i=0; i < numOfCharacters; i++) {
  var random = Math.floor(Math.random() * characterArray.length)
// setting password value to contain random array with a length between 0 and password length choice, until each character is randomized
  password = password + characterArray[random];
}
return password;
}

function prompts() {
// reset array to empty
  characterArray = [];
// prompt: password length
numOfCharacters = parseInt(prompt("How many characters do you want?"));

// if the input is not between 8-128 characters, user will be prompted to retry with a valid answer
if (numOfCharacters < 8 || numOfCharacters > 128) {
  alert ("Please choose a number of characters between 8 and 128.");
  return false;
}

// prompt: password lowercase letters
if (confirm ("Do you want to include lowercase characters?")) {
// return = array containing lowercase characters
  characterArray = characterArray.concat(lowercaseCharacters);
}

// prompt: password uppercase characters
if (confirm ("Do you want to include uppercase characters?")) {
// return = array containing uppercase characters
  characterArray = characterArray.concat(uppercaseCharacters);
}

// prompt: password numbers
if (confirm ("Do you want to include numbers?")) {
// return = array containing numbers
  characterArray = characterArray.concat(numbers);
}
// prompt: password special characters
if (confirm ("Do you want to include special characters?")) {
// return = array containing special characters
  characterArray = characterArray.concat(specialCharacters);
}
return true;
}