/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// number range
let number = Number(prompt('Enter a Number:'));
if (number < 10){
    console.log("Small");
}
else if (number < 100){
    console.log("Medium");
}
else {
    console.log("Large");
}