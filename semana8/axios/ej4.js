/*
Cree una función que actualice la dirección de un usuario, tomando como parámetros su ID y la nueva dirección.
*/

import axios from "axios";

const updateUserAddress = async (id, newAddress) => {
    try {
        const response = await axios.patch(
            `https://api.restful-api.dev/objects/${id}`,
            {
                address: newAddress
            }
        );

        return response.data;

    } catch (error) {

        if (error.response && error.response.status === 404) {
            return "Error: User not found.";
        }

        return "Error when attempting connection.";
    }
};

const updatedUser = await updateUserAddress(
    "1", /* Enter Id to test */
    "San José, Costa Rica" /* new desired address */
);

console.log(updatedUser);