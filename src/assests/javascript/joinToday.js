document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const container = document.querySelector('.containers');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {};

        const firstNameInput = form.querySelector('input[type="text"][placeholder=" John"]');
        const lastNameInput = form.querySelector('input[type="text"][placeholder=" Smith"]');
        const ageInput = form.querySelector('input[type="number"][placeholder=" 12"]');
        const emailInput = form.querySelector('input[type="email"][placeholder=" johnsmith@gmail.com"]');
        const addressInput = form.querySelector('input[type="text"][placeholder="123 Main Street, Sydney, NSW 2000"]');
        const phoneInput = form.querySelector('input[type="tel"][placeholder=" +(02) 1234 5678"]');
        const genderInput = form.querySelector('input[name="gender"]:checked');

        // Validation
        const errors = [];

        if (!firstNameInput.value.trim()) {
            errors.push("First name is required");
        }
        if (!lastNameInput.value.trim()) {
            errors.push("Last name is required");
        }
        if (!ageInput.value.trim()) {
            errors.push("Age is required");
        } else if (isNaN(ageInput.value) || parseInt(ageInput.value) < 1) {
            errors.push("Age must be a positive number");
        }
        if (!emailInput.value.trim()) {
            errors.push("Email is required");
        } else if (!isValidEmail(emailInput.value)) {
            errors.push("Invalid email address");
        }
        if (!phoneInput.value.trim()) {
            errors.push("Phone number is required");
        } else if (!isValidPhoneNumber(phoneInput.value)) {
            errors.push("Invalid phone number format. Please enter a valid Australian phone number.");
        }

        if (errors.length > 0) {
            // Display error messages
            swal({
                title: "Error!",
                text: errors.join("\n"),
                icon: "warning",
            });
            return; // Prevent form submission if there are errors
        }

        // SweetAlert message for success
        swal({
            title: "Great!",
            text: "Your information has been submitted!",
            icon: "success",
        });
        form.reset();
    });
});

// Function to validate email address
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate Australian phone number
function isValidPhoneNumber(phoneNumber) {
    // Australian phone number regex (matches formats: (02) 1234 5678, 02 1234 5678, +61 2 1234 5678)
    const phoneRegex = /^(\(0[1-9]\)|0[1-9])\s?\d{4}\s?\d{4}$/;
    return phoneRegex.test(phoneNumber);
}
