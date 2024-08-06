import { useEffect, useState } from 'react';
import '../css/table-cars-section.css';
import { ICars } from '../interfaces/cars';
import CarModal from './CarModal';

export default function CarsSection() {
    const [cars, setCars] = useState<ICars[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentCar, setCurrentCar] = useState<ICars | null>(null);

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/getCars`
        );
        const dataCars = await response.json();
        console.log('getAllCars: ', dataCars);
        setCars(dataCars.data);
        return dataCars;
    };

    const deleteCar = async (id: number) => {
        const params = {
            id,
        };
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/deleteCar`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to delete car');
        }

        const result = await response.json();
        await getAllCars();
        return result;
    };

    const handleOpenModal = (car: ICars | null) => {
        setCurrentCar(car);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentCar(null);
    };

    const getImgCar = (item: ICars) => {
        const url =  item.images.find(
          (image) => image.img_type === 'main'
      )?.img_url
      if (url) {
          return `${process.env.REACT_APP_DEV_URL}/${url}`;
      } else {
          return '';
      }
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
