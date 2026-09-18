/**
 * @file navbar.ts
 * @description Dynamic navigation component shared across all pages.
 * Handles language switching by transforming current paths and provides
 * absolute links to key sections of the application.
 */

import { getCurrentLang, translations } from '../core/translations';
import { withBase, getRelativePath } from '../core/paths';
import '../styles/navbar.css';

/**
 * Initializes and injects the global navbar into #global-nav.
 */
export function initNavbar() {
    const nav = document.querySelector('#global-nav');
    if (!nav) return;

    const lang = getCurrentLang();
    const t = translations.navbar;
    const isEs = lang === 'es';

    /**
     * Generates a language-specific URL for a given path.
     * @param {string} path - The internal page route.
     * @returns {string} The localized URL.
     */
    const getLink = (path: string) => {
        return withBase(isEs ? `/es/${path}/` : `/${path}/`);
    };

    // Switcher Logic: Replaces /es/ with / or vice-versa to toggle language on the current page.
    const currentPath = getRelativePath();
    const enLink = withBase(isEs ? currentPath.replace('/es', '') || '/' : currentPath);
    const esLink = withBase(isEs ? currentPath : `/es${currentPath}`);

    nav.innerHTML = `
        <a href="${withBase(isEs ? '/es/' : '/')}" class="nav-brand">Ars<span>Ultra</span></a>

        <div class="nav-links">
            <a href="${getLink('company')}">${t.company[lang]}</a>
            <a href="${getLink('systems')}">${t.systems[lang]}</a>
            <a href="${getLink('innovation')}">${t.innovation[lang]}</a>
        </div>

        <div class="nav-right">
            <a href="${getLink('contact')}" class="nav-inquiry">${t.inquiry[lang]}</a>

            <div class="nav-lang">
                <a href="${enLink}" class="${isEs ? '' : 'is-active'}">EN</a>
                <span class="sep">/</span>
                <a href="${esLink}" class="${isEs ? 'is-active' : ''}">ES</a>
            </div>
        </div>
    `;

    // Reveal only once content and fonts are in place, so the navbar never visibly resizes or moves on load.
    const fontsReady = Promise.all([
        document.fonts.load('700 9px Inter'),
        document.fonts.load('700 9px "Roboto Mono"'),
    ]).catch(() => {});
    Promise.race([fontsReady, new Promise(resolve => setTimeout(resolve, 600))]).then(() => {
        nav.classList.add('is-ready');
    });
}
