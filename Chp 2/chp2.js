/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// Expressions and statements
console.log("This is a statement!!");

// Bindings or Variables

let value = 12;
console.log(value);


let debt = 140;
debt = debt - 35;
console.log(debt);


let name;
console.log(name);

let num1 = 1, num2 = 12;
console.log(num1 + num2);


// var and const

var myname = "musa";
const greeting = "Hello, ";
console.log(greeting + myname);



console.log(Math.max(4, 3));
console.log(Math.min(1, 3) + 12);


// Sample Square Program
let theNumber = Number(prompt("Enter a Number:"));
console.log("Your Number is the squareroot of " + theNumber * theNumber);


// Sample string program
let theName = String(prompt("Enter your name:"));
console.log("Hello, " + theName);


// Conditional Execution
let theNumber1 = Number(prompt("Enter a number:"));
if (!Number.isNaN(theNumber1)){
    console.log("Your Number is the squareroot of " + theNumber1 * theNumber1);
}
else {
    console.log("The input =>" + theNumber1 + " Is Not a Number!!")
}