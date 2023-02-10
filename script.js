// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacters = [ 
  "@",
  "$",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "{",
  "}",
  "[",
  "}",
  "~",
  "-",
  "_",
  ".",
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9]"];
  
  // Array of lowercase characters to be included in password
  var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ];
  
  // // Array of uppercase characters to be included in password
  var uppercaseCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    ];



// Password Prompt Dialog and variables
alert("Your password must be between 8 and 128 characters.")

alert("Would you like to use lower case characters?")
var getlowercaseCharacters
alert("Would you like to use special characters?")
var getspecialCharacters
alert("Would you like to use upper case characters?")
var getuppercaseCharacters
alert("Would you like to use upper case numeric characters?")
var getnumericCharacters
// Miniminum count for each character set
var minimumCount = 0;

// Empty minimums for numbers, lowerCases, upperCases & specialCharacters

var minNumeric= "";
var minLowercae = "";
var minUppercase = "";
var minSpecialChar = "";
