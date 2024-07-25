import '../css/admin.css';
import { useAdmin } from '../context/adminContext';
import Button from './Button/Button';
import { useState } from 'react';
import TabsSection from './TabSection';
import CarsSection from './CarsSection';
import TeamSection from './TeamSection';

export default function Dashboard()  {
  const { user, logout} = useAdmin();
  const [hasError, setHasError] = useState(false)
  const [tab, setTab] = useState('cars')

  return (
    <>
      <header className='header-admin'>
        {user ? ( <p className='p'> User: {user} </p>) : (<p className='p'>Loading...</p>)}
        <Button isActive={!hasError} onClick={logout}>Logout</Button>
      </header>
      <main className='main-tabs'>
      <h1>Dashboard</h1>

      <TabsSection active={tab} onChange={(current) => setTab(current)} />

          {tab === 'cars' && <CarsSection />}

          {tab === 'team' && <TeamSection />}
      </main>
      
    </>
  );
}
