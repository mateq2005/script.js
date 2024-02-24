{
    //Syntax
    const array_name = [item1, item2, item3]; 
    //const array_name = new Array(item1, item2, item3);
}

{
    const colors = [];
    colors[0]= "black";
    colors[1]= "red";
    colors[2]= "white";
}

{
    //Accessing Array Elements
    const numbers = [0, 1, 2, 3];
    let first = numbers[0];
    //Array indexes start with 0
}

{
    //Changing an Array Element
    cars[0] = "Opel";
}

{
    //Converting an Array to a String
    const fruits = [
      "apple",
      "orange",
      "cherry"
    ];
    document.getElementById('demo').innerHTML = fruits.toString();
}

{
    //Access the Full Array
    const cars = ['Saab', 'Volvo', 'BMW']; 
    document.getElementById('demo').innerHTML = cars;
}

{
    //Arrays are Objects
    const person1 = ['John', 'Doe', 46];
    const person2 = {firstName:"John", lastName:"Doe", age:46};
}

{
    cars.length             // Returns the number of elements
    cars.sort()             // Sorts the array
    fruits.push('Lemon');   //Adding Array Elements
}

{
    //Accessing the First Array Element
    let first_fruit = fruits[0];

    //Accessing the Last Array Element
    let last_fruit = fruits[fruits.length - 1];
}

{
    const students = ['Joe', 'Mike', 'Sam'];
    let sLen = students.length;
    let text = "<ul>";
    for (let i = 0; i < sLen; i++) {
        text += "<li>" + students[i] + "</li>";
    }
    text += "<ul>"
}

{
    const students = ['Joe', 'Mike', 'Sam'];
    let text = "<ul>";
    students.forEach(myFunction);
    text += "</ul>";
    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }
}

{
    //How to Recognize an Array
    Array.isArray(fruits);
    fruits instanceof Array;
}