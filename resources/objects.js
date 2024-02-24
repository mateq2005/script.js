//Object Definition
const car = {type:"Fiat", model:"500", color:"white"};
const human = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
/*const human = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };*/

//Accessing Object Properties
objectName.propertyName;
objectName["propertyName"];

//Object Methods
const person = {
    firstName: 'Jon',
    lastName: 'Snow',
    id : 2432,
    fullName : function() {
        return this.firstName + '' + this.lastName;
    }
};


