/*
Cree una función que retorne un usuario del API, tomando su ID como parámetro. 
Si no existe el usuario, debe manejar adecuadamente el código 404 retornado, 
y retornar un mensaje de error.
*/

const getUserById = async (id) => {
    try {
        const response = await fetch(`https://api.restful-api.dev/objects/${id}`);

        if (response.status === 404) {
            return "Error: User not found.";
        }

        if (!response.ok) {
            return `Error: ${response.status}`;
        }

        const user = await response.json();
        return user;

    } catch (error) {
        return "Error when trying to connect.";
    }
};


const result = await getUserById("1555533"); /*Enter user Id to test*/
console.log(result);