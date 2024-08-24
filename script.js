const langSelect = document.getElementById('langSelect');
let currentLang = 'en';

langSelect.addEventListener('change', (event) => {
    currentLang = event.target.value;
    loadLanguage(currentLang);
});

function loadLanguage(lang) {
    fetch(`/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            updateContent(data);
        })
        .catch(error => console.error('Error loading language file:', error));
}

function updateContent(langData) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (key.includes('.')) {
            const [section, subKey] = key.split('.');
            element.textContent = langData[section][subKey];
        } else {
            element.textContent = langData[key];
        }
    });
}

// Load default language
loadLanguage(currentLang);

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData.entries());
        console.log('Form submitted:', formObject);
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}