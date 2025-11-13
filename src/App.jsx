import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PestControl from './Pages/Services/pest-control';
//import HygieneControl from './Pages/Services/HygieneControl';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Pest Control route */}
        <Route path="/services/pest-control" element={<PestControl />} />
        {/* <Route path="/services/hygiene-control" element={<HygieneControl />} /> */}
        
      </Routes>
      <Footer />
    </>
  );
}

export default App
