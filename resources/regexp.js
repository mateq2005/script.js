{
    //Using String search() With a String
    {
        //The search() method searches a string for a specified value and returns the position of the match
        let text = "Visit W3Schools!";
        let n = text.search("W3Schools");
        console.log(n);
    }
}

{
    //Using String search() With a Regular Expression
    {
        let text = "Visit W3Schools";
        let n = text.search(/w3schools/i); 
        console.log(n);  
    }
}

{
    //Using String replace() With a String
    let text = "Visit Microsoft!";
    let result = text.replace("Microsoft", "W3Schools");
}

{
    //Use String replace() With a Regular Expression
    let text = "Visit Microsoft!";
    let result = text.replace(/microsoft/i, "W3Schools");
}

{
    //Regular Expression Modifiers
    const modifiers = {
        "i" : "Perform case-insensitive matching",	
        "g" : "Perform a global match (find all)",	
        "m" : "Perform multiline matching",	
        "d" : "Perform start and end matching (New in ES2022)"
    };
}

{
    //Regular Expression Patterns
    const patterns = {
        "[abc]" : "Find any of the characters between the brackets",	
        "[0-9]" : "Find any of the digits between the brackets",	
        "(x|y)" : "Find any of the alternatives separated with |"
    }
}

{
    //Metacharacters
    const metacharacters = {
        "\d" : "Find a digit",	
        "\s" : "Find a whitespace character",	
        "\b" : "Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b",	
        "\`uxxxx`" : "Find the Unicode character specified by the hexadecimal number xxxx"
    };
}

{
    //Quantifiers 
    const quantifiers = {
        "n+" : "Matches any string that contains at least one n",
        "n*" : "Matches any string that contains zero or more occurrences of n",
        "n?" : "Matches any string that contains zero or one occurrences of n"
    };
}

{
    //Using test()
    const pattern = /e/;
    pattern.test("The best things in life are free!"); //true
}

{
    //Using exec()
    /e/.exec("The best things in life are free!");
}