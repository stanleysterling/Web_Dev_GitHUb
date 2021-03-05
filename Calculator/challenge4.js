/*
Create a simple calculator that can add, subtract, multiply, and divide two numbers

1. Have two inputs for the user to put in 2 numbers
2. When an operation (+, -, *, /) is pushed, the 2 numbers are stored in variables
3. Perform addition, subtraction, multiplication, and division on the numbers
4. Display the sum, difference, product, and quotient of the two numbers
    -  You will need a display area on your page

CHALLENGE:
- When dividing, display the answer as a whole number quotient with remainder (no decimals)

HINT: you will need Modulus %

*/

let numberOne
let numberTwo
var numbers = /[0-9]/

function setIntOne() {
    numberOne = document.getElementById("numberone").value
    if(!numberOne.match(numbers)) {
        alert()
    }
    numberOne = parseInt(numberOne)
    return numberOne
}

function setIntTwo() {
    numberTwo = document.getElementById("numbertwo").value
    if(!numberTwo.match(numbers)) {
        alert()
    }
    numberTwo = parseInt(numberTwo)
    return numberTwo
}

function addition() {
    // document.getElementById("display").value = null
    document.getElementById("display").innerHTML = setIntOne() + setIntTwo()
}

function subtraction() {
    document.getElementById("display").innerHTML = setIntOne() - setIntTwo()
}

function multiplication() {
    document.getElementById("display").innerHTML = setIntOne() * setIntTwo()
}

function division() {
    let quotient = setIntOne() / setIntTwo()
    quotient = parseInt(quotient)
    let remainder = setIntOne() % setIntTwo()
    document.getElementById("display").innerHTML = `${quotient} ... ${remainder}`
}


//snackbar
function alert() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
}

function alert2() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
}

// function allnumeric(inputText) {
//     var numbers = /^[0-9]/
//     if(!inputText.value.match(numbers)) {
//         alert()
//     }
// }