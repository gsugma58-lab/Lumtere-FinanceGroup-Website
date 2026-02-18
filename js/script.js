// Main JavaScript file - shared functionality

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link highlighting
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
        link.classList.add('active');
    } else if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
        if (linkPath === 'index.html' || linkPath === '/') {
            link.classList.add('active');
        }
    }
});