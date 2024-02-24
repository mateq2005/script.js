{
    //Example 1
    {
        x = 5; // Assign 5 to x
        elem = document.getElementById("demo"); // Find an element
        elem.innerHTML = x;                     // Display x in the element
        var x; // Declare x
    }

    //Example 2
    {
        var x; // Declare x
        x = 5; // Assign 5 to x
        elem = document.getElementById("demo"); // Find an element
        elem.innerHTML = x;                     // Display x in the element
    }

}

{
    //This will result in a ReferenceError:
    `carName = "Volvo";
    let carName;`
}

{
    //This code will not run:
    `carName = "Volvo";
    const carName;`
}

{
    //JavaScript Initializations are Not Hoisted

    {
        var x = 5; // Initialize x
        var y = 7; // Initialize y
        elem = document.getElementById("demo"); // Find an element
        elem.innerHTML = x + " " + y;           // Display x and y
    }

    //Example 1 does not give the same result as Example 2;

    {
        var x = 5; // Initialize x
        elem = document.getElementById("demo"); // Find an element
        elem.innerHTML = x + " " + y;           // Display x and y
        var y = 7; // Initialize y
    }
}

{
    console.log(
        `<strong>
        Declare Your Variables At the Top !
        </strong>`
    );
}