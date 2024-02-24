{
    //Declaring Strict Mode

    {
        "use strict";
        x = 3.14;
        // This will cause an error because x is not declared
    }

    {
        "use strict";
        myFunction();
        function myFunction() {
            y = 3.14;   
        }
        // This will also cause an error because y is not declared
    }

    {
        x = 3.14;       
        // This will not cause an error.
        myFunction();
        function myFunction() {
            "use strict";
            y = 3.14;   
            // This will cause an error
        }
    }
}

{
    const rules = [
        "Using an undeclared variable is not allowed.",
        "Using an undeclared object is not allowed.",
        "Deleting a variable or object is not allowed.",
        "Deleting a function is not allowed.",
        "Duplicating a parameter name is not allowed.",
        "Octal numeric literals are not allowed.",
        "Octal escape characters are not allowed.",
        "Writing to a read-only property is not allowed.",
        "Writing to a get-only property is not allowed.",
        "Deleting an undeletable property is not allowed.",
        "The use of the word 'eval' as a variable is not allowed.",
        "The use of the word 'arguments' as a variable is not allowed.",
        "The use of the 'with' statement is not allowed.",
        "In strict mode, using a variable before declaring it is not allowed.",
        "In strict mode, using eval() to declare a variable with the 'var' keyword is not allowed.",
        "Using eval() to declare a variable with the 'let' keyword is not allowed."
    ];
}

{
    const reservedKeywords = [
        'implements',
        'interface',
        'let',
        'package',
        'private',
        'protected',
        'public',
        'static',
        'yield'
    ];
}