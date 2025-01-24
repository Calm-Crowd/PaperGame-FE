import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import RajaRani from './Pages/RajaRani/RajaRani';
import TrumpCard from './Pages/TrumpCard/TrumpCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/raja-rani" element={<RajaRani />} />
          <Route path="/trump-card" element={<TrumpCard />} />

          {/* <Route path="/game" element={<GamePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
