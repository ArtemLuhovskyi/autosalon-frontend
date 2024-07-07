import BurgerMenu from './BurgerMenu'; 
import logoUrl from '../img/logo.png';
import useBurger from '../hooks/useBurger';

const Header = ({ scrollToElements, fixed }: any) => {
  const { isOpen, toggleMenu, handleLinkClick } = useBurger()
  
    return (
        <header className={fixed ? 'header fixed' : 'header '} id="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src={logoUrl} alt="" />
                    </div>
                    <nav className={`nav ${isOpen ? 'show' : ''}`} id="nav">
                        <div onClick={() => { scrollToElements.mainScroll(); handleLinkClick(); }} className="nav__link">Головна</div>
                        <div onClick={() => { scrollToElements.autoScroll(); handleLinkClick();}} className="nav__link">Наші авто</div>
                        <div onClick={() => { scrollToElements.buyScroll(); handleLinkClick();}} className="nav__link">Придбати</div>
                        <div onClick={() => { scrollToElements.teamScroll(); handleLinkClick();}} className="nav__link">Наша команда</div>
                        <div onClick={() => { scrollToElements.interestingScroll(); handleLinkClick();}} className="nav__link">Цікаве про нас</div>
                    </nav>
                    <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header;
