import { useEffect, useState } from 'react';
import '../../css/table-cars-section.css';
import { ICars } from '../../interfaces/cars';
import CarModal from './CarModal';
import useCar from '../../hooks/useCar';

export default function CarsSection() {
    const {getAllCars, deleteCar, car, cars, error, isLoading, getImgCar} = useCar();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentCar, setCurrentCar] = useState<ICars | null>(null);

    useEffect(() => {
        getAllCars();
    }, []);

    const handleOpenModal = (car: ICars | null) => {
        setCurrentCar(car);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentCar(null);
    };

    return (
        <div className="cars-section">
            <div className="add-car-block">
                <h2 className="add-cars-text">Cars</h2>
                <button
                    className="action-btn add-cars-btn"
                    onClick={() => handleOpenModal(null)}
                    style={{ backgroundColor: '#1fc01f' }}
                >
                    + add car
                </button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((item: ICars) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <img
                                        className="img-admin"
                                        src={getImgCar(item)}
                                        alt="Image"
                                    />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button
                                        onClick={() => deleteCar(item.id)}
                                        className="action-btn"
                                        style={{ backgroundColor: '#f24444' }}
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={() => handleOpenModal(item)}
                                        className="action-btn"
                                        style={{ backgroundColor: '#faa60b' }}
                                    >
                                        edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {cars.length === 0 && (
                            <tr>
                                <td colSpan={6}>No cars found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <CarModal
                    car={currentCar}
                    onClose={handleCloseModal}
                    getAllCars={getAllCars}
                />
            )}
        </div>
    );
}
