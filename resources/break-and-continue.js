{
    //The Break Statement
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            break;
        }
        text += `The number is ${i} <br>`;
    }
}

{
    //The Continue Statement
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            continue;
        }
        text += `The number is ${i} <br>`;
    }
}

{
    //JavaScript Labels
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        break list;
        text += cars[2] + "<br>";
        text += cars[3] + "<br>";
    }
}