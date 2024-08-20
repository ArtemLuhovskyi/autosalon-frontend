import { useAdmin } from '../../context/adminContext';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalAdminCar from "../components/GlobalAdminCar";
import useCar from '../../hooks/useCar';

export default function EditCarPage() {
    const { isAuthenticated } = useAdmin();
    const navigate = useNavigate();
    const {car, getCar} = useCar();
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        if (car) {
            document.title = `${car.title}`;
        }
    }, [car]);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin');
        }
    }, [isAuthenticated, navigate]);
    useEffect(() => {
        if (id) {
            getCar(id);
        }
    }, [id]);
    

    
    return (
        <>
         {car ? (
                <GlobalAdminCar car={car} />
            ) : (
                <p>Loading...</p>
            )}
        </>
      

    )
}