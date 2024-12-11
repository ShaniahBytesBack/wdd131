// Theme Toggle Functionality
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    themeIcon.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞'; // Change icon based on mode
});

// Hamburger Menu Toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const nav = document.querySelector('nav');
const mobileNav = nav.querySelector('ul');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav-active');
});

// Handle User Profile Dropdown (Logged In vs Not Logged In)
const userMenu = document.getElementById('user-menu');
const userOptions = document.getElementById('user-options');
const loginLinks = document.getElementById('login-links');

// Check if the user is logged in (for example purposes, using a boolean)
const isLoggedIn = false;  // Change this based on your actual logic for login status

if (isLoggedIn) {
    loginLinks.style.display = 'none';
    userOptions.style.display = 'block';
} else {
    loginLinks.style.display = 'block';
    userOptions.style.display = 'none';
}
