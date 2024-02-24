{
    //Essential Map Methods
    const methods = {
        'new Map()': 'Creates a new Map',
        'set()': 'Sets the value for a key in a Map',
        'get()': 'Gets the value for a key in a Map',
        'delete()':	'Removes a Map element specified by the key',
        'has()': 'Returns true if a key exists in a Map',
        'forEach()': 'Calls a function for each key/value pair in a Map',
        'entries()': 'Returns an iterator with the [key, value] pairs in a Map'
    };
}

{
    //The new Map() Method
    const fruits = new Map([
        ["apples", 500],
        ["banans", 300],
        ["oranges", 200]
    ])
}

{
    //The set() Method
    const fruits = new Map();
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);
}

{
    //The get() Method
    fruits.get("apples"); //Returns 500
}

{
    //The size Property
    fruits.size;
}

{
    //The delete() Method
    fruits.delete("apples");
}

{
    //The has() Method
    fruits.has("apples");
}

{
    //The forEach() Method

    let text = "";
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ])

    fruits.forEach(myFunction());

    const myFunction = function(value, key) {
        text += `${key} = ${value}`;
    }
}

{
    //The entries() Method

    let text = "";
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ])

    for(const x of fruits.entries()) {
        text += x;
    }
}