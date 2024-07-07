import { ICar } from "../data"

export default function CharacteristicsCar({car}: {car: ICar | undefined}) {
    return (
    <>
        <div className="auto--right">
                <h2>Характеристики</h2>
                <div className="auto--table" dangerouslySetInnerHTML={{ __html: car?.additional_info?.characteristics_table || "" }} />
            </div>
    </>
    )
}