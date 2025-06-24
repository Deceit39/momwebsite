document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

    // Close nav when a link is clicked (on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 600 && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Active Navigation Link Logic
    const currentUrl = window.location.href;
    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});
