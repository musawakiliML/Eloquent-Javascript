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

// continue statement

for (let num = 1; num < 10; num = num + 1){
    if (num % 2 == 0){
        console.log(num);
        continue;
    }
}