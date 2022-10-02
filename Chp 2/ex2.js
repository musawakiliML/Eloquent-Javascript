/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// FizzBuzz
let num = 0;

for (num; num <= 100; num++){
    if (num % 3 == 0 && num % 5 != 0){
        console.log("Fizz");
    }
    else if (num % 3 != 0 && num % 5 == 0){
        console.log("Buzz")
    }
    else if (num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz")
    }
}