import '../css/car.css';
import '../css/index.css';
import '../css/price.css';
import Footer from "../components/Footer";
import HeaderCar from "../components/HeaderCar";
import useFixed from "../hooks/useFixed";
import { useEffect } from 'react';
import {dataCars, ICar} from '../data';
import CarItem from '../components/CarItem';

export default function PricePage() {
    const fixed = useFixed();
    
    useEffect(() => {
        document.title = `Price list`;
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
                    {dataCars.map(car => (
                    <CarItem key={car.id} {...car} />
                ))}
                </div> 
            </div>    
        </div>
        <Footer />
    </>
        
    )
}