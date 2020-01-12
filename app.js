// target myButton idto access my <button> tag in my code
var button = document.getElementById("myButton");
// ONCLICK EVENT to make my page respond when the defined event is triggered
// code to display a message when the button is clicked:
// [attach a function to the click event]:
                // button.onclick = function () {
                //     alert("clicked!");
                // }
var myNum = 0;
button.onclick = function () {
    myNum++;
    alert("You clicked " + myNum + " times.");
}

// READING VALUES: print user input in the console
// grab reference to Enter button:
var button = document.getElementById("submit");
// attach onclick event to button & construct function using .value method:
button.onclick = function () {
    // store user input value in a variable:
    var passInput = document.getElementById("password").value;
    // console.log the variable:
    alert(passInput);
}

// ANALYZING INPUTS:
// grab reference to button & store it in a variable:
var button2 = document.getElementById("submit2");
// store expected password in a variable:
var expectedPass = "lucero";
// attach onclick event to button & construct function:
button2.onclick = function () {
    // store user input value in a variable:
    var passInput2 = document.getElementById("password2").value;
    // use if/else statement to compare if user input is the same as the expected password:
    if (passInput2 === expectedPass) {
        return alert("Correct password!");
    }
    else {
        return alert("Incorrect password 👎");
    }
}
    
