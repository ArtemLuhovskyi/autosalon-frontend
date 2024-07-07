import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CarPage from './pages/CarPage';
import PricePage from './pages/PricePage';
import BuyPage from './pages/BuyPage';
import ConnectionPage from './pages/ConnectionPage';
import TestDrivePage from './pages/TestDrivePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car/:id" element={<CarPage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/connection" element={<ConnectionPage />} />
      <Route path="/testdrive" element={<TestDrivePage />} />
    </Routes>
  )
}

export default App;
