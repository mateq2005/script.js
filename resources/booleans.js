{
    //The Boolean() Function
    Boolean(10 > 9);
    (10 > 9);
    10 > 9;
}

{
    //Everything Without a "Value" is False
    {
        let x = 0;
        Boolean(x);
    }
    {
        let x = -0;
        Boolean(x);
    }
    {
        let x = "";
        Boolean(x);
    }
    {
        let x;
        Boolean(x);
    }
    {
        let x = null;
        Boolean(x);
    }
    {
        let x = false;
        Boolean(x);
    }
    {
        let x = NaN;
        Boolean(x);
    }
}

{
    //Everything With a "Value" is True
    Boolean(1);
    Boolean(Math.PI);
    Boolean(-1);
    Boolean("Hello");
}