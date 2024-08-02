import { useEffect, useState } from 'react';
import '../css/table-cars-section.css';
import TeamModal from './TeamModal';
import { ITeam } from '../interfaces/team';

export default function TeamSection() {
    const [team, setTeam] = useState<ITeam[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentTeam, setCurrentTeam] = useState<ITeam | null>(null);

    useEffect(() => {
        getAllTeam();
    }, []);

    const getAllTeam = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/getTeam`
        );
        const dataTeam = await response.json();
        console.log('getAllTeam: ', dataTeam);
        setTeam(dataTeam.data);
        return dataTeam;
    };

    const deleteTeam = async (id: number) => {
        const params = {
            id,
        };
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/deleteTeam`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to delete team');
        }

        const result = await response.json();
        await getAllTeam();
        return result;
    };

    const updateTeam = async (
        id: number,
        img: string,
        title: string,
        description: string
    ) => {
        const params = {
            id,
            img,
            title,
            description,
        };
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/updateTeam`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            }
        );
    };

    const addTeam = async (
        id: string,
        img: string,
        title: string,
        description: string
    ) => {
        const params = {
            img,
            title,
            description,
        };
        const response = await fetch(
            `${process.env.REACT_APP_DEV_URL}/addTeam`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            }
        );
    };

    const handleOpenModal = (team: ITeam | null) => {
        setCurrentTeam(team);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentTeam(null);
    };

    return (
        <div className="cars-section">
            <div className="add-car-block">
                <h2 className="add-cars-text">Team</h2>
                <button
                    className="action-btn add-cars-btn"
                    onClick={() => handleOpenModal(null)}
                    style={{ backgroundColor: '#1fc01f' }}
                >
                   + add team
                </button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((item: ITeam) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <img
                                        className="img-admin"
                                        src={process.env.REACT_APP_DEV_URL+item.img}
                                        alt="Image"
                                    />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button
                                        onClick={() => deleteTeam(item.id)}
                                        className="action-btn"
                                        style={{ backgroundColor: '#f24444' }}
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={() => handleOpenModal(item)}
                                        className="action-btn"
                                        style={{ backgroundColor: '#faa60b' }}
                                    >
                                        edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {team.length === 0 && (
                            <tr>
                                <td colSpan={6}>No team found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <TeamModal
                    team={currentTeam}
                    onClose={handleCloseModal}
                    getAllTeam={getAllTeam}
                />
            )}
        </div>
    );
}
