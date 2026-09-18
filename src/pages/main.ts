import { initNavbar } from '../components/navbar';
import { initFooter } from '../components/footer';
import { getCurrentLang, translations, type Language } from '../core/translations';
import { withBase } from '../core/paths';
import { ProductCard, TimelineItem } from '../components/ui';
import { getFeaturedProducts } from '../data/systems';
import { getMissions } from '../data/missions';

/**
 * HOME PAGE LOGIC
 * This file handles the rendering of the landing page using modular components.
 */
function renderHome(lang: Language) {
    const t = translations.home;
    const selectors = {
        '.status-text': t.status[lang],
        '.hero-tagline': t.tagline[lang],
        '.scroll-text': t.scroll[lang],
        '.systems-title': t.systems[lang],
        '.proven-text': t.proven[lang],
        '.heritage-title': t.heritage[lang]
    };

    Object.entries(selectors).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });

    const catalog = document.querySelector('.catalog-btn');
    if (catalog) {
        catalog.textContent = t.catalog[lang];
        catalog.setAttribute('href', withBase(lang === 'es' ? '/es/systems/' : '/systems/'));
    }
}

/**
 * Renders the product cards using the shared ProductCard component.
 */
function renderFeaturedProducts(lang: Language) {
    const featuredProducts = getFeaturedProducts(lang);
    const grid = document.querySelector<HTMLDivElement>('#product-grid');
    if (!grid) return;
    grid.innerHTML = featuredProducts.map(p => ProductCard(p, lang, true)).join('');
}

/**
 * Renders the vertical timeline using the shared TimelineItem component.
 */
function renderMissions(lang: Language) {
    const missions = getMissions(lang);
    const container = document.querySelector<HTMLDivElement>('#heritage-timeline');
    if (!container) return;
    container.innerHTML = missions.map((m, idx) => TimelineItem(m, idx === missions.length - 1)).join('');
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const lang = getCurrentLang();
        initNavbar();
        initFooter();
        renderHome(lang);
        renderFeaturedProducts(lang);
        renderMissions(lang);
    });
}
