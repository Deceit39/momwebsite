document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    function toggleNav() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
    }

    if (hamburger && nav) {
        hamburger.addEventListener('click', toggleNav);
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleNav();
            }
        });
    }

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            toggleNav();
        }
    });

    // Close nav when a link is clicked (on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 600 && nav.classList.contains('active')) {
                toggleNav();
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
