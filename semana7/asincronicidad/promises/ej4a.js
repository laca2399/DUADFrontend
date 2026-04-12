/*
repita los ejercicios 1 y 2 de la sección de Async/Await resolviéndolos con las 
funciones .then(), .catch() y .finally() de ser requerido.

EJ1: Realice un programa que utilice la función fetch para solicitar un usuario del API anterior (API de prueba https://reqres.in/) 
El URL debe ser [https://reqres.in/api/users/](https://reqres.in/api/users/2)2. 
Al finalizar la solicitud, imprima los datos del usuario en pantalla.
*/

function getUser() {
    console.log("1. Sending request");

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function(response) {
            console.log("2. Response received");
            return response.json();
        })
        .then(function(user) {
            console.log("User data:");
            console.log("ID:", user.id);
            console.log("Name:", user.name);
            console.log("Email:", user.email);
        })
        .catch(function(error) {
            console.log("Error:", error);
        })
        .finally(function() {
            console.log("3. Finished");
        });
}

getUser();

console.log("4. End of program");