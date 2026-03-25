export interface SatelliteComponent {
    id: string;
    name: string;
    category: string;
    radHardRating: string;
    description: string;
    specs: string[]; // Added an array for technical bullet points
    imageUrl?: string;
    datasheetUrl?: string;
}