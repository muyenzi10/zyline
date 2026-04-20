import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/Home';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;