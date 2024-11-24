// Show Main Page After Login
function login() {
    document.getElementById("login-page").classList.add("d-none");
    document.getElementById("main-page").classList.remove("d-none");
}

// Show Specific Form
function showForm(formId) {
    const forms = document.querySelectorAll(".ticket-form");
    forms.forEach((form) => form.classList.add("d-none"));
    document.getElementById(`form-${formId}`).classList.remove("d-none");
}

// Confirmation Message
function confirmBooking(type) {
    alert(`Tiket ${type} berhasil dipesan!`);
}
