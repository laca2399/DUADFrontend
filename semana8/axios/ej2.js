/*
Cree una función que tome por parámetro nombre, correo, contraseña y dirección, 
y cree un usuario con el endpoint POST de la documentación brindada.
*/

import axios from "axios";

const createUser = async (name, email, password, address) => {
    const data = {
        name,
        email,
        password,
        address
    };

    const response = await axios.post(
        "https://api.restful-api.dev/objects",
        data
    );

    console.log(response.data);
};

await createUser(
    "Ricardo",
    "ricardo23@gmail.com",
    "abc123",
    "Rio de Janeiro, Brasil"
);