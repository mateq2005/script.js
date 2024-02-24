{
    //ECMAScript 2015 (ES6)
    const cars = ["Saab", "Volvo", "BMW"];
}

{
    //Cannot be Reassigned
    const cars = ["Saab", "Volvo", "BMW"];
    cars = ["Toyota", "Volvo", "Audi"]; // ERROR
}

{
    //Elements Can be Reassigned
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
}

{
    //Error
    const cars;
    cars = ["Saab", "Volvo", "BMW"];
}

{
    //Const Block Scope
    const colors = ["blue", "yellow", "red"];
    // Here cars[0] is "blue"
    {
      const colors = ["red", "yellow", "blue"];
      // Here cars[0] is "red"
    }
    // Here cars[0] is "blue"
    /*An array declared with var does not have block scope*/
}

