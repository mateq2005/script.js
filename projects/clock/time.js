console.log("time.js connected");

function updateTime() {

    //This line creates a new Date object representing the current date and time.
    var now = new Date();

    //These lines extract the current hours, minutes, and seconds from the Date object.
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    //This line constructs a string representation of the time in the format "HH:MM:SS". 
    //The toString() method is used to convert the numbers to strings. 
    //The padStart() method ensures that each component has two digits by adding leading zeros if necessary.
    var timeString = hours.toString().padStart(2, '0') + ':' + 
                     minutes.toString().padStart(2, '0') + ':' + 
                     seconds.toString().padStart(2, '0');

    //This line sets the innerHTML property of the element with the id "time" to the timeString value. 
    //This assumes that there is an HTML element on the page with the id "time" where the time will be displayed.                
    document.getElementById('time').innerHTML = timeString;
}
  
  //This line immediately calls the updateTime() function once to initially display the current time.
  updateTime();

  //This line sets up a recurring interval using the setInterval() function. 
  //It calls the updateTime() function every 1000 milliseconds (1 second).
  //Ensuring that the displayed time is continuously updated on the web page.
  setInterval(updateTime, 1000);