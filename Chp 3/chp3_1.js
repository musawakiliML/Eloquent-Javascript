/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// Defining Functions

const square = function(x){
    return x * x;
};
console.log(square(4));

// make noise function

const makenoise = function(){
    console.log("Pling!");
};
makenoise();

// power and exponent

const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power(2, 10));


// nested scope

const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(1, "clove", "garlic");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(3);


// Functions as values
let launchMissiles = function(){
    missileSystem.launch("Now");
};
//if (safeMode){
 //   launchMissiles = function()
//}

// Declaration notation
function square_1(x){
    return x * x;
}

console.log("The square of 4 is:", square_1(4));


// a subtlety
console.log("The Future says:", future());

function future(){
    return "You'll never have flying cars";
}


// Arrow Functions

const power_1 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power_1(2, 10));


// more smaples of arrow functions

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(12));
console.log(square2(123));

// function without parameters
const horn = () => {
    console.log("Toot");
};


// Optional Arguments
function square3(x) {return x * x; }
console.log(square3(4, true, "hedgehog"));


//console.log(x);
//var x = 90;