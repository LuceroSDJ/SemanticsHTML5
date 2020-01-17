// ** Practice Code: Changing Element Values **
// attach HTML elements to variables
var results = document.getElementById("results");
var buttonRandom = document.getElementById("getNum");
var reset = document.getElementById("reset");

// create epty array to store randomly generated numbers
var listNum = [];
// onclick event
buttonRandom.onclick = function () {
    // Math.random(genrates a random number from 0 to 1) & Math.random
    var newNum = Math.round(Math.random() * 20);
    // only push the first 3 numbers into the empty Array
    if (listNum.length < 3) {
        listNum.push(newNum);
        // display results
        results.innerHTML = listNum;
    }
}

// resetting
reset.onclick = function () {
    listNum = [];
    results.innerHTML = listNum;
}
