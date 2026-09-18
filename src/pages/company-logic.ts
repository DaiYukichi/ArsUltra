import { initNavbar } from '../components/navbar';
import { initFooter } from '../components/footer';
import { getCurrentLang, translations, type Language } from '../core/translations';
import { withBase } from '../core/paths';
import { ManifestoItem } from '../components/ui';
import { getBusinessData, getIdentityData, getManifestoData } from '../data/company';

/**
 * COMPANY PAGE LOGIC
 * Renders business, identity, and manifesto sections using modular components.
 */
function renderCompany(lang: Language) {
    const t = translations.company;
    const businessData = getBusinessData(lang);
    const identityData = getIdentityData(lang);
    const manifestoData = getManifestoData(lang);

    const businessSection = document.querySelector('#business-section');
    if (businessSection) {
        businessSection.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <div class="mono text-[10px] text-orange-500 mb-6 tracking-[0.4em] uppercase font-bold italic">${t.strategy[lang]}</div>
                    <h2 class="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase italic">${businessData.title}</h2>
                    <p class="text-slate-400 text-2xl font-light mb-12 leading-tight">${businessData.description}</p>
                </div>
                <div class="space-y-4">
                    ${businessData.domains.map(d => `
                        <div class="glass-card p-10 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-orange-500/30 transition-all duration-500">
                            <div>
                                <span class="mono text-[9px] text-slate-500 uppercase tracking-widest mb-1 block">${d.label}</span>
                                <span class="text-lg text-white font-bold group-hover:text-orange-500 transition">${d.value}</span>
                            </div>
                            <span class="text-orange-500 text-2xl group-hover:translate-x-2 transition-transform duration-500">→</span>
                        </div>
                    `).join('')}
                    <p class="text-slate-500 mono text-[9px] uppercase tracking-widest pt-8 leading-loose opacity-60">${businessData.extended}</p>
                </div>
            </div>
        `;
    }

    const identitySection = document.querySelector('#identity-section');
    if (identitySection) {
        identitySection.innerHTML = `
            <div class="flex flex-col md:flex-row gap-20 items-center">
                <div class="flex-1 space-y-8">
                    <div class="mono text-[10px] text-orange-500 mb-6 tracking-[0.4em] uppercase font-bold italic">${t.philosophy[lang]}</div>
                    <h2 class="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase italic">${identityData.title}</h2>
                    ${identityData.content.map(p => `<p class="text-slate-400 text-lg leading-relaxed font-light">${p}</p>`).join('')}
                </div>
                <div class="flex-1 relative group">
                    <div class="aspect-square rounded-full border border-orange-500/20 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl"></div>
                        <img src="${withBase('/images/identity.jpg')}" class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition duration-[2s]">
                        <div class="relative z-10 bg-slate-950/40 backdrop-blur-md p-10 rounded-full border border-white/10 group-hover:border-orange-500/30 transition duration-1000">
                            <img src="${withBase('/logo-h50.png')}" class="h-8 opacity-80 group-hover:glow-orange transition duration-1000">
                        </div>
                    </div>
                    <!-- Decorative Ring -->
                    <div class="absolute -inset-4 border border-white/5 rounded-full group-hover:border-orange-500/10 transition duration-1000 scale-95 group-hover:scale-100"></div>
                </div>
            </div>
        `;
    }

    const grid = document.querySelector('#manifesto-grid');
    if (grid) {
        grid.innerHTML = manifestoData.map((p, idx) => ManifestoItem(p, idx)).join('');
    }

    // Static translations for headings
    const selectors = {
        '.philosophy-title': t.philosophy[lang],
        '.hr-text': t.humanResources[lang],
        '.manifesto-tag': t.manifesto[lang]
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
        renderCompany(lang);
    });
}
