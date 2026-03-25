/**
 * @file navbar.ts
 * @description Dynamic navigation component shared across all pages.
 * Handles language switching by transforming current paths and provides
 * absolute links to key sections of the application.
 */

import { getCurrentLang, translations } from '../core/translations';

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
        return isEs ? `/es/${path}/` : `/${path}/`;
    };
    
    // Switcher Logic: Replaces /es/ with / or vice-versa to toggle language on the current page.
    const currentPath = window.location.pathname;
    const enLink = isEs ? currentPath.replace('/es', '') : currentPath;
    const esLink = isEs ? currentPath : `/es${currentPath}`;

    nav.className = "fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl flex items-center gap-6 md:gap-12 transition-all duration-500 hover:border-orange-500/30";

    nav.innerHTML = `
        <a href="${isEs ? '/es/' : '/'}" class="text-sm font-bold tracking-tighter text-white uppercase group">
            Ars<span class="text-orange-500 group-hover:glow-orange transition-all">Ultra</span>
        </a>

        <div class="flex gap-4 md:gap-8 text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400">
            <a href="${getLink('company')}" class="hover:text-white transition">${t.company[lang]}</a>
            <a href="${getLink('systems')}" class="hover:text-white transition">${t.systems[lang]}</a>
            <a href="${getLink('innovation')}" class="hover:text-white transition">${t.innovation[lang]}</a>
        </div>

        <div class="flex items-center gap-4 border-l border-white/10 pl-6 md:pl-8">
            <a href="${getLink('contact')}" class="text-[9px] uppercase tracking-[0.25em] font-black text-orange-500 hover:text-white transition">
                ${t.inquiry[lang]}
            </a>
            
            <div class="flex gap-2 mono text-[8px] font-bold">
                <a href="${enLink}" class="${!isEs ? 'text-white' : 'text-slate-600'} hover:text-white transition">EN</a>
                <span class="opacity-20">/</span>
                <a href="${esLink}" class="${isEs ? 'text-white' : 'text-slate-600'} hover:text-white transition">ES</a>
            </div>
        </div>
    `;
}
