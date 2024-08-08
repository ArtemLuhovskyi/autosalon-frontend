import { useEffect, useState } from "react";
import { ICars } from "../../interfaces/cars";
import ImagePreview from "./ImagePreview";

interface GeneralInfoCarProps {
    file: File | null;
    setFile: (file: File | null) => void;
    fileName: string | null;
    setFileName: (fileName: string | null) => void;
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    price: string;
    setPrice: (price: string) => void;
    car: ICars | null;
}

export default function GeneralInfoCar({
    file, setFile, fileName, setFileName, 
    title, setTitle, description, setDescription, 
    price, setPrice, car 
}: GeneralInfoCarProps) {

    useEffect(() => {
        if (car?.images && car.images.length > 0) {
            const mainImage = car.images.find(
                (image) => image.img_type === 'main'
            );
            if (mainImage) {
                setFileName(mainImage.img_url.split('/').pop() || null);
            }
        }
    }, [car]);
    
    return (
                <>
                    <div className="input-group">
                        <label htmlFor="file">Image:</label>
                        <label className="file-label" htmlFor="file">
                            {file ? file.name : fileName || 'Choose Car'}
                        </label>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => {
                                setFile(
                                    e.target.files ? e.target.files[0] : null
                                );
                                setFileName(
                                    e.target.files
                                        ? e.target.files[0].name
                                        : null
                                );
                            }}
                            required={!car}
                        />
                    </div>
                    <ImagePreview
                        file={file}
                        handleFileRemove={() => {
                            setFile(null);
                            setFileName(null);
                        }}
                        imageUrl={
                            fileName
                                ? `${process.env.REACT_APP_DEV_URL}/images/cars/${car?.id}/${fileName}`
                                : undefined
                        }
                    />
                    <div className="input-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                </>
    )

}