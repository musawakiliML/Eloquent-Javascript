/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// for loops
let number = Number(prompt("Enter a range:"))

for (number; number < 10; number++){
    console.log("Hi!, For Loops...")
}