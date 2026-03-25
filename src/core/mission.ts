export interface Mission {
    year: string;
    name: string;
    agency: string;
    payload: string;
    status: 'Success' | 'Ongoing';
    imageUrl?: string;
}

export interface Manifesto {
    id: number;
    text: string;
}

export interface Capability {
    category: string;
    title: string;
    points: string[];
}