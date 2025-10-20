import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PestControl from './Pages/Services/pest-control';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/services/pest-control" element={<PestControl />} />
        <Route path="/services/fire-risk-consulting" element={
          <div className="p-8">
            <h1 className="text-3xl font-bold">Fire Risk Consulting</h1>
            <p className="mt-4">This is the Fire Risk Consulting service page.</p>
          </div>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
