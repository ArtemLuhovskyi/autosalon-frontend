import logoUrl from '../img/logo.png'
import {Link} from 'react-router-dom'
import BurgerMenu from './BurgerMenu';
import useBurger from '../hooks/useBurger';
export default function HeaderCar({ fixed, title }:{fixed: boolean, title: string}) {
    
    const { isOpen, toggleMenu } = useBurger()

  return (
    <header className={fixed ? 'header fixed' : 'header '} id="header">
    <div className="container">
        <div className="header__inner">
            <div className="header__logo">
                <Link to="/">
                    <img src={logoUrl} alt=""/>
                </Link>
            </div>
            <nav className={`nav ${isOpen ? 'show' : ''}`} id="nav">
              <Link to="/" className="nav__link ">← Повернутись до автосалону</Link>
              <div className="nav__link active">{title}</div>
            </nav>
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    </div>
</header>
  )
}