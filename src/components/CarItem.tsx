import { Link, useLocation  } from 'react-router-dom';
import { ICars } from '../interfaces/cars';
import { IGallery } from '../interfaces/gallery';

export default function CarItem(props: ICars) {

    const {id, title, description, price, images} = props
    const href = `/car/${id}`
    const location = useLocation()
    const isPricePage = location.pathname === '/price'

    function formatPrice(price: string): string {
        return price.replace(/\d+/g, (match) => {
            return new Intl.NumberFormat('en-US').format(parseInt(match, 10));
        });
    }
    const getImgCar = (images: IGallery[]) => {
        const url =  images.find(
          (image) => image.img_type === 'main'
      )?.img_url
      if (url) {
          return `${process.env.REACT_APP_DEV_URL}/${url}`;
      } else {
          return '';
      }
    };
    const priceCarString = `Price: from $${formatPrice(price.toString())} `

    return (
        <div className="our-auto__item">
            {isPricePage 
            ? <>
            <img className="our-auto__icon" src={getImgCar(images)} alt=""/>
            <h4 className="our-auto__title">{title}</h4>
            </>
            : 
            <Link to={href}>
                <img className="our-auto__icon" src={getImgCar(images)} alt=""/>
                <h4 className="our-auto__title">{title}</h4>
            </Link>}
            <div className="our-auto__text">
                {isPricePage ? priceCarString : description}
            </div>
            <div className="our-auto__text">
                {isPricePage ? <Link to={href} className="btn--blue btn--red">Read more</Link> : null}
            </div>
        </div>
    )
}