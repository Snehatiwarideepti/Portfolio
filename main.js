document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------
       NAVBAR SCROLL HIGHLIGHT
    ---------------------------------*/
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight - 20;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });

        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
            navbar.style.padding = '0.7rem 0';
        } else {
            navbar.style.background = 'rgba(13, 17, 23, 0.8)';
            navbar.style.padding = '1rem 0';
        }
    });

    /* -------------------------------
       SMOOTH SCROLL
    ---------------------------------*/
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* -------------------------------
       REVEAL ON SCROLL
    ---------------------------------*/
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    /* -------------------------------
       CERTIFICATE MODAL (FIXED)
    ---------------------------------*/
    const modal = document.querySelector('#cert-modal');
    const modalImg = document.getElementById('full-cert-img');
    const captionText = document.getElementById('caption');
    const certs = document.querySelectorAll('.cert-card img, .cert-image-placeholder');

    certs.forEach(cert => {
        cert.addEventListener('click', () => {

            modal.style.display = 'block';

            // Handle both IMG and DIV clicks
            let img = cert.tagName === 'IMG'
                ? cert
                : cert.querySelector('img');

            if (img) {
                modalImg.src = img.src;
                captionText.innerHTML = img.alt || 'Certificate';
            }
        });
    });

    // Close button
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Click outside to close
    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    /* -------------------------------
       MOBILE MENU TOGGLE
    ---------------------------------*/
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

});