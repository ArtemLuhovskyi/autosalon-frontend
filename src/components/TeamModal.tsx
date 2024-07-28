import { useState } from 'react';
import '../css/carModal.css'
import { ITeam } from '../interfaces/team';

interface TeamModalProps {
  team: ITeam | null;
  onClose: () => void;
  getAllTeam: () => void;
}

export default function TeamModal({ team, onClose, getAllTeam }: TeamModalProps) {
  const [img, setImg] = useState(team?.img || '');
  const [title, setTitle] = useState(team?.title || '');
  const [description, setDescription] = useState(team?.description || '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTeam = {
        id: team?.id,
        img,
        title,
        description
    };

    const url = team
      ? `${process.env.REACT_APP_DEV_URL}/updateTeam`
      : `${process.env.REACT_APP_DEV_URL}/addTeam`;

    const method = team ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTeam),
    });

    if (!response.ok) {
      throw new Error('Failed to submit team');
    }

    const result = await response.json();
    console.log('team submitted successfully:', result);

    getAllTeam();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{team ? 'Edit team' : 'Add team'}</h2>
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
          <div className="modal-actions">
            <button type="submit" className="action-btn" style={{backgroundColor: team ? '#faa60b' : '#1fc01f'}} >
              {team ? 'Update' : 'Add'}
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