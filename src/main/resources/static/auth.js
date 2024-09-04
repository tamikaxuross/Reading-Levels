document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            registerUser();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            loginUser();
        });
    }
});

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    users[username] = { password: password };
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (!users[username] || users[username].password !== password) {
        alert('Invalid username or password.');
        return;
    }

    localStorage.setItem('loggedInUser', username);
    alert('Login successful!');
    window.location.href = 'quizzes.html';
}

function getLoggedInUser() {
    return localStorage.getItem('loggedInUser');
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
}
