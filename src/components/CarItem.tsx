import {dataCars, ICar} from '../data';
import { Link, useLocation  } from 'react-router-dom';
export default function CarItem(props: ICar) {
    const {id, img, title, decription, price} = props
    const href = `/car/${id}`
    const location = useLocation()
    const isPricePage = location.pathname === '/price'

    function formatPrice(price: string): string {
        return price.replace(/\d+/g, (match) => {
            return new Intl.NumberFormat('en-US').format(parseInt(match, 10));
        });
    }

    const priceCarString = price.length > 1 
     ?  `Price: from $${formatPrice(price[0].toString())} to $${formatPrice(price[1].toString())}`
     : `Price: from $${formatPrice(price[0].toString())} `

    return (
        <div className="our-auto__item">
            {isPricePage 
            ? <>
            <img className="our-auto__icon" src={img} alt=""/>
            <h4 className="our-auto__title">{title}</h4>
            </>
            : 
            <Link to={href}>
                <img className="our-auto__icon" src={img} alt=""/>
                <h4 className="our-auto__title">{title}</h4>
            </Link>}
            <div className="our-auto__text">
                {isPricePage ? priceCarString : decription}
            </div>
            <div className="our-auto__text">
                {isPricePage ? <Link to={href} className="btn--blue">Read more</Link> : null}
            </div>
        </div>
    )
}