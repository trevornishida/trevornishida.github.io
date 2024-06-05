document.addEventListener("DOMContentLoaded", function() {
    // Navbar dropdown toggle
    const dropbtn = document.querySelector(".dropbtn");
    const dropdown = document.getElementById("dropdown");

    dropbtn.addEventListener("click", function() {
        dropdown.classList.toggle("show");
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });

    // Light/Dark mode toggle
    const themeSwitch = document.getElementById("theme-switch-checkbox");
    const body = document.body;

    themeSwitch.addEventListener("change", function() {
        if (this.checked) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    });

    // Project card flip
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('is-flipped');
        });
    });

    // Fade-in sections on scroll
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('arrow').addEventListener('click', function() {
    // Get the next section
    const nextSection = document.querySelector('header').nextElementSibling;
    // Scroll to the next section with a slower scroll
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});
