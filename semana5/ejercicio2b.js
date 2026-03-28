//2. Realiza un programa que recorra una lista de números y almacene todos los pares en otra lista
    //1. Para este ejercicio intenta hacer una solución con un `for` y otra utilizando la función `filter`

//Usando filter
const listExample = [1,2,3,4,5,6];

const evenNumbers = listExample.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);