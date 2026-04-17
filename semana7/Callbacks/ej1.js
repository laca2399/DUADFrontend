/*
1. Cree una función que reciba tres parámetros: un número y dos funciones de callback.
    1. Si el número es par, se debe ejecutar el primer callback.
        1. Este debe mostrar “The number is even!”.
    2. Si el número es impar, se debe ejecutar el segundo.
        1. Este debe mostrar “The number is odd!”.
*/

function checkNumber(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

function showEven() {
    console.log("The number is even!");
}

function showOdd() {
    console.log("The number is odd!");
}

checkNumber(4, showEven, showOdd);
checkNumber(5, showEven, showOdd);