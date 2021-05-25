const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(3) + str.slice(0, 3);



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original would be '${str}' and the other would be '${str2}'`);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("How many letters are we relocating?");

let numUserInput = Number (userInput);

//console.log(typoeof numUserInput);


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numUserInput > str.length) {
console.log(`That is too many numbers. Here is your default: ${str2}.`);
} else {
  let str3 = str.slice(numUserInput) + str.slice(0, numUserInput);
  console.log(`That's correct! Herte is yuor new word: ${str3}!`);
}