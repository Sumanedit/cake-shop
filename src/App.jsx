

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Customize from './pages/Customize';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return ( 
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Home />
              <Testimonials />
            </>} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
 
export default App;
