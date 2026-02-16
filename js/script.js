// Dark Mode Toggle Functionality
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    localStorage.setItem('mode', mode);
};

// Scroll-based Fade-in Animations
const fadeInElements = () => {
    const elements = document.querySelectorAll('.fade-in');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => observer.observe(element));
};

// Form Handling for the Contact Section
const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const modeToggleBtn = document.getElementById('dark-mode-toggle');
    if (modeToggleBtn) {
        modeToggleBtn.addEventListener('click', toggleDarkMode);
    }
    fadeInElements();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});