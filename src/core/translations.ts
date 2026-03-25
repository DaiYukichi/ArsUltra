/**
 * @file translations.ts
 * @description Centralized translation system for multi-language support (EN/ES).
 * Handles detection of the current language from the URL and provides a structured
 * object for all UI strings across the application.
 */

export type Language = 'en' | 'es';

/**
 * Detects the current language based on the URL path.
 * Paths starting with '/es' are treated as Spanish, otherwise English.
 * @returns {Language} 'en' or 'es'
 */
export const getCurrentLang = (): Language => {
    return window.location.pathname.startsWith('/es') ? 'es' : 'en';
};

/**
 * Global translations object.
 * Structured by component or page name for easy access.
 */
export const translations = {
    navbar: {
        company: { en: 'Company', es: 'Compañía' },
        systems: { en: 'Systems', es: 'Sistemas' },
        innovation: { en: 'R&D+i', es: 'I+D+i' },
        inquiry: { en: 'Inquiry', es: 'Consulta' },
    },
    footer: {
        division: { en: 'Deep Space Division', es: 'División de Espacio Profundo' }
    },
    home: {
        status: { en: 'SYSTEM STATUS: NOMINAL // EST. 2011', es: 'ESTADO DEL SISTEMA: NOMINAL // EST. 2011' },
        tagline: { en: 'A high reliability company for a better world where to live.', es: 'Una compañía de alta confiabilidad para un mundo mejor donde vivir.' },
        scroll: { en: 'Scroll to Explore', es: 'Deslizar para Explorar' },
        systems: { en: 'Systems', es: 'Sistemas' },
        proven: { en: 'Flight Proven Heritage', es: 'Herencia Probada en Vuelo' },
        catalog: { en: 'Full Catalog', es: 'Catálogo Completo' },
        heritage: { en: 'Flight Heritage', es: 'Herencia de Vuelo' },
    },
    company: {
        strategy: { en: 'Strategy', es: 'Estrategia' },
        businessCore: { en: 'Business Core', es: 'Núcleo de Negocio' },
        businessDesc: { 
            en: 'Focused on high-reliability engineering across two strategic domains.', 
            es: 'Enfocados en ingeniería de alta confiabilidad en dos dominios estratégicos.' 
        },
        extended: {
            en: 'Beyond our core, we provide advanced modeling, qualification testing, and R&D for the most demanding mission profiles.',
            es: 'Más allá de nuestro núcleo, brindamos modelado avanzado, pruebas de calificación e I+D para los perfiles de misión más exigentes.'
        },
        identityTitle: { en: 'The Identity', es: 'La Identidad' },
        manifesto: { en: 'Manifesto', es: 'Manifiesto' },
        philosophy: { en: 'Philosophy', es: 'Filosofía' },
        humanResources: { en: 'Humanos con Recursos', es: 'Humanos con Recursos' },
        pillars: {
            1: { 
                en: "The value of our organization lies in people—in their capacity to share, create, and dream.", 
                es: "El valor de nuestra organización está en la gente, en sus cualidades, en su forma de compartir, de crear, y de soñar." 
            },
            2: {
                en: "The capacity to give of oneself to others is a fundamental value. We resign individual egos for the collective benefit.",
                es: "La capacidad de brindarse hacia los demás es un valor fundamental. Resignamos los egos individuales en pro del beneficio colectivo."
            },
            3: {
                en: "ARSULTRA exists fundamentally in the heart of its members; the expertise and beauty of our organization emanates from its people.",
                es: "ARSULTRA existe fundamentalmente en el corazón de cada uno de sus miembros; la pericia y la belleza de nuestra organización emana de su gente."
            },
            4: { 
                en: "ArsUltra does not have 'Human Resources'. We have 'Humans with Resources'.", 
                es: "ARSULTRA no posee “Recursos Humanos”, posee “Humanos con Recursos”." 
            },
            5: { 
                en: "We do not develop technology; we develop humans. It is humans who, in turn, develop technology.", 
                es: "ARSULTRA no desarrolla tecnología, sino que desarrolla personas, y son estos quienes a su vez, desarrollan la tecnología." 
            },
            6: {
                en: "We need to learn to walk lightly through life to flow, preventing burdens from stopping our thoughts from rising to the highest states.",
                es: "Necesitamos aprender a transitar livianos por la vida para poder fluir, evitando que las cargas impidan que nuestros pensamientos se eleven."
            },
            7: {
                en: "We need to understand others, in their clarity or confusion. We strive to build people who do not judge, but understand.",
                es: "Necesitamos comprender al otro, en su cordura o en su confusión. Luchemos por construir personas que no juzguen, sino que comprendan."
            },
            8: { 
                en: "We seek to understand ourselves deeply to better understand the challenges of the world.", 
                es: "Debemos desarrollar la capacidad de escuchar activamente nuestro interior para comprendernos a nosotros mismos." 
            }
        }
    },
    systems: {
        title: { en: 'Technical Catalog', es: 'Catálogo Técnico' },
        tagline: { en: 'Rad-Hard & High-Reliability Systems', es: 'Sistemas Rad-Hard y de Alta Confiabilidad' },
        lastSync: { en: 'Last Sync: March 2026', es: 'Última Sincronización: Marzo 2026' },
        ready: { en: 'V.3.0 Ready for GEO/LEO', es: 'V.3.0 Listo para GEO/LEO' },
        viewSystem: { en: 'View System ->', es: 'Ver Sistema ->' },
        datasheet: { en: 'Datasheet ->', es: 'Ficha Técnica ->' }
    },
    innovation: {
        capabilities: { en: 'Capabilities', es: 'Capacidades' },
        excellence: { en: 'Technical Excellence', es: 'Excelencia Técnica' },
        tagline: { en: 'R&D+i Capability', es: 'Capacidad de I+D+i' },
        description: {
            en: 'Advanced modeling, simulation, and high-reliability engineering for the most extreme mission profiles.',
            es: 'Modelado avanzado, simulación e ingeniería de alta confiabilidad para los perfiles de misión más extremos.'
        }
    },
    contact: {
        status: { en: 'Establishing Connection...', es: 'Estableciendo Conexión...' },
        title: { en: 'Contact', es: 'Contacto' },
        desc: {
            en: 'Connect with our mission control. For rad-hard systems, custom spacecraft buses, or high-reliability industrial inquiries.',
            es: 'Conecte con nuestro control de misión. Para sistemas rad-hard, buses de satélites personalizados o consultas industriales.'
        },
        origin: { en: 'Origin [Name]', es: 'Origen [Nombre]' },
        signal: { en: 'Signal [Email]', es: 'Señal [Email]' },
        payload: { en: 'Data Payload [Message]', es: 'Carga de Datos [Mensaje]' },
        transmit: { en: 'Transmit Inquiry', es: 'Transmitir Consulta' },
        location: { en: 'Location', es: 'Ubicación' },
        channels: { en: 'Channels', es: 'Canales' }
    }
};
