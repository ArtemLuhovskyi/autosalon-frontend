export interface IGallery {
    id: number;
    img_url: string;
    img_type: string;
    car_id: number;
}

export interface IGalleryImage {
    file: File | null;
    fileName: string | null;
}