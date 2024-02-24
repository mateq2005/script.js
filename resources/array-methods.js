//Declaring the array
const fruits = [
    'Banana',
    'Orange',
    'Apple',
    'Mango'
]

//Array length
let length = fruits.length;

//Array toString() & join()
fruits.toString();
fruits.join(" * "); //you can specify the separator

//Array pop() method removes the last element from an array
fruits.pop();

//Array push() method adds a new element to an array (at the end)
fruits.push('Kiwi');

//Array shift() method removes the first array element and "shifts" all other elements to a lower index
fruits.shift();

//Array unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
fruits.unshift('Lemon');

//Concatenating Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

//Flattening an Array (reducing the dimensionality of an array)
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

//Array splice()
fruits.splice(2, 0, "Lemon", "Kiwi");

/*
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

//Array slice()
const cars = ["Audi", "Opel", "Toyota"];
const audi = cars.slice(0);
const opel_toyota = cars.slice(1,2);
