import { ICar } from "../data"

export default function DescriptionsCar({car}: {car: ICar | undefined}) {
    const descriptions = car?.additional_info?.descriptions


    return (
    <>
    <div className="auto--info line">
        <div className="container">
            <div className="auto--info__inner">
                <div className="auto--info__title h2-auto">Опис</div>

    {descriptions?.map((description, index) => {
        return (
            <div key={index}>
                <div className="auto--info__text">
                    {description.text}
                </div>
                {description.images?.length ? 
                (<div className="auto--info__block-img">
                    {description.images?.map((image, index) => {
                            return <img key={index}  className="auto--info__img auto-gallery__item auto-item" src={image} alt="Image" />
                        })}
                </div>) 
                : null}
            </div>
        )})
    }
            </div>
        </div>
    </div>

    </>
    )
}