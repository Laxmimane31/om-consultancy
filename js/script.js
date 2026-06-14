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
        if (entry.target.classList.contains('trust-card') && !hasCounted) {
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




// =========================================
// LEADERSHIP TEAM DATA & MODAL LOGIC
// =========================================

const teamData = {
    dhaivat: {
        name: "Dhaivat Kirtan Desai",
        position: "Founder & Proprietor",
        company: "Om Consultancy",
        icon: "fas fa-user-tie",
        badgeClass: "badge-om",
        photo: "assets/images/avatar-placeholder.svg",
        quote: "Building Trust Through Excellence in Project Management.",
        bio: [
            "With over 14 years of professional experience in the construction and project management industry, Dhaivat Kirtan Desai is the Founder of Om Consultancy, a firm dedicated to delivering efficient, reliable, and value-driven project management solutions.",
            "After completing his Bachelor of Civil Engineering, Dhaivat pursued his vision of establishing a consultancy that would bridge technical expertise with practical project execution. This dream led to the inception of Om Consultancy, which has since grown into a trusted name in project management and construction consultancy.",
            "Over the years, he has successfully managed and contributed to a diverse portfolio of projects across multiple sectors. His expertise spans project planning, construction management, quality control, cost management, coordination with stakeholders, and ensuring timely project delivery.",
            "Known for his commitment to excellence, attention to detail, and client-centric approach, Dhaivat has consistently helped clients transform concepts into successful, sustainable developments, driven by the principles of integrity, quality, innovation, and customer satisfaction."
        ]
    },
    jay: {
        name: "Jay Trivedi",
        position: "Partner",
        company: "Stallion Structures",
        icon: "fas fa-drafting-compass",
        badgeClass: "badge-stallion",
        photo: "assets/images/avatar-placeholder.svg",
        quote: "",
        bio: [
            "With a strong foundation in structural engineering and over a decade of industry experience, Jay Trivedi partnered Stallion Structures with a clear vision: to deliver engineering solutions that balance safety, efficiency, and innovation.",
            "Having spent ten years in the post-tension sector and served as a Design Manager, he developed extensive expertise in optimizing structural performance and collaborating with construction professionals on complex projects.",
            "Today, through Stallion Structures, Jay leads a team dedicated to advanced RCC and steel design, helping clients transform ambitious concepts into enduring structures."
        ]
    },
    yash: {
        name: "Yash Suthar",
        position: "Partner",
        company: "Stallion Structures",
        icon: "fas fa-globe-americas",
        badgeClass: "badge-stallion",
        photo: "assets/images/avatar-placeholder.svg",
        quote: "",
        bio: [
            "With more than 16 years of experience in structural engineering, Yash Suthar is a driving force behind Stallion Structures' commitment to technical excellence and innovation.",
            "His expertise spans diverse sectors including Oil & Gas, Petrochemical, Power, Process Industries, High-Rise Buildings, and Industrial Infrastructure.",
            "Having worked on projects across India, the UK, USA, Australia, and Europe, Yash combines global engineering standards with practical design solutions.",
            "His leadership, deep technical knowledge, and dedication to quality enable Stallion Structures to deliver safe, efficient, and future-ready structural engineering solutions for clients worldwide."
        ]
    },
    jinit: {
        name: "Jinit Shah",
        position: "Partner",
        company: "Om Consultancy",
        icon: "fas fa-chart-line",
        badgeClass: "badge-om",
        photo: "assets/images/avatar-placeholder.svg",
        quote: "",
        bio: [
            "With more than a decade of experience across construction, infrastructure, and project management, Jinit Shah brings a unique combination of engineering expertise and strategic business leadership to Om Consultancy.",
            "His career has encompassed project execution, infrastructure development, business growth, and material supply solutions for some of the industry's most demanding projects.",
            "As a Partner, Jinit is dedicated to delivering seamless project execution, fostering strong client relationships, and ensuring every project is guided by quality, efficiency, and long-term value."
        ]
    },
    kantilal: {
        name: "Kantilal Savsani",
        position: "Partner",
        company: "Om Consultancy",
        icon: "fas fa-calculator",
        badgeClass: "badge-om",
        photo: "assets/images/avatar-placeholder.svg",
        quote: "",
        bio: [
            "With more than 15 years of experience in the construction sector, Kantilal Savsani brings exceptional expertise in estimation, budgeting, and cost control to Om Consultancy.",
            "His strategic approach to project costing and financial management helps clients optimize resources, control expenditures, and maximize project value.",
            "As a Partner, he plays a vital role in ensuring that every project is supported by accurate planning, sound financial oversight, and a commitment to operational excellence."
        ]
    }
};

const bioModal = document.getElementById('bioModal');
const modalOverlay = bioModal ? bioModal.querySelector('.modal-overlay') : null;
const modalClose = bioModal ? bioModal.querySelector('.modal-close') : null;
const modalContent = bioModal ? bioModal.querySelector('.modal-content') : null;
let lastFocusedElement = null;

const openModal = (memberKey, triggerBtn) => {
    if (!bioModal || !modalContent) return;
    
    const data = teamData[memberKey];
    if (!data) return;

    lastFocusedElement = triggerBtn;

    // Build the dynamic content
    let bioHTML = `
        <div class="modal-bio-header">
            <img src="${data.photo}" alt="${data.name}" class="modal-bio-photo">
            <div class="modal-bio-meta">
                <h3 class="modal-bio-name">${data.name}</h3>
                <div class="modal-bio-title">
                    <i class="${data.icon} text-accent"></i>
                    <span>${data.position}</span>
                </div>
                <div class="team-company ${data.badgeClass}">${data.company}</div>
                <div class="modal-bio-social" style="margin-top: 5px;">
                    <a href="#" class="social-icon" style="width: 32px; height: 32px; font-size: 1rem; display: inline-flex;" aria-label="LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="modal-bio-body">
    `;

    if (data.quote) {
        bioHTML += `<blockquote class="modal-bio-quote">"${data.quote}"</blockquote>`;
    }

    data.bio.forEach(pText => {
        bioHTML += `<p>${pText}</p>`;
    });

    bioHTML += `</div>`;

    modalContent.innerHTML = bioHTML;
    
    // Show Modal
    bioModal.classList.add('active');
    document.body.classList.add('modal-open');
    bioModal.setAttribute('aria-hidden', 'false');
    
    // Set focus to Close Button inside modal
    if (modalClose) {
        setTimeout(() => modalClose.focus(), 100);
    }
};

const closeModal = () => {
    if (!bioModal) return;
    bioModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    bioModal.setAttribute('aria-hidden', 'true');
    
    // Restore focus to button
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
};

// Event Listeners
document.querySelectorAll('.read-bio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const memberKey = btn.getAttribute('data-member');
        openModal(memberKey, btn);
    });
});

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Escape key listener to close modal
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bioModal && bioModal.classList.contains('active')) {
        closeModal();
    }
});

// Focus trap inside Modal
if (bioModal) {
    bioModal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        const focusableElements = bioModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    });
}


// =========================================
// TESTIMONIALS HORIZONTAL SLIDER CONTROLS
// =========================================
const testimonialSlider = document.getElementById('testimonialSlider');
const prevTestimonialBtn = document.getElementById('prevTestimonial');
const nextTestimonialBtn = document.getElementById('nextTestimonial');

if (testimonialSlider && prevTestimonialBtn && nextTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => {
        const firstCard = testimonialSlider.querySelector('.testimonial-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 30; // matches css gap
            testimonialSlider.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    });

    nextTestimonialBtn.addEventListener('click', () => {
        const firstCard = testimonialSlider.querySelector('.testimonial-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 30; // matches css gap
            testimonialSlider.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
        }
    });
}
