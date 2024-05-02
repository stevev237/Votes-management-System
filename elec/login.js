
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const registrationNumber = form.elements['registration_number'].value;
        const password = form.elements['password'].value;
        let errorMessage = '';

        if (!registrationNumber || !password) {
            errorMessage = 'Please enter both registration number and password.';
        }

        if (errorMessage) {
            event.preventDefault(); // Prevent form submission
            const errorElement = document.querySelector('.error-message');
            errorElement.textContent = errorMessage;
        }
    });
});
