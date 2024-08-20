import { IAdditionalBlock } from "./additionalInfoCar";
import { IGallery } from "./gallery";

export interface ICars {
    id: number;
    title: string;
    description: string;
    price: number;
    additional_info: IAdditionalBlock[];
    images: IGallery[];
}