// target myButton idto access my <button> tag in my code
var button = document.getElementById("myButton");
// ONCLICK EVENT to make my page respond when the defined event is triggered
// code to display a message when the button is clicked:
// [attach a function to the click event]:
button.onclick = function () {
    alert("clicked!");
}