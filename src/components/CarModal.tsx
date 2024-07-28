import { useState } from 'react';
import '../css/carModal.css'
import { ICars } from '../interfaces/cars';

interface CarModalProps {
  car: ICars | null;
  onClose: () => void;
  getAllCars: () => void;
}

export default function CarModal({ car, onClose, getAllCars }: CarModalProps) {
  const [img, setImg] = useState(car?.img || '');
  const [title, setTitle] = useState(car?.title || '');
  const [description, setDescription] = useState(car?.description || '');
  const [price, setPrice] = useState(car?.price?.toString() || '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newCar = {
        id: car?.id,
        img,
        title,
        description,
        price: parseFloat(price),
    };

    const url = car
      ? `${process.env.REACT_APP_DEV_URL}/updateCar`
      : `${process.env.REACT_APP_DEV_URL}/addCar`;

    const method = car ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    });

    if (!response.ok) {
      throw new Error('Failed to submit car');
    }

    const result = await response.json();
    console.log('Car submitted successfully:', result);

    getAllCars();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{car ? 'Edit Car' : 'Add Car'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="img">Image URL:</label>
            <input
              type="text"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="action-btn" style={{backgroundColor: car ? '#faa60b' : '#1fc01f'}} >
              {car ? 'Update' : 'Add'}
            </button>
            <button type="button" className="action-btn cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}