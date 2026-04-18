/* Requirement 1 */
const currentUser = localStorage.getItem("user");

if (!currentUser) {
    window.location.href = "login.html";
}

const savedUser = JSON.parse(currentUser);

/* Request to API */
const getUserById = async (id) => {
    const response = await axios.get(
        `https://api.restful-api.dev/objects/${id}`
    );

    return response.data;
};

const loadProfile = async () => {
    try {
        const user = await getUserById(savedUser.id);

        const container = document.getElementById("profileContainer");


        container.innerHTML = `
            <div class="card">
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name || "Not available"}</p>
                <p><strong>Email:</strong> ${user.data?.email || "Not available"}</p>
                <p><strong>Address:</strong> ${user.data?.address || "Not available"}</p>
                <button id="logoutButton">Log Out</button>
            </div>
        `;

        document
            .getElementById("logoutButton")
            .addEventListener("click", () => {
                localStorage.removeItem("user");
                window.location.href = "login.html";
            });

    } catch (error) {
        alert("Error loading profile.");
    }
};

loadProfile();