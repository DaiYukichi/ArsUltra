import type { SatelliteComponent } from '../core/satellite_component';
import type { Mission, Manifesto, Capability } from '../core/mission';
import type { Language } from '../core/translations';
import { translations } from '../core/translations';

/**
 * UI COMPONENTS
 * Centralized functions to generate HTML template strings for consistent 
 * design across the site.
 */

/**
 * Renders a standard product card used in the technical catalog.
 */
export function ProductCard(p: SatelliteComponent, lang: Language, isFeatured = false): string {
    const datasheetText = translations.systems.datasheet[lang];
    const viewSystemText = translations.systems.viewSystem[lang];
    const systemsLink = lang === 'es' ? '/es/systems/' : '/systems/';
    
    const cardPadding = isFeatured ? 'p-12' : 'p-10';
    const titleSize = isFeatured ? 'text-4xl' : 'text-3xl';
    const letterSize = isFeatured ? 'text-8xl' : 'text-4xl';

    return `
        <div class="glass-card group ${cardPadding} rounded-2xl border border-white/5 hover:border-orange-500/40 transition-all duration-700 relative overflow-hidden flex flex-col h-full">
            <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <span class="${letterSize} font-black italic uppercase select-none">${p.category[0]}</span>
            </div>
            
            <div class="relative z-10 flex flex-col h-full">
                <div class="mono text-[9px] text-orange-500 mb-4 tracking-[0.4em] uppercase font-bold italic">${p.category}</div>
                <h3 class="${titleSize} font-black mb-4 text-white tracking-tighter uppercase italic transition-all duration-700 group-hover:glow-orange">${p.name}</h3>
                
                ${p.imageUrl ? `
                    <div class="mb-8 rounded-lg overflow-hidden border border-white/5 group-hover:border-orange-500/20 transition-all duration-700">
                        <img src="${p.imageUrl}" class="w-full aspect-video object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="${p.name}">
                    </div>
                ` : ''}

                <p class="text-slate-400 text-sm mb-8 leading-relaxed">${p.description}</p>
                
                <ul class="space-y-3 mb-auto">
                    ${p.specs.map(spec => `
                        <li class="text-[10px] mono text-slate-500 flex items-center tracking-widest uppercase">
                            <span class="w-1 h-1 bg-orange-500 rounded-full mr-2 group-hover:w-2 transition-all duration-500"></span>
                            ${spec}
                        </li>
                    `).join('')}
                </ul>

                <div class="pt-8 mt-12 border-t border-white/5 flex justify-between items-center">
                    <span class="text-[9px] mono text-blue-400 uppercase tracking-widest">${p.radHardRating}</span>
                    ${isFeatured 
                        ? `<a href="${systemsLink}" class="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-orange-500 transition">${viewSystemText}</a>`
                        : p.datasheetUrl 
                            ? `<a href="${p.datasheetUrl}" download class="text-[9px] font-black uppercase tracking-[0.25em] text-white hover:text-orange-500 transition">${datasheetText}</a>`
                            : `<button class="text-[9px] font-black uppercase tracking-[0.25em] text-white hover:text-orange-500 transition opacity-20 cursor-not-allowed">${datasheetText}</button>`
                    }
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders a timeline entry for the Flight Heritage section.
 */
export function TimelineItem(m: Mission, isLast: boolean): string {
    return `
        <div class="relative pl-12 border-l border-white/5 pb-24 group">
            <div class="absolute -left-[5px] top-0 w-2 h-2 bg-slate-800 rounded-full border border-white/20 group-hover:bg-orange-500 group-hover:shadow-[0_0_15px_#f97316] transition-all duration-500"></div>
            
            <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                <span class="mono text-sm text-orange-500 font-bold tracking-widest shrink-0">${m.year}</span>
                
                <div class="flex-1">
                    <h4 class="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:translate-x-2 transition-transform duration-500">${m.name}</h4>
                    <p class="text-xs mono text-slate-500 uppercase tracking-widest">
                        ${m.agency} <span class="mx-3 opacity-20">|</span> 
                        <span class="text-slate-300">${m.payload}</span>
                    </p>
                </div>

                ${m.imageUrl ? `
                    <div class="w-48 aspect-video rounded-lg overflow-hidden border border-white/5 group-hover:border-orange-500/20 transition-all duration-500 hidden md:block">
                        <img src="${m.imageUrl}" class="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition duration-1000" alt="${m.name}">
                    </div>
                ` : ''}
            </div>
            
            ${isLast ? '' : `
                <div class="absolute left-[-1px] top-2 h-full w-px bg-gradient-to-b from-white/10 to-transparent"></div>
            `}
        </div>
    `;
}

/**
 * Renders an entry in the corporate manifesto.
 */
export function ManifestoItem(p: Manifesto, idx: number): string {
    return `
        <div class="flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} group">
            <div class="max-w-3xl relative">
                <span class="absolute -top-12 left-0 mono text-7xl font-black italic text-white/5 group-hover:text-orange-500/10 transition-colors duration-700 select-none">0${p.id}</span>
                <blockquote class="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase italic group-hover:glow-orange transition-all duration-700">
                    "${p.text}"
                </blockquote>
            </div>
        </div>
    `;
}

/**
 * Renders a card for the technical capabilities section.
 */
export function CapabilityCard(cap: Capability): string {
    return `
        <div class="glass-card group p-12 rounded-3xl border border-white/5 hover:border-orange-500/40 transition-all duration-700 relative overflow-hidden h-full flex flex-col">
            <div class="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <span class="text-[200px] font-black italic uppercase select-none leading-none">${cap.category[0]}</span>
            </div>

            <div class="relative z-10">
                <div class="mono text-[9px] text-orange-500 mb-6 tracking-[0.4em] uppercase font-bold italic">${cap.category}</div>
                <h3 class="text-3xl font-black mb-8 text-white uppercase tracking-tighter italic group-hover:glow-orange transition-all duration-700">${cap.title}</h3>
                <ul class="space-y-6">
                    ${cap.points.map(point => `
                        <li class="text-xs text-slate-400 flex items-start leading-relaxed mono tracking-wider uppercase group-hover:text-slate-200 transition">
                            <span class="w-1.5 h-[1px] bg-orange-500 mr-4 mt-2 shrink-0 group-hover:w-4 transition-all duration-500"></span>
                            ${point}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}
