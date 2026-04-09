/*
Realice el mismo ejercicio al 1, pero con el URL https://reqres.in/api/users/23 para generar un error. 
Realice el manejo de error adecuado e imprima un mensaje de error indicando que el usuario no se encontró.
*/

async function getUser() {
    console.log("1. Sending request");

    try {
        const response = await fetch("https://reqres.in/api/users/23");
        console.log("2. Response received");

        
        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        const user = data.data;

        console.log("User data:");
        console.log("ID:", user.id);
        console.log("Name:", user.first_name, user.last_name);
        console.log("Email:", user.email);

    } catch (error) {
        console.log("Error:", error.message);
    }

    console.log("3. Finished");
}

getUser();

console.log("4. End of program");