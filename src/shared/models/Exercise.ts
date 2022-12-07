export interface Exercise {
    id?: number;
    title?: string;
    description?: string;
    banner?: string;
    images?: Image[];
    videos?: Video[];
}

export interface Image {
    id?: number;
    src?: string;
    alt: string;
}

export interface Video {
    id?: number;
    url?: string;
    title?: string;
}