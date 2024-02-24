{
    //The For Loop
    for (expression_1; expression_2; expression_3) {
        // code block to be executed
    }
}

{
    'Expression 1 is executed (one time) before the execution of the code block.'
    'Expression 2 defines the condition for executing the code block.'
    'Expression 3 is executed (every time) after the code block has been executed.'
}

{
    //Example
    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }
}

{
    const cars = ["BMW", "Volvo", "Saab", "Ford"];

    let i, len, text;

    for (i = 0, len = cars.length, text = ""; i < len; i++) {
        text += cars[i] + "<br>";
    }
}

{
    let i = 0;
    let len = cars.length;
    let text = "";

    for (; i < len; ) {
        text += cars[i] + "<br>";
        i++;
    }
}