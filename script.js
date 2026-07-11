// OKStudio - Main Script
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Update copyright year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ---- Mobile navigation ----
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    function setMenuState(isOpen) {
        if (!hamburger || !navMenu) return;
        hamburger.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Toggle menu');
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            setMenuState(!navMenu.classList.contains('active'));
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => setMenuState(false));
    });

    // ---- Smooth scrolling for anchor links (motion-aware) ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
                // Move keyboard focus to the target so in-page links (incl. the skip
                // link to <main>) actually bypass the nav for keyboard/AT users.
                if (target.tabIndex < 0 && !target.hasAttribute('tabindex')) {
                    target.setAttribute('tabindex', '-1');
                }
                target.focus({ preventScroll: true });
            }
        });
    });

    // ---- Navbar scroll effect ----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // ---- Scroll reveal (disabled under reduced motion) ----
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.principle-card, .project-card, .about-content, .contact-content').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    // ---- Accessible contact form ----
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');

    function setFieldError(field, message) {
        const errorEl = document.getElementById(field.getAttribute('aria-describedby'));
        if (message) {
            field.setAttribute('aria-invalid', 'true');
            if (errorEl) {
                errorEl.textContent = message;
                errorEl.hidden = false;
            }
        } else {
            field.removeAttribute('aria-invalid');
            if (errorEl) {
                errorEl.textContent = '';
                errorEl.hidden = true;
            }
        }
    }

    function setStatus(message, type) {
        if (!formStatus) return;
        formStatus.textContent = message;
        formStatus.classList.remove('is-error', 'is-success');
        if (type) formStatus.classList.add(type === 'error' ? 'is-error' : 'is-success');
    }

    if (contactForm) {
        const fields = {
            name: contactForm.querySelector('#name'),
            email: contactForm.querySelector('#email'),
            message: contactForm.querySelector('#message')
        };

        // Clear a field's error as the user corrects it
        Object.values(fields).forEach(field => {
            if (field) field.addEventListener('input', () => setFieldError(field, ''));
        });

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let firstInvalid = null;

            const checks = [
                { field: fields.name, valid: () => fields.name.value.trim() !== '', message: 'Please enter your name.' },
                { field: fields.email, valid: () => emailRe.test(fields.email.value.trim()), message: fields.email.value.trim() === '' ? 'Please enter your email.' : 'Please enter a valid email address, for example name@example.com.' },
                { field: fields.message, valid: () => fields.message.value.trim() !== '', message: 'Please enter a message.' }
            ];

            checks.forEach(({ field, valid, message }) => {
                if (!field) return;
                if (valid()) {
                    setFieldError(field, '');
                } else {
                    setFieldError(field, message);
                    if (!firstInvalid) firstInvalid = field;
                }
            });

            if (firstInvalid) {
                setStatus('Please fix the highlighted fields and try again.', 'error');
                firstInvalid.focus();
                return;
            }

            // Submit to Netlify
            const formData = new FormData(this);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
                .then(() => {
                    setStatus('Sent, thanks. I\'ll get back to you soon.', 'success');
                    this.reset();
                })
                .catch((error) => {
                    setStatus('Error: something went wrong sending your message. Please try again, or reach out via the GitHub or LinkedIn links below.', 'error');
                    console.error('Form error:', error);
                });
        });
    }

    // ---- Escape closes the mobile menu ----
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenuState(false);
    });

    // ---- Page load fade (skipped under reduced motion) ----
    if (!prefersReducedMotion) {
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.4s ease';
            requestAnimationFrame(() => {
                document.body.style.opacity = '1';
            });
        });
    }
});
