/*
Cree una función que retorne un usuario del API, tomando su ID como parámetro. 
Si no existe el usuario, debe manejar adecuadamente el código 404 retornado, 
y retornar un mensaje de error.
*/

import axios from "axios";

const getUserById = async (id) => {
    try {
        const response = await axios.get(
            `https://api.restful-api.dev/objects/${id}`
        );

        return response.data;

    } catch (error) {

        if (error.response && error.response.status === 404) {
            return "Error: User not found.";
        }

        return "Error when trying to connect.";
    }
};

const result = await getUserById("1555533"); /* Enter user Id to test */
console.log(result);