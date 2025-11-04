let quote = "...ask not what your country can do for you — ask what you can do for your country.";

//Add code below
let quoteLength = quote.length;
let twentySecondLetter = quote[21];
let output = quote `The length of quote is ${quoteLength}, the twenty second letter is [${twentySecondLetter}]`;

document.getElementById("result").innerHTML = output;