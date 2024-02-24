{
    //Block Scope
    {
        {
            let x = 2;
        }
        // x can NOT be used here
    }
    {
        {
            var x = 2;
        }
        // x CAN be used here
    }
}

{
    //Local Scope
    {
        // code here can NOT use carName
        function myFunction() {
            let carName = "Volvo";
            // code here CAN use carName
        }
        // code here can NOT use carName
    }
}

{
    //Function Scope
    
    {
        function myFunction() {
            var carName = "Volvo";   // Function Scope
        }
    }

    {
        function myFunction() {
            let carName = "Volvo";   // Function Scope
        }
    }

    {
        function myFunction() {
            const carName = "Volvo";   // Function Scope
        }
    }
}

{
    //Global JavaScript Variables
    {
        let carName = "Volvo";
        // code here can use carName
        function myFunction() {
        // code here can also use carName
        }
    }
}

{
    //Global Scope

    {
        var x = 2;       // Global scope
    }

    {
        let x = 2;       // Global scope
    }

    {
        const x = 2;       // Global scope
    }
}

{
    //Automatically Global
    {
        myFunction();

        // code here can use carName

        function myFunction() {
            carName = "Volvo";
        }
    }
}

{
    //Global Variables in HTML

    {
        var carName = "Volvo";
        // code here can use window.carName
    }

    {
        let carName = "Volvo";
        // code here can not use window.carName
    }
}