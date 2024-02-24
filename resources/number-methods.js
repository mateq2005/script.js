//JavaScript Number Methods
let number1 = 1000;
number1.toString();	                        //Returns a number as a string
number1.toExponential();	                //Returns a number written in exponential notation
number1.toFixed(/*number of decimals*/);	//Returns a number written with a number of decimals
number1.toPrecision(/*specified length*/);	//Returns a number written with a specified length
number1.valueOf();	                        //Returns a number as a number

//Converting Variables to Numbers
let number2 = '10.00';
Number(number2);	                        //Returns a number converted from its argument.
parseFloat(number2);	                    //Parses its argument and returns a floating point number
parseInt(number2);	                        //Parses its argument and returns a whole number

//Number Object Methods
let number3 = 10.50;
Number.isInteger(number3);	                //Returns true if the argument is an integer
Number.isSafeInteger(number3);	            //Returns true if the argument is a safe integer
Number.parseFloat(number3);	                //Converts a string to a number
Number.parseInt(number3);	                //Converts a string to a whole number