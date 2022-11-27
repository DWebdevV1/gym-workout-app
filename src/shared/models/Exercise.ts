export interface Exercise {
    id?: any;
    title?: string;
    description?: string;
    banner?: string;
    images?: Image[];
    videos?: Video[];
}

export interface Image {
    id?: any;
    src?: string;
    alt: string;
}

export interface Video {
    id?: any;
    src?: string;
    title?: string;
}