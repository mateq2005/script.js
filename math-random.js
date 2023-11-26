//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
Math.random();

//// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

{
    //A Proper Random Function
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    //This JavaScript function always returns a random number between min (included) and max (excluded)
}


{
    //A Proper Random Function
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    //This JavaScript function always returns a random number between min and max (both included)
}