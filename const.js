{
    //Always use const if the value should not be changed
    //Always use const if the type should not be changed (Arrays and Objects)
    const x = 5;
    const y = 6;
    const z = x + y;
}

{
    //A const variable cannot be reassigned
    const PI = 3.141592653589793;
    PI = 3.14;      // This will give an error
    PI = PI + 10;   // This will also give an error
}

{
    //Must be Assigned
    const pi = 3.14159265359;
}

{
    Error:
    const PI;
    PI = 3.14159265359; 
}

{
    //You can create a constant array
    const cars = ["Saab", "Volvo", "BMW"];

    //You can change an element
    cars[0] = "Toyota";

    //You can add an element
    cars.push("Audi");

    //But you can NOT reassign the array
}

{
    //You can create a const object
    const car = {type:"Fiat", model:"500", color:"white"};

    //You can change a property
    car.color = "red";

    //You can add a property
    car.owner = "Johnson";

    //But you can NOT reassign the object
}