const addDatabaseButton = document.getElementById("add-database-button");
const databaseForm = document.getElementById("database-form");

if (addDatabaseButton) {
    addDatabaseButton.addEventListener("click", () => {

        // Toggle Bootstrap classes to turn from white to red
        addDatabaseButton.classList.toggle("btn-light");
        addDatabaseButton.classList.toggle("btn-danger");

        // Check inner text and change accordingly
        if (addDatabaseButton.innerText === "Add Database") {
            addDatabaseButton.innerText = "Cancel";
        } else {
            addDatabaseButton.innerText = "Add Database";
        }

        // Unfocus the button after pressing
        addDatabaseButton.blur();

        // ----- Dropdown -----

        // Toggle between invisible and visible using Bootstrap class "d-none"
        databaseForm.classList.toggle("active");
    });
}
