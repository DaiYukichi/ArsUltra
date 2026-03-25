import { initNavbar } from '../components/navbar';
import { initFooter } from '../components/footer';
import { getCurrentLang, translations } from '../core/translations';

/**
 * CONTACT PAGE LOGIC
 * Handles localized form rendering and submission simulation.
 */

const lang = getCurrentLang();
const t = translations.contact;

function renderContact() {
    const selectors = {
        '.contact-status': t.status[lang],
        '.contact-title': t.title[lang],
        '.contact-desc': t.desc[lang],
        '.transmit-text': t.transmit[lang],
        '.location-title': t.location[lang],
        '.channels-title': t.channels[lang]
    };

    Object.entries(selectors).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });

    // Label translations
    const labels = document.querySelectorAll('label.contact-label');
    labels.forEach((label, idx) => {
        if (idx === 0) label.textContent = t.origin[lang];
        if (idx === 1) label.textContent = t.signal[lang];
        if (idx === 2) label.textContent = t.payload[lang];
    });

    // Placeholder translations
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input, idx) => {
        if (idx === 0) input.setAttribute('placeholder', lang === 'es' ? 'Nombre del Operador' : 'Operator Name');
        if (idx === 1) input.setAttribute('placeholder', 'comm-channel@domain.com');
        if (idx === 2) input.setAttribute('placeholder', lang === 'es' ? 'Contenido del mensaje...' : 'Message content...');
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        initNavbar();
        initFooter();
        renderContact();
        
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const lang = getCurrentLang();
                alert(lang === 'es' 
                    ? 'Gracias por su consulta. Este es un prototipo, por lo que el formulario aún no está conectado a un servidor.' 
                    : 'Thank you for your inquiry. This is a prototype, so the form is not yet connected to a backend.');
            });
        }
    });
}
