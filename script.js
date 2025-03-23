// Initialize dark mode support
console.log('Super Simple Website is running with dark mode support');

function initTheme() {
    try {
        console.log('Initializing theme...');
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        updateButtonText(theme);
        console.log(`Theme initialized: ${theme}`);
    } catch (error) {
        console.error('Error initializing theme:', error);
    }
}

function toggleTheme() {
    try {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonText(newTheme);
        
        console.log(`Theme toggled to: ${newTheme}`);
    } catch (error) {
        console.error('Error toggling theme:', error);
    }
}

function updateButtonText(theme) {
    try {
        const button = document.getElementById('theme-toggle');
        if (button) {
            button.textContent = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
            console.log('Button text updated');
        }
    } catch (error) {
        console.error('Error updating button text:', error);
    }
}

function addThemeToggle() {
    try {
        console.log('Adding theme toggle button...');
        const nav = document.querySelector('.nav-links');
        if (nav) {
            const button = document.createElement('button');
            button.id = 'theme-toggle';
            button.onclick = toggleTheme;
            button.style.marginLeft = '15px';
            nav.appendChild(button);
            updateButtonText(document.documentElement.getAttribute('data-theme'));
            console.log('Theme toggle button added successfully');
        }
    } catch (error) {
        console.error('Error adding theme toggle:', error);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing dark mode support...');
    initTheme();
    addThemeToggle();
});

// Handle form submissions
document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('email-subscription-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing with: ' + email);
            this.reset();
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log('Contact form submission:', { name, email, message });
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});