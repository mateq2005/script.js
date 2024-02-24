{
    //In JavaScript there are 5 different data types that can contain values:
    `string`
    `number`
    `boolean`
    `object`
    `function`
}

{
    //There are 6 types of objects:
    `Object`
    `Date`
    `Array`
    `String`
    `Number`
    `Boolean`
}

{
    //And 2 data types that cannot contain values:
    `null`
    `undefined`
}

{
    //The typeof Operator
    typeof "John"                 // Returns "string"
    typeof 3.14                   // Returns "number"
    typeof NaN                    // Returns "number"
    typeof false                  // Returns "boolean"
    typeof [1,2,3,4]              // Returns "object"
    typeof {name:'John', age:34}  // Returns "object"
    typeof new Date()             // Returns "object"
    typeof function () {}         // Returns "function"
    typeof undefined              // Returns "undefined"
    typeof null                   // Returns "object"
}

{
    //The constructor Property
    "John".constructor                // Returns function String()  
    (3.14).constructor                // Returns function Number()  
    false.constructor                 // Returns function Boolean()
    [1,2,3,4].constructor             // Returns function Array()   
    ({name:'John',age:34}).constructor  // Returns function Object()  
    new Date().constructor            // Returns function Date() 
    (function() {}).constructor         // Returns function Function()
}

{
    //Undefined
    {
        let car;
    }
    {
        let car = undefined;
    }
}

{
    //Empty Values
    let car = ""; 
}

{
    {
        let person = {firstName: 'John', lastName: 'Doe', age: 50};
        person = null; //Now value is null, but type is still an object
    }
    
    {
        let person = {firstName: 'John', lastName: 'Doe', age: 50};
        person = undefined; //Now both value and type is undefined
    }
}

{
    //Difference Between Undefined and Null
    'undefined and null are equal in value but different in type'
    {
        typeof undefined     // undefined
        typeof null          // object
        null === undefined   // false
        null == undefined    // true
    }
}

{
    //The instanceof Operator
    const cars = ['Saab','BMW','Volvo']
    cars instanceof Array;  //true
    cars instanceof Object; //true
    cars instanceof String; //false
    cars instanceof Number; //false
}

{
    //The void Operator
    {
        `
        <a href="javascript:void(0);">
            Useless link
        </a>
        `
    }
    {
        `
        <a href="javascript:void(document.body.style.backgroundColor='red');">
            Click me to change the background color of body to red
        </a>
        `
    }
}