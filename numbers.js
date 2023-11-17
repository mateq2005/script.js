let a = 3.14;       // A number with decimals
let b = 3;          // A number without decimals
let c = 123e5;      // 12300000
let d = 123e-5;     // 0.00123

//Integer Precision
let int1 = 999999999999999;   // x will be 999999999999999
let int2 = 9999999999999999;  // y will be 10000000000000000
/*
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
The maximum number of decimals is 17.
*/

//Floating Precision
let x1 = 0.2 + 0.1; /*Floating point arithmetic is not always 100% accurate*/
let x2 = (0.2 * 10 + 0.1 * 10) / 10; /*To solve the problem above, it helps to multiply and divide*/

//If you add two numbers, the result will be a number
//If you add two strings, the result will be a string concatenation
//If you add a number and a string, the result will be a string concatenation

//Numeric Strings
let x = 100; // x is a number
let y = "100"; // y is a string

//NaN - Not a Number
let NaN = 100 / "Apple";
isNaN(NaN);

//Infinity
let myNumber = 2;
/*Execute until Infinity*/
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    console.log(myNumber);
}
/*Division by 0 (zero) also generates Infinity*/
let number = +prompt('number');
let outcome = number / 0;

//Hexadecimal
let hexadecimal = 0xFF;

//Numbers as Objects
let object = new Number(123);
/*Do not create Number objects*/
