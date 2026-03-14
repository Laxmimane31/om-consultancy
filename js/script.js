// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    if (parallax && scrollPosition < window.innerHeight) {
        parallax.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
let hasCounted = false;

const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps

        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 16);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
    hasCounted = true;
};

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('active');
        
        // Trigger counter when trust section is revealed
        if (entry.target.classList.contains('stat-item') && !hasCounted) {
            startCounters();
        }
        
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Form is now handled by FormSubmit.co natively via HTML action.

// =========================================
// PREMIUM UPGRADES SCRIPT
// =========================================

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => { preloader.style.display = 'none'; }, 600);
        }, 800); // slight minimal delay for premium feel
    }
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

