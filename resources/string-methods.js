//String
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//String Length
let length = text.length;

//String slice(start, end)
let fruits = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
/*
If you omit the second parameter, the method will slice out the rest of the string
If a parameter is negative, the position is counted from the end of the string
*/

//String substring(start, end)
let str1 = "Apple, Banana, Kiwi";
let cut1 = str1.substring(7, 13);

//String substr(start, length)
let str2 = "Apple, Banana, Kiwi";
let cut2 = str2.substr(7, 6);

//Replacing String Content
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//String toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

//toLowerCase()
let text3 = "Hello World!";      
let text4 = text1.toLowerCase();

//String concat()
let note1 = "Hello";
let note2 = "World";
let note3 = note1.concat(" ", note2);

//String trim()
let trim1 = "      Hello World!      ";
let trim2 = trim1.trim();
/*
The trimStart() method works like trim(), but removes whitespace only from the start of a string
The trimEnd() method works like trim(), but removes whitespace only from the end of a string
*/

//String padStart()
let toPad1 = "5";
let padded1 = toPad1.padStart(4,"0");
/*It pads a string with another string (multiple times) until it reaches a given length*/

//String padEnd()
let toPad2 = "5";
let padded2 = toPad2.padEnd(4,"0");
/*It pads a string with another string (multiple times) until it reaches a given length*/

//String charAt()
let toChar = "HELLO WORLD";
let char = toChar.charAt(0);

//String charCodeAt()
let toCharCode = "HELLO WORLD";
let charCode = toCharCode.charCodeAt(0);

//String split()
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
