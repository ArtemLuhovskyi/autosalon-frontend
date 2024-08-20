import { useEffect, useState } from "react";
import { ICars } from "../../interfaces/cars";
import GeneralInfoCar from "./GeneralInfoCar";
import useFixed from "../../hooks/useFixed";
import Header from "../../components/Header";
import AdditionalInfoCar from "./AdditionalInfoCar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IAdditionalBlock } from "../../interfaces/additionalInfoCar";
import useCar from "../../hooks/useCar";
import GalleryInfoCar from "./GalleryInfoCar";
import { IGalleryImage } from "../../interfaces/gallery";

interface GlobalAdminCarProps {
    car: ICars | null;
}

export default function GlobalAdminCar({ car }: GlobalAdminCarProps) {
    const fixed = useFixed();
    const navigate = useNavigate();
    const [title, setTitle] = useState(car?.title || '');
    const [description, setDescription] = useState(car?.description || '');
    const [price, setPrice] = useState(car?.price?.toString() || '');
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const [galleryImages, setGalleryImages] = useState<IGalleryImage[]>([{file: null, fileName: null}]);

    const [blocks, setBlocks] = useState<IAdditionalBlock[]>([]);

    const { getCar} = useCar();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        if (id) {
            getCar(id);
            setBlocks(car?.additional_info || []);
        }
    }, [id]);

    console.log('additional : ', car);


    const saveCar = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData();
        if (file) {
            formData.append('file', file);
        }
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('blocks', JSON.stringify(blocks));
        if (car) {
            formData.append('id', car.id.toString());
        }
        console.log('additional: ',blocks);
        const url = car
            ? `${process.env.REACT_APP_DEV_URL}/updateCar`
            : `${process.env.REACT_APP_DEV_URL}/addCar`;

        const method = car ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method,
            body: formData,
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit car');
        }

        const result = await response.json();
        console.log('Car submitted successfully:', result);

        // getAllCars();
    }

    return(
    <div className="container">
        <Header fixed={fixed} />
        <h1 style={{marginTop: '75px'}}>{car ? `General Info car: ${car?.title}` : 'New car'}</h1>
        <form onSubmit={saveCar}>
        <div className="block-content">
            <div className="modal-content">
                <h2>Main info</h2>
                <GeneralInfoCar 
                        file={file} 
                        setFile={setFile} 
                        fileName={fileName} 
                        setFileName={setFileName}
                        title={title} 
                        setTitle={setTitle} 
                        description={description} 
                        setDescription={setDescription} 
                        price={price} 
                        setPrice={setPrice} 
                        car={car} />
                </div>
            <div className="modal-content">
                <h2>Gallery</h2>
                <GalleryInfoCar 
                galleryImages={galleryImages}
                setGalleryImages={setGalleryImages}
                    car={car}
                />
            </div>
            <div className="modal-content">
                <h2>Additional info</h2>
                <AdditionalInfoCar
                blocks={blocks}
                setBlocks={setBlocks}
                car={car}
                />
            </div>
        </div>
                <div className="btn-content">
                    <button
                            type="submit"
                            className="action-btn-modal btn-create btn--red"
                            onClick={saveCar}
                            >
                            {car ? 'Save' : 'Add'}
                        </button>
                        <Link to='/admin'
                            className="action-btn-modal btn-create cancel-btn"
                            style={{textDecoration: 'none'}}>
                            Cancel
                        </Link>
                </div>
            
        </form>
       
                        
    </div>
    )
}