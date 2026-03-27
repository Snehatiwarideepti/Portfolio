// main.js
document.addEventListener('DOMContentLoaded', () => {
    /* -------------------------------
       NAVBAR SCROLL HIGHLIGHT
    ---------------------------------*/
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function removeActive() {
        navLinks.forEach(link => link.classList.remove('active'));
      }
      
      // Click event for smooth scrolling + highlighting
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          removeActive();
          this.classList.add('active');
        });
      });

    function updateActiveNav() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 10; // current scroll + navbar height
        let currentId = sections[0].id; // default to first section
    
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                currentId = section.id; // last section that is above scroll position
            }
        });
    
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        let currentsection = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 120; // adjust offset
          if (window.scrollY >= sectionTop) {
            currentsection = section.getAttribute('id');
          }
        });
      
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + currentsection) {
            link.classList.add('active');
          }
        });
      });

    updateActiveNav();

    /* -------------------------------
       SMOOTH SCROLL FOR NAV LINKS
    ---------------------------------*/
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
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
    revealOnScroll(); // trigger on page load

    /* -------------------------------
       CERTIFICATE MODAL
    ---------------------------------*/
    const modal = document.querySelector('#cert-modal');
    const modalImg = document.getElementById('full-cert-img');
    const captionText = document.getElementById('caption');
    const certs = document.querySelectorAll('.cert-card img, .cert-image-placeholder');

    certs.forEach(cert => {
        cert.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = cert.src || '';
            captionText.innerHTML = cert.alt || 'Certificate';
         });
    });

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

    /* -------------------------------
       OPTIONAL: MENU TOGGLE (MOBILE)
    ---------------------------------*/
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    if(menuToggle){
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
