// Get a reference to the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Smooth scrolling when clicking on navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Example: Change the header text when the page loads
window.addEventListener('load', () => {
    const header = document.querySelector('header h1');
    header.textContent = "Welcome to Beautiful Nevada";
});

// Example: Toggle a dark mode theme
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}
