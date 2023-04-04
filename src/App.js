import './App.css';
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Services } from './pages/services/Services';
import { AboutUs } from './pages/about-us/AboutUs';
import { ServiceCategory } from './pages/services/ServiceCategory';
import { ServiceSingle } from './pages/services/ServiceSingle';
import { Contact } from './pages/contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceCategory />} />
          <Route path="/services/:id/:id" element={<ServiceSingle />} />
          <Route path="/o-nama" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
