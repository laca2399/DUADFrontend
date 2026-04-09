/*
Cree cuatro promesas, donde cada una resuelve a una de las palabras de la lista 
["very", "dogs", "cute", "are"] respectivamente, en el mismo orden. 
Utilice la combinación de la función setTimeout y Promse.all() para obtener 
la salida "Dogs are very cute" , sin modificar el orden de la lista manualmente o mediante un sort.
*/

function createPromise(word, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(word);
        }, delay);
    });
}

console.log("1. Creating promises");

const p1 = createPromise("very", 3000);
const p2 = createPromise("dogs", 1000);
const p3 = createPromise("cute", 4000);
const p4 = createPromise("are", 2000);

Promise.all([p1, p2, p3, p4])
    .then(function(results) {
        console.log("2. All promises resolved");


        const sentence =
            results[1] + " " +  // dogs
            results[3] + " " +  // are
            results[0] + " " +  // very
            results[2];         // cute

        console.log(sentence);
    });

console.log("3. End of program");