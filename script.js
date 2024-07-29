// Event listener for password toggle
document.querySelector('.toggle-password').addEventListener('click', togglePassword);

// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    document.querySelector('.toggle-password').textContent = type === 'password' ? 'Show' : 'Hide';
}

// Function to handle login
function login(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with more complex validation or API call as needed)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
        alert('Invalid username or password.');
    }
}

// Function to handle logout (for use in dashboard page)
function logout() {
    window.location.href = 'index.html'; // Redirect back to login page
}
