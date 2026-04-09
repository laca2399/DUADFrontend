/*Realice un programa que utilice la función fetch para solicitar un usuario del API anterior (API de prueba https://reqres.in/)
El URL debe ser [https://reqres.in/api/users/](https://reqres.in/api/users/2)2. 
Al finalizar la solicitud, imprima los datos del usuario en pantalla.*/

async function getUser() {
    console.log("1. Sending request");

    try {
        const response = await fetch("https://reqres.in/api/users/2");
        console.log("2. Response received");

        const user = await response.json();

        console.log("User data:");
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Email:", user.email);

    } catch (error) {
        console.log("Error:", error);
    }

    console.log("3. Finished");
}

getUser();

console.log("4. End of program");