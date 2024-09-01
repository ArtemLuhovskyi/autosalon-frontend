import { useEffect, useState } from 'react';
import ImagePreview from './ImagePreview';
import { useCarContext } from '../../context/carContext';
import { GalleryType } from '../../interfaces/gallery';

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
}

export default function GeneralInfoCar({
    file,
    setFile,
    fileName,
    setFileName,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
}: GeneralInfoCarProps) {
    const [imgId, setImgId] = useState<number | null>(null);
    const { deleteImages, setDeleteImages, getImagesByType, car } =
        useCarContext();

    useEffect(() => {
        if (car?.images && car.images.length > 0) {
            const mainImages = getImagesByType(GalleryType.main);
            if (mainImages.length > 0) {
                setFileName(mainImages[0].img_url.split('/').pop() || null);
                setImgId(mainImages[0].id);
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
                        setFile(e.target.files ? e.target.files[0] : null);
                        setFileName(
                            e.target.files ? e.target.files[0].name : null
                        );
                        if (imgId && !deleteImages.includes(imgId)) {
                            setDeleteImages([...deleteImages, imgId]);
                        }
                    }}
                    required={!car}
                />
            </div>
            <ImagePreview
                file={file}
                handleFileRemove={() => {
                    setFile(null);
                    setFileName(null);
                    if (imgId && !deleteImages.includes(imgId)) {
                        setDeleteImages([...deleteImages, imgId]);
                    }
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
    );
}
