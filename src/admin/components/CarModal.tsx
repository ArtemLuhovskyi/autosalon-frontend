import { useEffect, useState } from 'react';
import '../../css/carModal.css';
import { ICars } from '../../interfaces/cars';
import { Link } from 'react-router-dom';
import GeneralInfoCar from './GeneralInfoCar';

interface CarModalProps {
    car: ICars | null;
    onClose: () => void;
    getAllCars: () => void;
}

export default function CarModal({ car, onClose, getAllCars }: CarModalProps) {
    const [title, setTitle] = useState(car?.title || '');
    const [description, setDescription] = useState(car?.description || '');
    const [price, setPrice] = useState(car?.price?.toString() || '');
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const href = car?.id ? `/admin/car/${car.id}` : '/admin/car/new';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        if (file) {
            formData.append('file', file);
        }
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
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
            throw new Error('Failed to submit car');
        }

        const result = await response.json();
        console.log('Car submitted successfully:', result);

        getAllCars();
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{car ? 'Edit Car' : 'Add Car'}</h2>
                <form onSubmit={handleSubmit}>
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
                        car={car} 
                    />
                    <div className="modal-actions">
                        <button
                            type="submit"
                            className="action-btn-modal"
                            style={{
                                backgroundColor: car ? '#faa60b' : '#1fc01f',
                            }}
                        >
                            {car ? 'Update' : 'Add'}
                        </button>
                        <Link
                            to={href}
                            style={{
                                backgroundColor: 'rgb(107 107 107)',
                                textDecoration: 'none',
                            }}
                            className="action-btn-modal"
                        >
                            More details
                        </Link>
                        <button
                            type="button"
                            className="action-btn-modal cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
