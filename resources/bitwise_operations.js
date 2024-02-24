{
    //JavaScript Bitwise Operators
    {"&	AND	Sets each bit to 1 if both bits are 1"}
    {"|	OR	Sets each bit to 1 if one of two bits is 1"}
    {"^	XOR	Sets each bit to 1 if only one of two bits is 1"}
    {"~	NOT	Inverts all the bits"}
    {"<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off"}
    {">>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off"}
    {">>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off"}
}

{
    //Converting Decimal to Binary
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
}

{
    //Converting Binary to Decimal
    function bin2dec(bin){
        return parseInt(bin, 2).toString(10);
    }
}