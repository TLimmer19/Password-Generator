var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var number = ['0','1','2','3','4','5','6','7','8','9']
var specialCharacters = ['','!','#','$','%','&','(',')','*','+',',','.','/',':',';','<','=','>','?','@','[',',','^','_','`','{','}','|','~','"']
var superArray = [] //User input
var generateButton = document.querySelector('#generate')


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateButton.addEventListener("click", writePassword);

function generatePassword(){
    var welcomeMessage= confirm('Would you like to create a random password?');
    console.log(welcomeMessage);
    if(welcomeMessage === true){
        console.log('Lets begin');
    } else {
        console.log('awww okay :(');
        alert('awww okay :(')
    }
    var lengthMessage = prompt('Select at least 8 characters and a minimum of 128 characters');
    console.log(lengthMessage);
    if ((lengthMessage>=8 && lengthMessage <= 128) && (!isNaN(lengthMessage))){
        console.log('Password Approved!');
    } else {
        console.log('Please try again');
        alert('Select at least 8 characters and a minimum of 128 characters')
    }
    var uppercaseMessage= confirm('Would you like to include uppercase characters?');
    console.log(uppercaseMessage);
    if (uppercaseMessage === true){
        console.log ('add uppercase characters');
    } else{
        console.log('not a problem');
    }
    var lowercaseMessage= confirm('Would you like to include lowercase characters?');
    console.log(lowercaseMessage);
    if (lowercaseMessage === true){
        console.log ('add lowercase characters');
    } else{
        console.log ('not a problem');
    }
    var numberMessage= confirm('Would you like to include numbers?');
    console.log(numberMessage);
    if (numberMessage === true){
        console.log ('add numbers');
    } else {
        console.log('not a problem');
    }
    var specialCharactersMessage= confirm('Would you like to include special characters?');
    console.log(specialCharacterMessage);
    if (specialCharacterMessage ===true){
        console.log ('add special characters');
    } else {
        console.log('not a problem');
    }


}
