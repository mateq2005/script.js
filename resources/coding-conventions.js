//Variable Names
{
    firstName = "John";
    lastName = "Doe";
    price = 19.90;
    tax = 0.20;
    fullPrice = price + (price * tax);
}

//Spaces Around Operators
{
    let x = y + z;
    const myArray = ["Volvo", "Saab", "Fiat"];
}

//Code Indentation
{
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    };
}

//Statement Rules
{
    const cars = ["Volvo", "Saab", "Fiat"];

    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    };

    for (let i = 0; i < 5; i++) {
        x += i;
    };

    if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    };
}

//Object Rules
{
    {
        const person = {
            firstName: "John",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
        };
    }

    {
        const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    }
}

//Line Length < 80
{
    document.getElementById("demo").innerHTML =
    "Hello Dolly.";
}

//Loading JavaScript in HTML
`<script src="myscript.js"></script>`;

//Accessing HTML Elements
{
    const obj1 = getElementById("Demo")
    const obj2 = getElementById("demo")
}

//File Extensions
`HTML files should have a .html extension (.htm is allowed).`
`CSS files should have a .css extension.`
`JavaScript files should have a .js extension.`

const rules = [
    "Avoid Global Variables",
    "Always Declare Local Variables",
    "Declarations on Top",
    "Initialize Variables",
    "Declare Objects and Arrays with const",
    `
    Don't Use new Object()
        Use "" instead of new String()
        Use 0 instead of new Number()
        Use false instead of new Boolean()
        Use {} instead of new Object()
        Use [] instead of new Array()
        Use /()/ instead of new RegExp()
        Use function (){} instead of new Function()
    `,
    "Beware of Automatic Type Conversions",
    "Use === Comparison",
    "Use Parameter Defaults",
    "End Your Switches with Defaults",
    "Avoid Using eval()"
];