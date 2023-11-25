//ECMAScript 2015 (ES6)
const cars = ["Saab", "Volvo", "BMW"];

//Cannot be Reassigned
cars = ["Toyota", "Volvo", "Audi"]; // ERROR

//Elements Can be Reassigned

// You can create a constant array:
const cars_ = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars_[0] = "Toyota";

// You can add an element:
cars_.push("Audi");

//Error
const Cars;
cars = ["Saab", "Volvo", "BMW"];

//Const Block Scope
const colors = ["blue", "yellow", "red"];
// Here cars[0] is "blue"
{
  const colors = ["red", "yellow", "blue"];
  // Here cars[0] is "red"
}
// Here cars[0] is "blue"
/*An array declared with var does not have block scope*/