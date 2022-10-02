/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// a power program number to the power of value

let power = Number(prompt("Enter the exponent value:"));
let base = Number(prompt("Enter the base number:"))

let counter = 0;
let result = 1;

while (counter < power){
    result = result * base;
    counter = counter + 1;
}
console.log("The result of " + base + "^"+ power + "is:" + result);