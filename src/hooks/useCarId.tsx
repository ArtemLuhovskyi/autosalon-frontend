import { useParams } from 'react-router-dom';
import { dataCars } from '../data';

const useCarId = () => {
    const params = useParams();
    const id = params.id;
    const car = dataCars.find(car => car.id === Number(id));

    return car;
};

export default useCarId;
