/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// switch statements

let weather = String(prompt("What is the weather like:"));

switch (weather){
    case "rainy":
        console.log("Remember to bring your umbrella!");
        break;
    case "sunny":
        console.log("Dress Lightly.");
        break;
    case "cloudy":
        console.log("Go Outside.");
        break;
    default:
        console.log("Unknown Weather type!!");
        break;
}
