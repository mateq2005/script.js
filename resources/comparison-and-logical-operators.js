{
    //Example
    if (age < 18) console.log("Too young to buy alcohol");
}

{
    //Conditional (Ternary) Operator
    let voteable = (age < 18) ? "Too young":"Old enough";
}

{
    //The Nullish Coalescing Operator (??)
    let name = null;
    let text = "missing";
    let result = name ?? text;
}

{
    //The Optional Chaining Operator (?.)
    const car = {type:"Fiat", model:"500", color:"white"};
    document.getElementById("demo").innerHTML = car?.name;
}