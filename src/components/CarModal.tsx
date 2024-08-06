import { useEffect, useState } from 'react';
import '../css/carModal.css'
import { ICars } from '../interfaces/cars';
import ImagePreview from './ImagePreview';

interface CarModalProps {
  car: ICars | null;
  onClose: () => void;
  getAllCars: () => void;
}

export default function CarModal({ car, onClose, getAllCars }: CarModalProps) {
  const [title, setTitle] = useState(car?.title || '');
  const [description, setDescription] = useState(car?.description || '');
  const [price, setPrice] = useState(car?.price?.toString() || '');
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    if (car?.images && car.images.length > 0) {
      const mainImage = car.images.find((image) => image.img_type === 'main');
      if (mainImage) {
        setFileName(mainImage.img_url.split('/').pop() || null);
      }
    }
  }, [car]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    if (car) {
      formData.append('id', car.id.toString());
    }

    const url = car
      ? `${process.env.REACT_APP_DEV_URL}/updateCar`
      : `${process.env.REACT_APP_DEV_URL}/addCar`;

    const method = car ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      body: formData,
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
            <label htmlFor="file">Image:</label>
            <label className="file-label" htmlFor="file">
            {file ? file.name : fileName || 'Choose Car'}
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                setFile(e.target.files ? e.target.files[0] : null);
                setFileName(e.target.files ? e.target.files[0].name : null);
              }}
              required={!car}
            />
          </div>
          <ImagePreview
            file={file}
            handleFileRemove={() => {
              setFile(null);
              setFileName(null);
            }}
            imageUrl={fileName ? `${process.env.REACT_APP_DEV_URL}/images/cars/${car?.id}/${fileName}` : undefined}
          />
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
            <button type="submit" className="action-btn-modal" style={{backgroundColor: car ? '#faa60b' : '#1fc01f'}} >
              {car ? 'Update' : 'Add'}
            </button>
            <button type="button" className="action-btn-modal cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}