// ===== Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Toggle aria-expanded
            const expanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });
    }

    // ===== Smooth Scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Add active class to current nav link =====
    const currentLocation = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation === linkPath || 
            (currentLocation.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        }
    });
});
