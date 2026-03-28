//2. Realiza un programa que recorra una lista de números y almacene todos los pares en otra lista
    //1. Para este ejercicio intenta hacer una solución con un `for` y otra utilizando la función `filter`

//Usando for
const listExample = [1,2,3,4,5,6];
const evenNumbers = [];

for (let i = 0; i < listExample.length; i++) {
    if (listExample[i] % 2 === 0) {
        evenNumbers.push(listExample[i]);
    }
}

console.log(evenNumbers);