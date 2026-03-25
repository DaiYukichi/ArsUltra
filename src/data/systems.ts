/**
 * @file systems.ts
 * @description Product data for the technical catalog and featured sections.
 * Contains technical specifications, categorization, and links to PDF datasheets.
 * 
 * DATASHEET INSTRUCTIONS:
 * 1. Place your PDF in the `/public/datasheets/` directory.
 * 2. Update the `datasheetUrl` property below to point to the new file.
 *    Example: datasheetUrl: "/datasheets/your-file.pdf"
 */

import type { SatelliteComponent } from '../core/satellite_component';
import type { Language } from '../core/translations';

/**
 * Returns the full list of products with localized descriptions and specs.
 * @param {Language} lang - Current application language.
 * @returns {SatelliteComponent[]} List of all systems.
 */
export const getProducts = (lang: Language): SatelliteComponent[] => [
    {
        id: "freedom-f1",
        name: "FREEDOM F1 Spacecraft",
        category: lang === 'es' ? "Satélite" : "Spacecraft",
        radHardRating: lang === 'es' ? "Vida Útil 5-7 Años" : "5-7 Year Lifetime",
        description: lang === 'es'
            ? "Arquitectura de Bus Modular para la próxima generación de infraestructura espacial. Bus dual redundante de alta confiabilidad."
            : "Modular Bus Architecture for next-generation space infrastructure. Dual redundant high-reliability bus.",
        specs: lang === 'es'
            ? ["Bus Modular (50-150kg)", "Sin Punto de Falla Único", "Capacidad de Deórbita", "Listo para Ensamblaje Robótico"]
            : ["Modular Bus (50-150kg)", "Non Single Point of Failure", "Deorbit Capability", "Robotic Assembly Ready"],
        imageUrl: "/images/freedom-f1.png",
        datasheetUrl: "/datasheets/freedom-f1.pdf" // TODO: Add actual PDF
    },
    {
        id: "rad-hard-obc",
        name: "RAD-HARD | LEON3 OBC",
        category: "OBC",
        radHardRating: "100 krad (TID)",
        description: lang === 'es'
            ? "Placa de CPU RAD-HARD de alto rendimiento para aplicaciones espaciales. Procesador Leon3-FT SPARC V8 de 32 bits."
            : "High Performance RAD-HARD CPU Board for Space Applications. Dual core Leon3-FT SPARC V8 compliant 32-bit processor.",
        specs: lang === 'es'
            ? ["Core Dual LEON3FT", "Corrección de Errores (EDAC)", "SpaceWire y CAN 2.0", "Triple Rescate de Hardware"]
            : ["Dual LEON3FT Core", "Error Correction (EDAC)", "SpaceWire & CAN 2.0", "Triple Hardware Rescue"],
        imageUrl: "/images/rad-hard-obc.png",
        datasheetUrl: "/datasheets/rad-hard-obc.pdf" // TODO: Add actual PDF
    },
    {
        id: "fly-angela",
        name: "Fly Angela | CubeSat OBC",
        category: "OBC",
        radHardRating: lang === 'es' ? "Probado en Vuelo" : "Flight Proven",
        description: lang === 'es'
            ? "Computadora de a bordo de alta confiabilidad para CubeSats. Sensores integrados de acelerómetro, giroscopio, magnetómetro y temperatura."
            : "CubeSat High Reliability On Board Computer. Integrated accelerometer, gyroscope, magnetometer and temperature sensors.",
        specs: lang === 'es'
            ? ["SoC Cortex-M3", "4Gb DDR3 con EDAC", "IMU y PWM Integrados", "Formato PC/104 Plus"]
            : ["Cortex-M3 SoC", "4Gb DDR3 w/ EDAC", "Integrated IMU & PWM", "PC/104 Plus Format"],
        imageUrl: "/images/fly-angela.png",
        datasheetUrl: "/datasheets/fly-angela.pdf" // TODO: Add actual PDF
    },
    {
        id: "open-vpx",
        name: "OpenVpx | LEON3 OBC",
        category: "OBC",
        radHardRating: "100 krad (TID)",
        description: lang === 'es'
            ? "Placa de alto rendimiento compatible con OpenVPX 3U. Diseñada para procesamiento de datos de alta velocidad en ambientes hostiles."
            : "OpenVPX 3U compliant high performance board. Designed for high-speed data processing in harsh environments.",
        specs: lang === 'es'
            ? ["Factor de Forma 3U OpenVPX", "Procesador LEON3FT", "E/S Serial de Alta Velocidad", "Diseño Robusto"]
            : ["3U OpenVPX Form Factor", "LEON3FT Processor", "High-speed Serial I/O", "Ruggedized Design"],
        imageUrl: "/images/open-vpx.jpg",
        datasheetUrl: "/datasheets/open-vpx.pdf" // TODO: Add actual PDF
    },
    {
        id: "rh-semiconductors",
        name: "RAD-HARD Semiconductors",
        category: lang === 'es' ? "Semiconductores" : "Semiconductors",
        radHardRating: lang === 'es' ? "Hasta 300 krad" : "Up to 300 krad",
        description: lang === 'es'
            ? "Componentes de lógica y conmutación de potencia endurecidos por dosis total para órbitas extremas."
            : "Total Dose Hardened power switching and logic components for extreme orbits.",
        specs: lang === 'es'
            ? ["MOSFETs de Baja RDS(on)", "Inmune a SEB/SEL", "Calificado para Espacio", "Lógica Discreta Rad-Hard"]
            : ["Low RDS(on) MOSFETs", "SEB/SEL Immune", "Space Qualified", "Rad-Hard Discrete Logic"],
        imageUrl: "/images/rad-hard-semi.jpg",
        datasheetUrl: "/datasheets/rad-hard-semi.pdf" // TODO: Add actual PDF
    },
    {
        id: "itex",
        name: "ITEX | Hi-TEMP Rugged ACQ",
        category: lang === 'es' ? "Industrial" : "Industrial",
        radHardRating: lang === 'es' ? "Robusto (125°C)" : "Rugged (125°C)",
        description: lang === 'es'
            ? "Sistema de adquisición extremadamente robusto para mediciones integradas de alta temperatura. Desarrollado para industrias de Oil & Gas y Siderurgia."
            : "Extreme rugged acquisition system for embedded high temperature measurements. Specially developed for Oil & Gas and Iron & Steel industries.",
        specs: lang === 'es'
            ? ["Compatible con Tubería de 7\"", "Aleación Níquel-Cromo", "Consumo Ultra-bajo", "Termocupla Tipo K"]
            : ["7\" Pipe Compatible", "Nickel-Chrome Alloy", "Ultra-low Power", "Type K Thermocouple"],
        imageUrl: "/images/itex.png",
        datasheetUrl: "/datasheets/itex.pdf" // TODO: Add actual PDF
    }
];

export const getFeaturedProducts = (lang: Language): SatelliteComponent[] => {
    const products = getProducts(lang);
    return products.filter(p => ["freedom-f1", "rad-hard-obc"].includes(p.id));
}

