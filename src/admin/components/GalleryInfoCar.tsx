import { useEffect, useState } from "react";
import { ICars } from "../../interfaces/cars";
import ImagePreview from "./ImagePreview";
import { IGalleryImage } from "../../interfaces/gallery";
import { IAdditionalBlock } from "../../interfaces/additionalInfoCar";
import useCar from "../../hooks/useCar";
import { useParams } from "react-router-dom";

interface GalleryInfoCarProps {
    galleryImages: IGalleryImage[];
    setGalleryImages: (blocks: IGalleryImage[]) => void;
    car: ICars | null;
}

export default function GalleryInfoCar({ galleryImages, setGalleryImages, car }: GalleryInfoCarProps) {
    console.log('galleryImages: ', galleryImages);
    

    const [file, setFile] = useState<File | null>(null);
    const { getCar } = useCar();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
            getCar(id);
        }
    }, [id]);

    const saveGalleryCar = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData();

        galleryImages.forEach((image, index) => {
            if (image.file) {
                formData.append(`file`, image.file);
            }
        });

        if (car) {
            formData.append('id', car.id.toString());
        }

        const url = car
            ? `${process.env.REACT_APP_DEV_URL}/updateCar`
            : `${process.env.REACT_APP_DEV_URL}/addCar`;
        const method = car ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method,
            body: formData,
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit car gallery');
        }

        const result = await response.json();
        console.log('Car gallery submitted successfully:', result);
    }

    const deleteImgs = (index: number) => {
        const newGalleryImages = galleryImages.filter((img, idx) => idx !== index);
        setGalleryImages(newGalleryImages);
    };

    const handleOnChangFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newGalleryImages = Array.from(files).map((file) => ({
                file: file,
                fileName: file.name,
            }));
            setGalleryImages([...galleryImages, ...newGalleryImages]);
        }
    };

    const handleAddImgs = () => {
        // setGalleryImages([
        //     ...galleryImages,
        //     {
        //         file: null,
        //         fileName: null,
        //     },
        // ]);
    };

    // useEffect(() => {
    //     if (car?.images && car.images.length > 0) {
    //         const galleryImage = car.images.find(
    //             (image) => image.img_type === 'gallery'
    //         );
    //         if (galleryImage) {
    //             setGalleryFileName(galleryImage.img_url.split('/').pop() || null);
    //         }
    //     }
    // }, [car]);

    return (
        <>
             <div className="input-group gallery-input">
                        {galleryImages.map((image, index) => (
                            <>
                            <input
                            type="file"
                            id={`gfile${index}`}
                            onChange={(e) => {
                                handleOnChangFile(e);
                            }}
                            required={!car}
                        />

                            <ImagePreview
                                key={index}
                                file={image.file}
                                handleFileRemove={() => {
                                    deleteImgs(index);
                             }}
                                imageUrl={
                                image.fileName
                                    ? `${process.env.REACT_APP_DEV_URL}/images/cars/${car?.id}/${image.fileName}`
                                    : undefined
                            }
                                maxWidth="200"
                            />
                            </>
                        ))}
                        <label onClick={handleAddImgs} className="gallery-label" htmlFor="gfile0">
                            +
                        </label>
                        <button onClick={saveGalleryCar} className="btn btn--red">save gallery</button>
                        
            </div>
                    
        </>
    )
}