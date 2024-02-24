{
    //The getFullYear() Method
    const date = new Date();
    date.getFullYear();
}

{
    //The getMonth() Method
    const date = new Date();
    date.getMonth();
}

{
    //You can use an array of names to return the month as a name
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
}

{
    //The getDate() Method
    const date = new Date();
    date.getDate();
}

{
    //The getHours() Method
    const date = new Date();
    date.getHours();
}

{
    //The getMinutes() Method
    const date = new Date();
    date.getMinutes();
}

{
    //The getSeconds() Method
    const date = new Date();
    date.getSeconds();
}

{
    //The getMilliseconds() Method
    const date = new Date();
    date.getMilliseconds();
}

{
    //The getDay() Method
    const date = new Date();
    date.getDay();
}

{
    //You can use an array of names, and getDay() to return weekday as a name
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
}

{
    //The getTime() Method
    const date = new Date();
    date.getTime();
}

{
    //The Date.now() Method
    let milliseconds  = Date.now();
}

{
    //The getTimezoneOffset() Method
    let difference = date.getTimezoneOffset;
    /*method returns the difference (in minutes) between local time an UTC time*/
}
