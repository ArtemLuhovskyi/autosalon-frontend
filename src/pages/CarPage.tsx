import '../css/car.css';
import '../css/index.css';
import GalleryCar from "../components/GalleryCar";
import CharacteristicsCar from "../components/CharacteristicsCar";
import DescriptionsCar from "../components/DescriptionsCar";
import Footer from "../components/Footer";
import HeaderCar from "../components/HeaderCar";
import useFixed from "../hooks/useFixed";
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCarContext } from '../context/carContext';
import { GalleryType, IGallery } from '../interfaces/gallery';


export default function CarPage() {
    const navigate = useNavigate();

    const fixed = useFixed();
    const [ images, setImages ] =  useState<IGallery[]>([]);
    const { car, getCar, getImagesByType} = useCarContext();
    const params = useParams();
    const id = params.id;

    const getImgCar = () => {
        let url = ''

        if (images && images.length > 0) {
            url =  images[0].img_url
        } 
        return `${process.env.REACT_APP_DEV_URL}/${url}`;
    };

    

    useEffect(() => {
        if (id) {
            const loadCar = async () => {
                const car = await getCar(id);
                if (!car) {
                    navigate('/404')
                }
            }
        loadCar();
        }
    }, [id]);

    useEffect(() => {
        if (car) {
            document.title = `${car.title}`;
            const imgs = getImagesByType(GalleryType.hero)
            setImages(imgs)
        }
    }, [car]);
    return (
        <>
        <HeaderCar  title={car?.title ?? ''} fixed={fixed} />
        <div className="intro__auto" style={{ backgroundImage: `url(${getImgCar()})`  }}  id="intro"></div>
        <div className="container--auto" id="auto">
            <h1>{car?.title}</h1>
            <div className="auto">
                <GalleryCar  />
                <CharacteristicsCar />
            </div>
        </div>
        <DescriptionsCar />
        <Footer />
        </>
        
    )
}