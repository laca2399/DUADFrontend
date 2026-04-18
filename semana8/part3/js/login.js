/* If already logged in */
const currentUser = localStorage.getItem("user");

if (currentUser) {
    window.location.href = "profile.html";
}

/* Get user by ID */
const getUserById = async (id) => {
    const response = await axios.get(
        `https://api.restful-api.dev/objects/${id}`
    );

    return response.data;
};

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    try {
        const user = await getUserById(id);

        if (!user.data?.password) {
            alert("This user has no password.");
            return;
        }

        if (user.data.password !== password) {
            alert("Incorrect password.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));

        alert("Login successful!");

        window.location.href = "profile.html";

    } catch (error) {
        alert("User does not exist.");
    }
});