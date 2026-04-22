
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './Pages/About';
function App() {
  return (
    <div className="app-wrapper">
      <Navbar/>

      <main className="main-content">
        <Routes>
          
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
<Footer/>
      
    </div>
  );
}

export default App;