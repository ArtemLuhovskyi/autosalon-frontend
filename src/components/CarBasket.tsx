import { IoCarOutline } from "react-icons/io5";
import '../css/basket.css';
import { useCartContext } from '../context/cartContext';

function CarBasket({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { cart, removeCarFromCart } = useCartContext(); // Используем контекст корзины
    const cartCar = cart; // Корзина хранит только одну машину

    const priceCarBasket = cartCar ? `$${cartCar.price.toString()}` : '';

    const handleRemoveCar = () => {
        removeCarFromCart(); // Удалить машину из корзины
        onClose(); // Закрыть модальное окно
    };

    return (
        <div className={`car__basket ${isOpen ? 'open' : ''}`}>
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
                        <button onClick={handleRemoveCar}>
                            Видалити з кошика
                        </button>
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