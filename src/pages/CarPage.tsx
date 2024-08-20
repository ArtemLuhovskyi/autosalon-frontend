import '../css/car.css';
import '../css/index.css';
import GalleryCar from "../components/GalleryCar";
import CharacteristicsCar from "../components/CharacteristicsCar";
import DescriptionsCar from "../components/DescriptionsCar";
import Footer from "../components/Footer";
import HeaderCar from "../components/HeaderCar";
import useFixed from "../hooks/useFixed";
import useCarId from "../hooks/useCarId";
import { useEffect } from 'react';
import useCar from '../hooks/useCar';
import { useParams } from 'react-router-dom';


export default function CarPage() {
    const fixed = useFixed();
    const car = useCarId();

    const { getCar} = useCar();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        if (id) {
            getCar(id);
        }
    }, [id]);

    useEffect(() => {
        if (car) {
            document.title = `${car.title}`;
        }
    }, [car]);
    return (
        <>
        <HeaderCar  title={car?.title ?? ''} fixed={fixed} />
        <div className="intro__auto" style={{ backgroundImage: `url(${car?.additional_info?.hero_image})` }}  id="intro"></div>
        <div className="container--auto" id="auto">
            <h1>{car?.title}</h1>
            <div className="auto">
                <GalleryCar car={car} />
                <CharacteristicsCar />
            </div>
        </div>
        <DescriptionsCar car={car} />
        <Footer />
        </>
        
    )
}