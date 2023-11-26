{
    //Array forEach()
    const numbers = [45, 4, 9, 16, 25];
    let text = "";
    numbers.forEach(myForEach);

    function myForEach(value,/*index, array*/) {
        text += value + "<br>";
    }
}

{
    //Array map()
    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myMap);

    function myMap(value,/*index, array*/) {
        return value * 2;
    }
}

{
    //Array flatMap()
    const myArr = [1, 2, 3, 4, 5, 6];
    const newArr = myArr.flatMap((x) => x * 2);
}

{
    //Array filter()
    const values = [45, 4, 9, 16, 25];
    const over18 = values.filter(myFilter);

    function myFilter(value,/*index, array*/) {
        return value > 18;
    }
}

{
    //Array reduce()
    const array_numbers = [45, 4, 9, 16, 25];
    let sum = array_numbers.reduce(myReduce);

    function myReduce(total, value,/*index, array*/) {
        return total + value;
    }
    //The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
}

{
    //Array every()
    const array = [45, 4, 9, 16, 25];
    let allOver18 = array.every(myEvery);

    function myEvery(value /*,index, array*/) {
        return value > 18;
    }
}

{
    'The some() method checks if some array values pass a test.'
    'The indexOf() method searches an array for an element value and returns its position.'
    'Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.'
    'The find() method returns the value of the first array element that passes a test function.'
    'The findIndex() method returns the index of the first array element that passes a test function.'
}

{
    //Create an Array from a String
    Array.from("ABCDEFG");
}

{
    //Array Keys()
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();

    for(let x of keys) {
        text += x + "<br>";
    }
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();
    for (let x of f) {
        document.getElementById("demo").innerHTML += x;
    } 
}

{
    //Array includes()
    const cars = ["audi", "opel", "bmw"];
    cars.includes("audi"); // is true
}

{
    //Array Spread
    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];
    const year = [...q1, ...q2, ...q3, ...q4];
}