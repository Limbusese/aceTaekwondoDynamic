document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const container = document.querySelector('.containers');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {};

        // Query DOM for each input element individually
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

        // Send data to PHP file using AJAX if all fields are filled
        if (Object.keys(formData).length === 7) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'joinToday.php', true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log('Data sent successfully');
                    const successMessage = document.createElement('div');
                    successMessage.textContent = "Great! Your Information Is Submitted.";
                    successMessage.classList.add('success-message');

                    container.appendChild(successMessage);

                    setTimeout(() => {
                        successMessage.remove();
                        form.reset();
                    }, 2000);
                } else {
                    console.log('Error sending data');
                
                }
            };

            xhr.send(JSON.stringify(formData));
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.textContent = "Error!! Please Fill All Form Fields.";
            errorMessage.classList.add('error-message'); 

            container.appendChild(errorMessage);

            setTimeout(() => {
                errorMessage.remove();
            }, 2000);
        }
    });
});
