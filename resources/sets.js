{
    //Essential Set Methods
    const methods = {
        'new Set()': 'Creates a new Set',
        'add()': 'Adds a new element to the Set',
        'delete()': 'Removes an element from a Set',
        'has()': 'Returns true if a value exists in the Set',
        'forEach()': 'Invokes a callback for each element in the Set',
        'values()': 'Returns an iterator with all the values in a Set'
    }
}

{
    //Create a Set
    const letters = new Set(["a","b","c"]);
}

{
    //Create a Set
    const letters = new Set();

    //Add Values to the Set
    letters.add("a");
    letters.add("b");
    letters.add("c");
}

{
    //Create a Set
    const letters = new Set();

    //Create Variables
    const a = "a";
    const b = "b";
    const c = "c";

    //Add Variables to the Set
    letters.add(a);
    letters.add(b);
    letters.add(c);
}

{
    //The forEach() Method

    const letters = new Set(["a","b","c"]);
    let text = "";
    letters.forEach(myFunction);

    const myFunction = function(value) {
        text += value;
    }
}

{
    const letters = new Set(["a","b","c"]);
    let text = "";
    for (const x of letters.values()) {
    text += x;
    }
}