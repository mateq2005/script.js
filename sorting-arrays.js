//The sort() method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//Reversing an Array
fruits.reverse();


//Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});*/

//Sorting an Array in Random Order
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(){return 0.5 - Math.random()});

//The Fisher Yates Method
const value = [40, 100, 1, 5, 25, 10];

for (let i = value.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = value[i];
  value[i] = value[j];
  value[j] = k;
}

//Using Math.max() on an Array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

//Using Math.min() on an Array
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }

//Sorting Object Arrays
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

//The solution is to write a compare function to compare the property values
cars.sort(function(a, b){return a.year - b.year});

//Comparing string properties is a little more complex
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});