//Date Output
'Sat Nov 25 2023 13:51:08 GMT+0100 (czas środkowoeuropejski standardowy)'

//new Date()
const date1 = new Date();


//new Date(date string)
const date2 = new Date("October 13, 2014 11:13:00");
const date3 = new Date("2022-03-25");

//new Date(year, month, day, hour, minute, second, millisecond)
const date4 = new Date(2018, 11, 24, 10, 33, 30, 0);

{
    const d = new Date();
    d.toString();
}

{
    const d = new Date();
    d.toDateString();
}

{
    const d = new Date();
    d.toUTCString();
}

{
    const d = new Date();
    d.toISOString();
}