/* Get user by ID */
const getUserById = async (id) => {
    const response = await axios.get(
        `https://api.restful-api.dev/objects/${id}`
    );

    return response.data;
};

/* Update password */
const updatePassword = async (id, userData, newPassword) => {
    const response = await axios.patch(
        `https://api.restful-api.dev/objects/${id}`,
        {
            data: {
                ...userData,
                password: newPassword
            }
        }
    );

    return response.data;
};

const form = document.getElementById("passwordForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("userId").value.trim();
    const oldPassword =
        document.getElementById("oldPassword").value.trim();

    const newPassword =
        document.getElementById("newPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

    try {
        /* Validation 1: User exists */
        const user = await getUserById(id);

        /* Validation 2: Old password is correct */
        if (user.data.password !== oldPassword) {
            alert("Error: Current password is incorrect.");
            return;
        }

        /* Validation 3: New password matches confirmation */
        if (newPassword !== confirmPassword) {
            alert("Error: New password and confirmation do not match.");
            return;
        }

        /* Extra validation */
        if (newPassword === "") {
            alert("Error: New password cannot be empty.");
            return;
        }

        await updatePassword(id, user.data, newPassword);

        alert("Success: Password updated correctly!");

        form.reset();

    } catch (error) {
        alert("Error: User does not exist.");
    }
});