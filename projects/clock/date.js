console.log("date.js connected");

//This line creates a new Date object representing the current date and time.
const today = new Date();

//This line assigns the value 'en-GB' to the locales variable, which represents the desired locale for formatting the date. 
//In this case, it indicates British English.
const locales = 'en-GB';

//This line defines an object named options that specifies the desired formatting options for the date. 
//It specifies that the day should be displayed as a numeric value.
//The month should be displayed as the full month name.
//The year should be displayed as a numeric value.
const options = { day: 'numeric', month: 'long', year: 'numeric' };

//This line calls the toLocaleDateString() method on the today date object, passing the locales and options as arguments. 
//This method returns a string representation of the date formatted according to the specified locale and options.
const formattedDate = today.toLocaleDateString(locales, options);

//This line selects an HTML element with the ID "date" and sets its innerHTML property to the formattedDate string. 
//This will update the content of that element with the formatted date.
document.getElementById("date").innerHTML = formattedDate;