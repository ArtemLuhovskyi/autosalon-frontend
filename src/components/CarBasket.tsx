import { IoCarOutline } from "react-icons/io5";
import '../css/basket.css';
import { useCarContext } from '../context/carContext';
import { useCartContext } from '../context/cartContext';
import Button from '../components/Button/Button';

function CarBasket({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { formatPrice} = useCarContext();

    const { cart, removeCarFromCart } = useCartContext(); 
    const cartCar = cart; 

    const priceCarBasket = cartCar ? `$${formatPrice(cartCar.price.toString())}` : '';

    const handleRemoveCar = () => {
        removeCarFromCart(); 
        onClose(); 
    };

    return (
        <div className={`car__basket ${isOpen ? 'open' : ''}`} style={{textTransform: 'none'}}>
            <div className="car__basket--content">
                <button className='car__basket--close' onClick={onClose}>&times;</button>
                {cartCar ? (
                    <>
                        <h2 className='h2--basket' style={{fontSize: '24px'}}>Бажане авто</h2>
                        <h2 className='h2--basket'>{cartCar.title}</h2> 
                        {cartCar.images && cartCar.images.length > 0 ? (
                            <img 
                                src={`${process.env.REACT_APP_DEV_URL}/${cartCar.images[0]?.img_url}`} 
                                alt={cartCar.title} 
                            />
                        ) : (
                            <p className='p--not--car'>Зображення загубилось</p>
                        )}
                        <p className='p--basket'>{cartCar.description}</p>
                        <p className='p--basket'>Ціна: {priceCarBasket}</p>
                        <Button
                        style={{marginTop: '10px'}}
                            isActive={false}
                            onClick={handleRemoveCar}
                            >
                            Видалити з кошика  
                        </Button>
                        
                    </>
                ) : (
                    <>
                        <IoCarOutline size="200" style={{}} color="rgb(255 33 33)" />
                        <p className='p--not--car'>Ще нема бажаного авто</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default CarBasket;