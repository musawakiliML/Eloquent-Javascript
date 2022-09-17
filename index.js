//alert("Hello, Javascript!!.")
//alert("I love Eloquent Javascript!!")


// variables
var myName = "Net Ninja";

//alert("Name:" + myName);
//console.log("Name:" + myName);


// maths operators
var num1 = 12;
var num2 = 13;

var sum;
var mult;
var div;
var sub;

var average;

sum = num1 + num2;
mult = num1 * num2;
div = num1 / num2;
sub = num1 - num2;


console.log(num1 + " + " + num2 + " = " + sum);
console.log(num1 + " - " + num2 + " = " + sub);
console.log(num1 + " * " + num2 + " = " + mult);
console.log(num1 + " / " + num2 + " = " + div);


//short-hand operators
num1 += 12;
console.log("num1:" + num1)
//document.write(num1 + " + " + num2 + " = " + sum)


// boolean
var start = true


// if statements

var youLikeMeat = true;

if (youLikeMeat){
    console.log("I will give you meat!!");
    console.log("Here is the meat menu...");
    //document.write("I will give you meat!!");
    //document.write("Here is the meat menu...");
}
else{
    console.log("You are a vegetarian!");
    console.log("Here is the veg menu...");
    //document.write("You are a vegetarian!")
    //document.write("Here is the veg menu...");
}

// positive, negative or zero number

var num;

num = 12;

if (num > 0){
    console.log("Hi Positive!!")
}
if (num < 0){
    console.log("Hi Negative!!")
}
if (num == 0){
    console.log("Hi Zero")
}

// age to vote

var age;

age = 12;

if (age >= 18){
    console.log("You can Vote!!")
}
else{
    console.log("You cannot Vote!!")
}
