// Assignment Code
var generateBtn = document.querySelector("#generate");

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

generateBtn.textContent = "Generate Password";

  //create function (function declaration/expression)
function generatePassword(){

// prompt: password length
var numOfCharacters = prompt ("How many characters do you want?");

// prompt: password lowercase letters
var lowercaseCharacters = confirm ("Do you want to include lowercase characters?");

// prompt: password uppercase characters
var uppercaseCharacters = confirm ("Do you want to include uppercase characters?");

// prompt: password numbers
var numbers = confirm ("Do you want to include numbers?");

// prompt: password special characters
var specialCharacters = confirm ("Do you want to include special characters?");

// 4 ifs, 4 confirmExpressionconditionals

// processing... (random generate characters)

// return password
  return (generatePassword(numOfCharacters));
 }


// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
