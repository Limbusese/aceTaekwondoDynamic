document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const container = document.querySelector('.containers');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {};

        const firstNameInput = form.querySelector('input[type="text"][placeholder="E.g: John"]');
        const lastNameInput = form.querySelector('input[type="text"][placeholder="E.g: Smith"]');
        const ageInput = form.querySelector('input[type="number"][placeholder="E.g: 12"]');
        const emailInput = form.querySelector('input[type="email"][placeholder="E.g: johnsmith@gmail.com"]');
        const addressInput = form.querySelector('input[type="text"][placeholder="E.g: 123 Main Street, Sydney, NSW 2000"]');
        const phoneInput = form.querySelector('input[type="tel"][placeholder="E.g: (02) 1234 5678"]');
        const genderInput = form.querySelector('input[name="gender"]:checked');

        console.log(firstNameInput.value);
        console.log(lastNameInput.value);
        console.log(ageInput.value);
        console.log(emailInput.value);
        console.log(addressInput.value);
        console.log(phoneInput.value);
        console.log(genderInput ? genderInput.value : null);

        if (firstNameInput) formData.firstName = firstNameInput.value;
        if (lastNameInput) formData.lastName = lastNameInput.value;
        if (ageInput) formData.age = ageInput.value;
        if (emailInput) formData.email = emailInput.value;
        if (addressInput) formData.address = addressInput.value;
        if (phoneInput) formData.phone = phoneInput.value;
        if (genderInput) {
            const genderLabel = document.querySelector(`label[for="${genderInput.id}"]`);
            formData.gender = genderLabel.textContent.trim();
        }

        console.log(Object.keys(formData).length);

        if (Object.keys(formData).length === 7) {
            // SweetAlert message instead of xhr
            setTimeout(() => {
                swal({
                    title: "Great!",
                    text: "You information have been submitted!",
                    icon: "success",
                });
                form.reset();
            }, 600);
        } else {
            // SweetAlert message for error
            setTimeout(() => {
                swal({
                    title: "Error!",
                    text: "Please fill all form fields!",
                    icon: "warning",
                });
            }, 400);
        }
    });
});
