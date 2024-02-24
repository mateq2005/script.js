//Reduce Activity in Loops
{
    {
        //bad
        for (let i = 0; i < arr.length; i++) {};
    }

    {
        //better code
        let l = arr.length;
        for (let i = 0; i < l; i++) {};
    }
}

//Reduce DOM Access and Size
{
    const obj = document.getElementById("demo");
    obj.innerHTML = "Hello";
}

//Avoid Unnecessary Variables
{
    {
        let fullName = firstName + " " + lastName;
        document.getElementById("demo").innerHTML = fullName;
    }

    {
        document.getElementById("demo").innerHTML = firstName + " " + lastName;
    }
}

//Delay JavaScript Loading
{
    `
    <script>
        window.onload = function() {
            const element = document.createElement("script");
            element.src = "myScript.js";
            document.body.appendChild(element);
        };
    </script>
    `

    `
    <script defer="true"> ... </script>
    `
}

//Avoid Using with
`Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.`