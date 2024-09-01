import { IAdditionalBlock } from "./additionalInfoCar";
import { IDescriptionBlock } from "./descriptionBlocks";
import { IGallery } from "./gallery";

export interface ICars {
    id: number;
    title: string;
    description: string;
    price: number;
    additional_info: IAdditionalBlock[];
    description_info: IDescriptionBlock[];
    images: IGallery[];
}