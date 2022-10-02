/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

let yourName;

do {
    yourName = String(prompt("What is your name:"));
} while (!yourName);
console.log(yourName);