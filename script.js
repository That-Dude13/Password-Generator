// Assignment Code
var generateBtn = document.querySelector("#generate");
//Button Functionality and passwrod genration prompts
function generatePassword(){
  
  
  return password

}

var specialCharactersArray = [ 
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
  var numericCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9]"];
  
  // Array of lowercase characters to be included in password
  var lowercaseCharactersArray = [
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
  var uppercaseCharactersArray = [
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

  function getPrompts(){
  Chocies = [];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (Between 8-128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 ) {
    alert("Password length has to be numeric, please enter again.");
    return false;
  }

  if(confirm("Would you like lower case letters in your password?")){
    Chocies = Chocies.concat(lowercaseCharactersArray);
  }

  if(confirm("Would you like upper case letters in your password?")){
    Chocies = Chocies.concat(uppercaseCharactersArray);
  }

  if(confirm("Would you like special characters in your password?")){
    Chocies = Chocies.concat(specialCharactersArray);
  }

  if(confirm("Would you like numbers in your password?")){
    Chocies = Chocies.concat(numericCharactersArray);
  }

  return true
  
}

  // Write password to the #password input

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  //Created password random password varibles
  var password = generatePassword();
  var password = generatePassword();
  var password = ""
  var characterLength =8;
  var Chocies = []


  for(var  i = 0; i < characterLength; i++ ) 

    var randomLetter = Math.floor(Math.random)() *Chocies.length
    password = password + Chocies[randomLetter]

    var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  var  goodChoices = getPrompts();

  if(goodChoices)

   return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
