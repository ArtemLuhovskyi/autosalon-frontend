import { useState } from "react";
import { ICars } from "../interfaces/cars";
import { useParams } from "react-router-dom";


const useCar = () => {
    const [carId, setCarId] = useState<number | null>(null);
    const [car, setCar] = useState<ICars | null>(null);
    const [cars, setCars] = useState<ICars[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    const useCarId = () => {
        const params = useParams();
        return Number(params.id);
    };

    const getAllCars = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/getCars`
        );
        const dataCars = await response.json();
        console.log('getAllCars: ', dataCars);
        setCars(dataCars.data);
        return dataCars;
    };

    const getCar = async (id: string) => {
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/getCarById`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }), 
            }
        );
        if (response.ok) {
            const data = await response.json();
            setCar(data.car); 
            console.log('getCar: ', data.car);
        } else {
            console.error('Failed to fetch car data');
        }
        return car;
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

    const getImgCar = (item: ICars) => {
        const url = item.images.find(
            (image) => image.img_type === 'main'
        )?.img_url;
        if (url) {
            return `${process.env.REACT_APP_DEV_URL}/${url}`;
        } else {
            return '';
        }
    };

    return({getAllCars, deleteCar, car, cars, error, isLoading, getImgCar, getCar, useCarId});
}

export default useCar;