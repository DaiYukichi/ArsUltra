import type { Language } from '../core/translations';
import { translations } from '../core/translations';

export const getBusinessData = (lang: Language) => {
    const t = translations.company;
    return {
        title: t.businessCore[lang],
        description: t.businessDesc[lang],
        domains: [
            { label: lang === 'es' ? "ESPACIO" : "SPACE", value: lang === 'es' ? "Computadoras Robustas para Aplicaciones Orbitales" : "Rugged Computers for Orbital Applications" },
            { label: lang === 'es' ? "INDUSTRIAL" : "INDUSTRIAL", value: lang === 'es' ? "Sistemas Especiales para Ambientes Extremos" : "Special Systems for Extreme Environments" }
        ],
        extended: t.extended[lang]
    };
};

export const getIdentityData = (lang: Language) => {
    const t = translations.company;
    return {
        title: t.identityTitle[lang],
        content: lang === 'es' ? [
            "ArsUltra es la síntesis de arte y ciencia. Derivado de los términos latinos 'ARS' (Arte) y 'ULTRA' (Más allá), entendemos la ingeniería como el arte de lo posible.",
            "Nuestras creaciones no son solo máquinas; son obras de artesanía dedicadas al progreso sustentable de la humanidad. Operamos en el Plus Ultra — la frontera de la tecnología conocida.",
            "Empoderamos a las personas para construir un futuro más equitativo y resiliente a través de la ingeniería de alta confiabilidad."
        ] : [
            "ArsUltra is the synthesis of art and science. Derived from the Latin 'ARS' (Art) and 'ULTRA' (Beyond), we view engineering as the art of the possible.",
            "Our creations are not just machines; they are works of craft dedicated to the sustainable progress of humanity. We operate at the Plus Ultra — the frontier of known technology.",
            "We empower individuals to build a more equitable and resilient future through high-reliability engineering."
        ]
    };
};

export const getManifestoData = (lang: Language) => {
    const t = translations.company;
    return [
        { id: 1, text: t.pillars[1][lang] },
        { id: 2, text: t.pillars[2][lang] },
        { id: 3, text: t.pillars[3][lang] },
        { id: 4, text: t.pillars[4][lang] },
        { id: 5, text: t.pillars[5][lang] },
        { id: 6, text: t.pillars[6][lang] },
        { id: 7, text: t.pillars[7][lang] },
        { id: 8, text: t.pillars[8][lang] }
    ];
};
