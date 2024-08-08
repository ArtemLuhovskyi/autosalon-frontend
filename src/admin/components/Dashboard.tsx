import '../../css/admin.css';
import { useState } from 'react';
import TabsSection from './TabSection';
import CarsSection from './CarsSection';
import TeamSection from './TeamSection';
import Header from '../../components/Header';
import useFixed from '../../hooks/useFixed';

export default function Dashboard() {
    const [tab, setTab] = useState('cars');
    const fixed = useFixed();

    return (
        <>
            <Header fixed={fixed} />
            <main className="main-tabs">
                <h1 className="h1--admin">Dashboard</h1>

                <TabsSection
                    active={tab}
                    onChange={(current) => setTab(current)}
                />

                {tab === 'cars' && <CarsSection />}
                {tab === 'team' && <TeamSection />}
            </main>
        </>
    );
}
