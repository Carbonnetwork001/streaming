function validateRegistration() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform basic validation (you can add more checks as needed)
    if (username && email && password) {
        alert('Registration successful!');
        // Add code to submit the form or perform other actions after successful registration
    } else {
        alert('Please fill in all the fields.');
    }
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check hardcoded credentials (for demonstration purposes)
    if (username === 'demo' && password === 'demo') {
        alert('Login successful!');
        // Add redirect or other actions after successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
}