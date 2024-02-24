//String indexOf()
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.indexOf('locate');

//String lastIndexOf()
let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.lastIndexOf('locate');

//String search()
let text3 = "Please locate where 'locate' occurs!";
text3.search('locate');

//String match()
let text4 = "Please locate where 'locate' occurs!";
text4.match('ain');

//String matchAll()
const iterator = text5.matchAll('Cats');

//String includes()
/*The includes() method returns true if a string contains a specified value.
Otherwise it returns false.*/
let text6 = "Hello world, welcome to the universe.";
text6.includes("world");

//String startsWith() & endsWith()

let text7 = "Hello world, welcome to the universe.";
text7.startsWith("Hello");

let text8 = "John Doe";
text8.endsWith("Doe");

/*Method returns true if a string begins with a specified value. Otherwise it returns false */