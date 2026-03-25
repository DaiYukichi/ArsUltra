import { initNavbar } from '../components/navbar';
import { initFooter } from '../components/footer';
import { getCurrentLang, translations } from '../core/translations';
import { CapabilityCard } from '../components/ui';
import { capabilities } from '../data/capabilities';

/**
 * INNOVATION PAGE LOGIC
 * Renders technical capabilities using modular components and centralized data.
 */

const lang = getCurrentLang();
const t = translations.innovation;

function renderCapabilities() {
    const container = document.querySelector('#capabilities-grid');
    if (!container) return;

    container.innerHTML = capabilities.map(cap => CapabilityCard(cap)).join('');

    // Static translations for headings
    const selectors = {
        '.capabilities-title': t.capabilities[lang],
        '.excellence-title': t.excellence[lang],
        '.innovation-tagline': t.tagline[lang],
        '.innovation-desc': t.description[lang]
    };

    Object.entries(selectors).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        initNavbar();
        initFooter();
        renderCapabilities();
    });
}
