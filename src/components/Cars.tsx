import {dataCars, ICar} from '../data';
import CarItem from './CarItem';
import React, { forwardRef } from 'react';

const Cars = forwardRef<HTMLDivElement>((props, ref) => {

    return (
            <div ref={ref} className="container " id="our-auto">
                <h2 className="h2-auto">Наші авто</h2>
                <div className="our-auto">
                {dataCars.map(car => (
                    <CarItem key={car.id} {...car} />
                ))}
                </div>
            </div>
    )
})

export default Cars;