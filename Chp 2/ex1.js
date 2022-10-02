/* Chapter 2
Program Structure */
// import prompt for command line
const prompt = require("prompt-sync")();

// Looping Triangle exercise

let line = "#";

for (line; line.length < 8; line += "#"){
    console.log(line);
}