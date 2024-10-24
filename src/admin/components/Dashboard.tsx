import '../../css/admin.css';
import { useEffect, useState } from 'react';
import TabsSection from './TabSection';
import CarsSection from './CarsSection';
import TeamSection from './TeamSection';
import Header from '../../components/Header';
import useFixed from '../../hooks/useFixed';
import OrderSection from './OrderSection';

export default function Dashboard() {
    const [tab, setTab] = useState('cars');
    const fixed = useFixed();

    const [newOrderCount, setNewOrderCount] = useState(0);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(`${process.env.REACT_APP_DEV_URL}/getOrders`);
            const orders = await response.json();

            const viewedOrders = JSON.parse(localStorage.getItem('viewedOrders') || '[]');

            const newOrders = orders.filter((order: any) => !viewedOrders.includes(order.id));

            setNewOrderCount(newOrders.length);
        };

        fetchOrders();
    }, []); 

    return (
        <>
            <Header fixed={fixed} />
            <main className="main-tabs">
                <h1 className="h1--admin">Dashboard</h1>

                <TabsSection
                    active={tab}
                    onChange={(current) => setTab(current)}
                    orderCount={newOrderCount}
                />

                {tab === 'cars' && <CarsSection />}
                {tab === 'team' && <TeamSection />}
                {tab === 'orders' && <OrderSection onNewOrderCount={(count) => setNewOrderCount(count)} />}
            </main>
        </>
    );
}
