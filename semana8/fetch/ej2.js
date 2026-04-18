/*
Cree una función que tome por parámetro nombre, correo, contraseña y dirección, 
y cree un usuario con el endpoint POST de la documentación brindada.
*/

const createUser = async (name, email, password, address) => {
    const data = {
        name,
        email,
        password,
        address
    };

    const response = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
};

await createUser(
    "Ricardo",
    "ricardo23@gmail.com",
    "abc123",
    "Rio de Janeiro, Brasil"
);