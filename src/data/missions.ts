import type { Mission } from '../core/mission';
import type { Language } from '../core/translations';

export const getMissions = (lang: Language): Mission[] => [
    {
        year: '2024',
        name: 'Freedom Platform',
        agency: 'ArsUltra',
        payload: lang === 'es' ? 'OBC de Bus Completo' : 'Full Bus OBC',
        status: 'Ongoing',
        imageUrl: '/images/freedom-f1.png'
    },
    {
        year: '2018',
        name: 'SAOCOM 1A',
        agency: 'CONAE',
        payload: lang === 'es' ? 'Sistemas OBC' : 'OBC Systems',
        status: 'Success',
        imageUrl: '/images/sacom_1a.png'
    },
    {
        year: '2011',
        name: 'SAC-D / Aquarius',
        agency: 'CONAE/NASA',
        payload: lang === 'es' ? 'Componentes Rad-Hard' : 'Rad-Hard Components',
        status: 'Success',
        imageUrl: '/images/sac_d.png'
    }
];
