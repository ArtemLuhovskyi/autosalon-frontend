import { useEffect, useState } from "react";
import { ICars } from "../../interfaces/cars";
import GeneralInfoCar from "./GeneralInfoCar";
import useFixed from "../../hooks/useFixed";
import Header from "../../components/Header";

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

    return(
    <div className="container">
        <Header fixed={fixed} />
        <h1 style={{marginTop: '75px'}}>General Info car: {car?.title}</h1>
        <div className="modal-content" style={{ textAlign: 'center' }}>
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
        
     </div>
    )
}