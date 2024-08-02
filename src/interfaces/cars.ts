import { IGallery } from "./gallery";

export interface ICars {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
    images: IGallery[];
}