import React, { useEffect, useState } from "react";
import useCar from "../hooks/useCar";
import { useParams } from "react-router-dom";

export default function CharacteristicsCar() {
    const { car, getCar} = useCar();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        if (id) {
            getCar(id);
        }
    }, [id]);

    console.log('additional : ', car);
    

    return (
    <>
        <div className="auto--right">
                <h2>Характеристики</h2>
                <div className="auto--table">
                    <table cellSpacing="1">
                        <tbody>
                            {car?.additional_info && car.additional_info.length > 0 ? (
                                car?.additional_info?.map((item, index) => (
                                    <>
                                        <tr key={index} className="first-row-table">
                                            <th className="red-text-table" style={{width: '80%'}} colSpan={2}>{item.title}</th>
                                        </tr>
                                        <>{item.characteristics.map((characteristic, index) => (
                                                <tr key={index} >
                                                    <td className="title-table">{characteristic.name}</td>
                                                    <td>{characteristic.value}</td>
                                                </tr>
                                            ))}</>
                                        </>
                                    ))
                            ) : (
                                <tr>
                                    <td className="title-table" colSpan={2} style={{textAlign: 'center'}} >Нема характеристик</td>
                                </tr>
                            )}
                        </tbody>
                    </table> 
                </div>
        </div>
    </>
    )
}