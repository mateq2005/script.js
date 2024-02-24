{
    const person = {
        firstName: "John",
        lastName: "Smith",
        id: 1234,
        fullName : function() {
            return `${this.firstName} ${this.lastName}`
        } 
    };
}

{
    let x = this;
    // x = [object Window];
}

{
    "use strict";
    let x = this;
    // x = [object Window];

}

{
    function myFunction() {
        return this;
    }
    // [object Window];
}

{
    "use strict";
    function myFunction() {
        return this;
    }
    // undefined;
}

{
    //Event Handlers
    `
    <button onclick="this.style.display='none'">
        Click to Remove Me!
    </button>
    `
}

{
    //In these examples, this is the person object:
    const person = {
        firstName  : "John",
        lastName   : "Doe",
        id         : 5566,
        myFunction : function() {
          return this;
        }
    };
}

{
    //Explicit Function Binding
    {
        const person1 = {
            fullName: function() {
              return this.firstName + " " + this.lastName;
            }
        }
          
        const person2 = {
            firstName:"John",
            lastName: "Doe",
        }
          
        // Return "John Doe":
        person1.fullName.call(person2);
    }
}

{
    //Function Borrowing
    {
        const person = {
            firstName:"John",
            lastName: "Doe",
            fullName: function () {
              return this.firstName + " " + this.lastName;
            }
        }
          
        const member = {
            firstName:"Hege",
            lastName: "Nilsen",
        }
          
        let fullName = person.fullName.bind(member);
    }
}