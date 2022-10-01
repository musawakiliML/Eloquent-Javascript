/* This is chapter deals with:
    Values, Types and Operators */



// Numbers
console.log("Number Types in Javascript")
console.log("Integer Number:",12) // integer number
console.log("Float Number:",12.9) // float number


// Arithmetic 
console.log("Arithmetic In Javascript")
console.log("12 + 12 =", 12 + 12) // addition
console.log("12 - 12 =", 12-12) // subtraction
console.log("12 / 11 =",12/11 ) // division
console.log("12 * 10 =",12*10) // multiplication
console.log("12 ** 2 =", 12**2) // exponent
console.log("12 % 3 =", 12%3) // modulus

// Special Numbers
console.log("Special Numbers in Javascript")
console.log(Infinity)
console.log(-Infinity)
console.log(NaN)


// Strings
console.log("Strings in Javascript")
console.log("A newline character is written like \"\\n\".")
console.log(`The square of 12 is ${12 ** 2}`)
console.log('This is also a "string"..')



// Unary Operators
console.log("Unary Operators")
console.log("'typeof': typeof 2.3 = ",typeof 2.3)
console.log("'typeof': typeof 'x' = ",typeof 'x')
console.log("- (10 - 2)) = ", - (10 - 2))

// Boolean values
console.log("Boolean Values(true or false)")
console.log("3 > 4 = ",3 > 4)
console.log("5 < 6 =", 5 < 6)
console.log('"Aardvark" < "Zoroaster" => ',"Aardvark" < "Zoroaster")
console.log('"Itchy" != "Scratchy" =>',"Itchy" != "Scratchy")
console.log('34 >= 23 =>',34 >= 23)
console.log('56 <= 46 => ',56 <= 46)
console.log('"Itchy" == "Scratchy" = ',"Itchy" == "Scratchy")
console.log('NaN == NaN =>', NaN == NaN)


//Logical operators
console.log("Logical operators (and:&&, or:||, not:!)")
console.log("true && false =>", true && false)
console.log("false || true =>",false || true)
console.log("!true => ",!true )

// ternary operators
console.log("Ternary Operators")
console.log("true ? 1 : 2 =>", true ? 1 : 2)
console.log("false ? 1 : 2 =>", false ? 1 : 2)

// Empty Values
console.log("Empty Values")
console.log("null =>",null)
console.log("undefined =>", undefined)

//Automatic type conversion(type coercion)
console.log("Automatic type conversion")
console.log("8 * null =>", 8 * null)
console.log("'5' - 1 =>", '5' - 1)
console.log("'5' + 1 =>",'5' + 1)
console.log("'five' * 2 =>", 'five' * 2)
console.log("false == 0 =>", false == 0)


// precise equality

console.log("0 === false =>", 0 === false)
console.log(" '' !== false =>", '' !== false)