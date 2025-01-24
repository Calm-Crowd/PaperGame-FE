import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LandingPage from './pages/LandingPage';
import RajaRaniGame from './pages/RajaRaniGame';
import ComingSoon from './pages/RajaRaniGame/ComingSoon';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Raja-Rani-Manthri-Sipai" element={<RajaRaniGame/>}/>
          <Route path="/Coming-Soon" element={<ComingSoon/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
