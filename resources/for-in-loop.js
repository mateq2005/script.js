{
    //The For In Loop
    for (key in object) {
        // code block to be executed
    }
}

{
    //Objects
    const person = {fname: "John", lname: "Doe", age: 25};
    let text = "";

    for (let x in person) {
        text += person[x];
    }
}

{
    //Arrays
    const numbers = [45, 4, 9, 16, 25];
    let text = "";

    for (let x in numbers) {
        text += numbers[x] + '<br>';
    }
}

{
    //Array.forEach()
    const numbers = [45, 4, 9, 16, 25];
    let text = "";
    numbers.forEach(myFanction);
    
    const myFanction = function(value, index, array) {
        text += value;
    }
}
