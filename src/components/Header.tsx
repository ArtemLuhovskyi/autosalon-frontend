import BurgerMenu from './BurgerMenu'; 
import logoUrl from '../img/logo.png';
import useBurger from '../hooks/useBurger';
import { useLocation } from 'react-router-dom';
import Button from './Button/Button';
import { useAdmin } from '../context/adminContext';
import { PiCarProfile } from "react-icons/pi";
import { useEffect, useState } from 'react';
import CarBasket from './CarBasket';
import { useCartContext } from '../context/cartContext';

const Header = ({ scrollToElements, fixed }: any) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const { cart } = useCartContext(); // Получаем данные корзины из контекста
    const isCarInCart = cart !== null; // Проверяем, есть ли машина в корзине


    // useEffect(() => {
    //     const savedCar = localStorage.getItem('cartCar');
    //     if (savedCar) {
    //         setCartCar(JSON.parse(savedCar));
    //     }
    // }, [ ]);


    const { isOpen, toggleMenu, handleLinkClick } = useBurger()
    const { user, logout, error} = useAdmin();
    const location = useLocation()
    const isAdminPage = location.pathname.includes('/admin')

    return (
        <header className={fixed ? 'header fixed' : 'header '} id="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src={logoUrl} alt="" />
                    </div>
                    <nav className={`nav ${isOpen ? 'show' : ''}`} id="nav">
                        {isAdminPage ? 
                            <>
                            <div style={{fontSize: '15px', textTransform: 'none'}} className='nav__link'> User: {user} </div>
                            <div className='nav__link'><Button isActive={!error} onClick={logout}>Logout</Button></div>
                            </>
                         : <>
                        <div onClick={() => { scrollToElements.mainScroll(); handleLinkClick(); }} className="nav__link">Головна</div>
                        <div onClick={() => { scrollToElements.autoScroll(); handleLinkClick();}} className="nav__link">Наші авто</div>
                        <div onClick={() => { scrollToElements.buyScroll(); handleLinkClick();}} className="nav__link">Придбати</div>
                        <div onClick={() => { scrollToElements.teamScroll(); handleLinkClick();}} className="nav__link">Наша команда</div>
                        <div onClick={() => { scrollToElements.interestingScroll(); handleLinkClick();}} className="nav__link">Цікаве про нас</div>
                        <div className="nav__link">
                            <PiCarProfile onClick={openModal} style={{color: cart ? 'rgb(14 255 0)' :'rgb(255 0 0)'}} size="40"  />
                        </div>
                        </>}
                            
                    </nav>
                    <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                    <CarBasket isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </header>
    );
};

export default Header;
