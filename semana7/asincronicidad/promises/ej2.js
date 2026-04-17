/*
Realice el mismo ejercicio anterior utilizando la función Promse.any() 
para mostrar el nombre del primer pokemón que esté contenido en la primera promesa que se resuelva.
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

Promise.any([p1, p2, p3])
    .then(function(result) {
        console.log("2. First response received");

        console.log("Pokémon name:");
        console.log(result.name);
    })
    .catch(function(error) {
        console.log("Error: All promises failed");
    });

console.log("3. End of program");