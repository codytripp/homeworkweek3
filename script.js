// Assignment Code
var generateBtn = document.querySelector("#generate");
//password values
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));

  // Loop if answer is smaller than 8 or larger than 128
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Please try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back character count to the user
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmLowerCase = confirm("Click OK to confirm if you would like lowercase characters included");
    var confirmUpperCase = confirm("Click OK to confirm if you would like uppercase characters included");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like numeric characters included");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like special characters included");

      // Loop if answers outside of the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmLowerCase = confirm("Click OK to confirm if you would like lowercase characters included");
        var confirmUpperCase = confirm("Click OK to confirm if you would like uppercase characters included");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like numeric characters included"); 
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like special characters included");  
    } 

        var passwordCharacters = []
        
      if (confirmLowerCase) {
          passwordCharacters = passwordCharacters.concat(lowerCase)
      }

      if (confirmUpperCase) {
          passwordCharacters = passwordCharacters.concat(upperCase)
      }

      if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
      }

      if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialCharacter)
      }

        console.log(passwordCharacters)

        var randomPassword = ""
        
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword)
        }
        return randomPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);