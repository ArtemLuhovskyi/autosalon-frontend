import '../css/car.css';
import '../css/index.css';
import '../css/price.css';
import Footer from "../components/Footer";
import HeaderCar from "../components/HeaderCar";
import useFixed from "../hooks/useFixed";
import { useEffect, useState } from 'react';
import CarItem from '../components/CarItem';
import { ICars } from '../interfaces/cars';

export default function PricePage() {
    const fixed = useFixed();
    const [cars, setCars] = useState<ICars[]>([]);

    const getAllCars = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/getCars`
        );
        const dataCars = await response.json();
        console.log('getAllCars: ', dataCars);
        setCars(dataCars.data);
        return dataCars;
    };
    useEffect(() => {
        document.title = `Price list`;
        getAllCars();
    }, []);
    return (
    <>
        <HeaderCar title="Price list" fixed={fixed} />
        <div className="intro__price" id="intro"></div>
            <div className="price-list">
                <div className="container">
                    <h1>Price list</h1>
                    <h3>Currently, we offer the following cars at the following prices (prices are indicated in different configurations):</h3>
                    <div className="our-auto">
                    {cars.map(car => (
                    <CarItem key={car.id} {...car} />
                ))}
                </div> 
            </div>    
        </div>
        <Footer />
    </>
        
    )
}