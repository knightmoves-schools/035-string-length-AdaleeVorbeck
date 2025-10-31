let quote = "...ask not what your country can do for you — ask what you can do for your country.";

//Add code below
let quoteLength = quote.length
let twentySecondLetter = quote[21];
let output = quote[length - 1, twentySecondLetter];


document.getElementById("quote-length").innerHTML = quoteLength;
document.getElementById("twenty-second-letter").innerHTML = twentySecondLetter;
document.getElementById("result").innerHTML = output;