// Updated src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JointReplacement from './pages/JointReplacement';
import SportInjury from './pages/SportInjury';
import ACLSurgery from './pages/ACLSurgery';
import GFCTherapy from './pages/GFCTherapy';
import ShoulderTreatment from './pages/ShoulderTreatment';
import FracturesTrauma from './pages/FracturesTrauma';
import AboutUs from './pages/AboutUs';  // New
import ContactUs from './pages/ContactUs';  // New
import Rehabilitation from './pages/Rehabilitation';  // New

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joint-replacement" element={<JointReplacement />} />
            <Route path="/sport-injury" element={<SportInjury />} />
            <Route path="/acl-surgery" element={<ACLSurgery />} />
            <Route path="/gfc-therapy" element={<GFCTherapy />} />
            <Route path="/shoulder-joint-treatment" element={<ShoulderTreatment />} />
            <Route path="/fractures-and-trauma" element={<FracturesTrauma />} />
            <Route path="/about-us" element={<AboutUs />} />  
            <Route path="/contact-us" element={<ContactUs />} /> 
            <Route path="/rehabilitation" element={<Rehabilitation />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;