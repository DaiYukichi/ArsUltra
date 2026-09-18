import { getCurrentLang, translations } from '../core/translations';
import { withBase } from '../core/paths';

/**
 * FOOTER COMPONENT
 * Shared footer for all pages.
 */
export function initFooter() {
    let footer = document.querySelector('#global-footer') || document.querySelector('footer');

    if (!footer) {
        footer = document.createElement('footer');
        footer.id = 'global-footer';
        document.body.appendChild(footer);
    } else {
        footer.id = 'global-footer';
    }

    const lang = getCurrentLang();
    const t = translations.footer;

    footer.className = "border-t border-white/5 py-20 px-6 text-center mt-40";
    footer.innerHTML = `
        <img src="${withBase('/logo-h50.png')}" alt="ArsUltra" class="h-6 opacity-30 grayscale mx-auto mb-8">
        <p class="mono text-[9px] text-slate-600 uppercase tracking-[0.3em]">
            &copy; 2026 ArsUltra S.A. // ${t.division[lang]}
        </p>
    `;
}
