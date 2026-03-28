//Toma una lista de temperaturas en grados celsius y conviertala a farenheit utilizando la función map
const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map(
    (temp) => {
        return (temp * 9/5) + 32;
    }
);

console.log(fahrenheit);