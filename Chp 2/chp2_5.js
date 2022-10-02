/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// for loops
let range = Number(prompt("Enter a range:"))

for (number = 0; number < range; number++){
    console.log("Hi!, For Loops...")
}


// break statement
for (let current = 20; ; current = current + 1){
    if (current % 7 == 0){
        console.log(current);
        break;
    }
}