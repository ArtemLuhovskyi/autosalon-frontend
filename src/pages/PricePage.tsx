import '../css/car.css';
import '../css/index.css';
import '../css/price.css';
import '../css/form.css';
import Footer from "../components/Footer";
import HeaderCar from "../components/HeaderCar";
import useFixed from "../hooks/useFixed";
import { useEffect, useState } from 'react';
import CarItem from '../components/CarItem';
import { ICars } from '../interfaces/cars';
import Button from '../components/Button/Button';

export default function PricePage() {
    const fixed = useFixed();
    const [cars, setCars] = useState<ICars[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('asc');

    const getAllCars = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/getCars`
        );
        const dataCars = await response.json();
        setCars(dataCars.data);
        return dataCars;
    };
    useEffect(() => {
        document.title = `Price list`;
        getAllCars();
    }, []);

    const filteredCars = cars
        .filter(car => 
            car.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => 
            sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );

    const resetFilters = () => {
        setSearchQuery('');
        setSortOrder('asc');
    };

    return (
    <>
        <HeaderCar title="Price list" fixed={fixed} />
        <div className="intro__price" id="intro"></div>
            <div className="price-list">
                <div className="container" style={{maxWidth: '1400px'}}>
                    <h1>Прайс-лист</h1>
                    <h3>На даний момент ми пропонуємо наступні автомобілі за такими цінами:</h3>
                    <div className="filter">
                    <h3>Фільтри</h3>
                    <div className="block">
                        <input 
                            type="text" 
                            placeholder="Пошук по назві..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                fontSize: '15px',
                            }}
                        />
                    </div>
                    <Button style={{padding: '0.5rem 1rem', marginRight: '0'}} onClick={() => setSortOrder('asc') } isActive={sortOrder === 'asc'} >
                        Від дешевих до дорогих
                    </Button>
                    <Button style={{padding: '0.5rem 1rem', marginRight: '0'}} onClick={() => setSortOrder('desc')} isActive={sortOrder === 'desc'} > 
                        Від дорогих до дешевих
                    </Button>
                    <Button style={{padding: '0.5rem 1rem', marginRight: '0'}} onClick={resetFilters} isActive={false} > 
                        Скинути фільтри
                    </Button>
                    </div>
                    
                    <div className="our-auto">
                    {filteredCars.map(car => (
                    <CarItem  key={car.id} {...car} />
                ))}
                </div> 
            </div>    
        </div>
        <Footer />
    </>
        
    )
}