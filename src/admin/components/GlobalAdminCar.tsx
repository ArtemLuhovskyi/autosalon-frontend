import { useEffect, useState } from "react";
import { ICars } from "../../interfaces/cars";
import GeneralInfoCar from "./GeneralInfoCar";
import useFixed from "../../hooks/useFixed";
import Header from "../../components/Header";
import AdditionalInfoCar from "./AdditionalInfoCar";

interface GlobalAdminCarProps {
    car: ICars | null;
}

export default function GlobalAdminCar({ car }: GlobalAdminCarProps) {
    const fixed = useFixed();

    const [title, setTitle] = useState(car?.title || '');
    const [description, setDescription] = useState(car?.description || '');
    const [price, setPrice] = useState(car?.price?.toString() || '');
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    function onAdmin() {

    }

    return(
    <div className="container">
        <Header fixed={fixed} />
        <h1 style={{marginTop: '75px'}}>{car ? `General Info car: ${car?.title}` : 'New car'}</h1>
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

            </div>
            <div className="modal-content">
                <h2>Additional info</h2>
                <AdditionalInfoCar
                car={car}
                title={title} 
                        setTitle={setTitle} 
                        description={description} 
                        setDescription={setDescription} 
                        price={price} 
                        setPrice={setPrice}
                        />
            </div>
        </div>
                <div className="btn-content">
                    <button
                            type="submit"
                            className="action-btn-modal btn-create"
                            style={{
                                backgroundColor: car ? '#faa60b' : '#1fc01f',
                            }}
                            >
                            {car ? 'Save' : 'Add'}
                        </button>
                        <button
                            type="button"
                            className="action-btn-modal btn-create cancel-btn"
                            onClick={onAdmin}
                        >
                            Cancel
                        </button>
                </div>
                        
    </div>
    )
}