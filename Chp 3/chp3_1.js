/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// Defining Functions

const square = function(x){
    return x * x;
}
console.log(square(4));

// make noise function

const makenoise = function(){
    console.log("Pling!");
}
makenoise();

// power and exponent

const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2, 10));