
const createUser = async (name, email, password, address) => {
    const response = await axios.post(
        "https://api.restful-api.dev/objects",
        {
            name: name,
            data: {
                email: email,
                password: password,
                address: address
            }
        }
    );

    return response.data;
};

/* To Keep session active after refresh or browser close */
const currentUser = localStorage.getItem("user");

if (currentUser) {
    window.location.href = "profile.html";
}

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;

    try {
        const user = await createUser(name, email, password, address);

        localStorage.setItem("user", JSON.stringify(user));

        alert(`User created successfully! Your id is ${user.id}`);

        window.location.href = "profile.html";

    } catch (error) {
        alert("There was an error creating the user.");
    }
});