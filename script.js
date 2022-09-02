var generatedPassword = ""
var specialcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var chooseones = []
// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(max, min) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}
function getrandomitem(list) {
  console.log(list[randomInt(list.length)])
  return list[randomInt(list.length)]
}
function pickRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function generatePassword() {
  var userinput = window.prompt('Your password must be between 8 to 128 characters')
 console.log(userinput, typeof userinput)
  var passwordlength = parseInt(userinput)
  console.log(passwordlength, typeof passwordlength)
  if (passwordlength < 8 || passwordlength > 128){
    window.alert("password length should be between 8 and 128 character")
  return
  }



var specialCharacterChoice = window.confirm('Please click on OK to include special characters to your password');
var lowercaseChoice = window.confirm('Please click on OK to include lowercase characters to your password');
var uppercaseChoice = window.confirm('Please click on OK to include uppercase characters to your password');
var numbersChoice = window.confirm('please click on OK to include numbers to your password');


if (specialCharacterChoice === true) {
  chooseones=chooseones.concat(specialcharacter)
}
if (lowercaseChoice === true) {
  chooseones=chooseones.concat(lowercase)
}

if (uppercaseChoice === true) {
  chooseones=chooseones.concat(uppercase)
}

if (numbersChoice === true) (
  chooseones=chooseones.concat(numbers)
)
if (chooseones.length === 0) {
  chooseones=chooseones.concat(lowercase)
}
console.log(chooseones)


for (let i = 0; i < passwordlength; i++) {
  var randomchar = pickRandom(chooseones)
  generatedPassword += randomchar
  console.log(randomchar)
  console.log(generatedPassword)
}


return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(password)
  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
