document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let currentSlideIndex = 0;

    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(currentSlideIndex);
    }, 4000);
});