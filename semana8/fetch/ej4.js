/*
Cree una función que actualice la dirección de un usuario, tomando como parámetros su ID y la nueva dirección.
*/

const updateUserAddress = async (id, newAddress) => {
    try {
        const response = await fetch(`https://api.restful-api.dev/objects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address: newAddress
            })
        });

        if (response.status === 404) {
            return "Error: User not found.";
        }

        if (!response.ok) {
            return `Error: ${response.status}`;
        }

        const result = await response.json();
        return result;

    } catch (error) {
        return "Error when attempting connection.";
    }
};

const updatedUser = await updateUserAddress(
    "1", /* Enter Id to test */
    "San José, Costa Rica" /*new desired address*/
);

console.log(updatedUser);