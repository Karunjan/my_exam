document.querySelector('.toggle-password').addEventListener('click', togglePassword);

function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    document.querySelector('.toggle-password').textContent = type === 'password' ? 'Show' : 'Hide';
}

function login(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with more complex validation or an API call)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard-page').style.display = 'flex';
        loadChart();
    } else {
        alert('Invalid username or password.');
    }
}



function logout() {
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('dashboard-page').style.display = 'none';
}
