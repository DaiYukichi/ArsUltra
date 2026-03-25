import { getCurrentLang } from '../core/translations';

const lang = getCurrentLang();

export const capabilities = [
    {
        title: lang === 'es' ? "Electrónica" : "Electronic",
        category: lang === 'es' ? "HARDWARE" : "HARDWARE",
        points: lang === 'es' ? [
            "Diseño y desarrollo de PCB de alta confiabilidad.",
            "Integridad de Señal (SI) y Análisis de Modos de Falla (FMEA).",
            "Diseño interactivo de lazo térmico-estructural.",
            "Producción de Modelos de Vuelo (FM) y Soporte en Tierra (GSE)."
        ] : [
            "High reliability PCB design & development.",
            "Signal Integrity (SI) & Fail Mode Analysis (FMEA).",
            "Interactive thermal-structural loop design.",
            "Flight Model (FM) & Ground Support (GSE) production."
        ]
    },
    {
        title: lang === 'es' ? "Diseño Estructural" : "Structural Design",
        category: lang === 'es' ? "MECÁNICA" : "MECHANICAL",
        points: lang === 'es' ? [
            "Soluciones de carcasas de ingeniería robustas personalizadas.",
            "Diseños extremadamente livianos y blindados.",
            "Mecanismos para ambientes térmicos y de vacío hostiles.",
            "Modelado 3D CAD detallado y prototipado rápido."
        ] : [
            "Custom rugged engineering enclosure solutions.",
            "Extremely light weight, shielded designs.",
            "Mechanisms for harsh vacuum & thermal environments.",
            "Detailed 3D CAD modeling & rapid prototyping."
        ]
    },
    {
        title: lang === 'es' ? "Simulación FEM" : "FEM Simulation",
        category: lang === 'es' ? "ANÁLISIS" : "ANALYSIS",
        points: lang === 'es' ? [
            "Análisis térmico (Radiación, Convección, Conducción).",
            "Estructural y Vibracional (Freq natural, PSD, Sinusoidal).",
            "Análisis de Radiación (Dosis Irradiante Total - TID).",
            "Dinámica de Fluidos Computacional (CFD)."
        ] : [
            "Thermal analysis (Radiation, Convection, Conduction).",
            "Structural & Vibrational (Natural freq, PSD, Sinusoidal).",
            "Radiation Analysis (Total Irradiating Dose - TID).",
            "Computational Fluid Dynamics (CFD)."
        ]
    }
];
