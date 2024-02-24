{
    //Number Methods
    `
    Number()        Returns a number, converted from its argument
    parseFloat()	Parses a string and returns a floating point number
    parseInt()	    Parses a string and returns an integer
    `
}

{
    //The Unary + Operator
    {
        let y = "5";     // y is a string
        let x = + y;     // x is a number
    }
    {
        let y = "John";  // y is a string
        let x = + y;     // x is a number (NaN)
    }
}

{
    //Converting Numbers to Strings.
    {
        String(x);         // returns a string from a number variable x
        String(123);       // returns a string from a number literal 123
        String(100 + 23);  // returns a string from a number from an expression
    }

    //The Number method toString() does the same.
    {
        x.toString()
        (123).toString()
        (100 + 23).toString()
    }
}

{
    //More Methods
    const methods = new Map([
        ["toExponential()", "Returns a string, with a number rounded and written using exponential notation."],
        ["toFixed()", "Returns a string, with a number rounded and written with a specified number of decimals."],
        ["toPrecision()", "Returns a string, with a number written with a specified length."]
    ]);
}

{
    //Converting Dates to Numbers
    d = new Date();
    Number(d);
}

{
    //Converting Dates to Strings
    String(Date());
    Date().toString();
}

{
    //Converting Booleans to Numbers
    {
        Number(false);  // returns 0
        Number(true);   // returns 1
    }
}

{
    //Converting Booleans to Strings
    {
        String(false);  // returns "false"
        String(true);   // returns "true"
    }
    {
        false.toString(); // returns "false"
        true.toString();  // returns "true"
    }
}