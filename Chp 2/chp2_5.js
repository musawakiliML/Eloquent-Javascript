/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// for loops
let range = Number(prompt("Enter a range:"))

for (number = 0; number < range; number++){
    console.log("Hi!, For Loops...")
}