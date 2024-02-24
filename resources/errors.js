{
    const array = [
        "The try statement defines a code block to run (to try).",
        "The catch statement defines a code block to handle any error.",
        "The finally statement defines a code block to run regardless of the result.",
        "The throw statement defines a custom error."
    ];
}

{
    try {
        adddlert("Welcome guest!");
    }
    catch(err) {
       console.log(err.message);
    }
}

`
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>
`

`
<input id="demo" type="number" min="5" max="10" step="1">
`

{
    //The finally Statement
    try {
        `Block of code to try`
    }
    catch(err) {
        `Block of code to handle errors`
    }
    finally {
        `Block of code to be executed regardless of the try / catch result`
    }
}

{
    //Error Object Properties
    `name` `Sets or returns an error name`
    `message` `Sets or returns an error message (a string)`
}

{
    //Error Name Values
    `EvalError` `An error has occurred in the eval() function`
    `RangeError` `A number "out of range" has occurred`
    `ReferenceError` `An illegal reference has occurred`
    `SyntaxError` `A syntax error has occurred`
    `TypeError` `A type error has occurred`
    `URIError` `An error in encodeURI() has occurred`
}