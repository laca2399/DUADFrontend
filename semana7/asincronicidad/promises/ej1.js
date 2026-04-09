/*
API: https://pokeapi.co/.
Utilice el API https://pokeapi.co/api/v2/pokemon/:ID para solicitar 3 distintos pokemónes. 
Utilice la función Promise.all() para mostrar en pantalla el nombre de los tres pokemónes al mismo tiempo, 
hasta que todas las promesas se resuelvan.
*/

function getPokemon(id) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function(response) {
            return response.json();
        });
}

console.log("1. Sending requests");

const p1 = getPokemon(1);
const p2 = getPokemon(4);
const p3 = getPokemon(7);

Promise.all([p1, p2, p3])
    .then(function(results) {
        console.log("2. All responses received");

        console.log("Pokémon names:");
        console.log(results[0].name);
        console.log(results[1].name);
        console.log(results[2].name);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

console.log("3. End of program");