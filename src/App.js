import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/game" element={<GamePage />} /> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
