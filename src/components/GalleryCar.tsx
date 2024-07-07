import { ICar } from "../data"

export default function GalleryCar({car}: {car: ICar | undefined}) {
    return (
    <>
            <div className="auto--left">
                <h2>Фотогалерея</h2>
                <div className="auto-gallery">
                    {car?.additional_info?.images_gallery.map((item, index) => (
                        <div key={index} className="auto-gallery__item">
                            <img src={item} alt="" className="auto-item"/>
                        </div>
                    ))}
            </div>
        </div>

    </>
    )
}