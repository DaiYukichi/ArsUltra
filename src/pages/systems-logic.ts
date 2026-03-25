import { initNavbar } from '../components/navbar';
import { initFooter } from '../components/footer';
import { getCurrentLang, translations, type Language } from '../core/translations';
import { ProductCard } from '../components/ui';
import { getProducts } from '../data/systems';

/**
 * SYSTEMS PAGE LOGIC
 * Renders the full technical catalog using modular components.
 */
function renderProducts(lang: Language) {
    const products = getProducts(lang);
    const t = translations.systems;
    const grid = document.querySelector<HTMLDivElement>('#product-grid');
    if (!grid) return;
    grid.innerHTML = products.map(p => ProductCard(p, lang, false)).join('');

    // Update static header elements
    const selectors = {
        '.systems-title': t.title[lang],
        '.systems-tagline': t.tagline[lang],
        '.last-sync': t.lastSync[lang],
        '.ready-text': t.ready[lang]
    };

    Object.entries(selectors).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const lang = getCurrentLang();
        initNavbar();
        initFooter();
        renderProducts(lang);
    });
}
