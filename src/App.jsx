import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LendingPage from './Pages/LendingPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactPage';
import GetInTouchPage from './Pages/GetInTouchPage';
import TwoWheelerPage from './Pages/TwoWheelerPage';
import RickshawPage from './Pages/RickshawPage';
import ThreeWheelerPage from './Pages/ThreeWheelerPage';
import CareersPage from './Pages/CareersPage';
import PartnersPage from './Pages/PartnersPage';
import MobilityPage from './Pages/MobilityPage';
import InsurancePage from './Pages/InsurancePage';
import EcosystemPage from './Pages/EcosystemPage';
import TelematicsPage from './Pages/TelematicsPage';
import WorkshopPage from './Pages/WorkshopPage';
import MediaPage from './Pages/MediaPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lending" element={<LendingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='get-in-touch' element={<GetInTouchPage />} />
          <Route path='two-wheeler-loan' element={<TwoWheelerPage />} />
          <Route path='rickshaw-loan' element={<RickshawPage />} />
          <Route path='three-wheeler-loan' element={<ThreeWheelerPage />} />
          <Route path='careers' element={<CareersPage />} />
          <Route path='partners' element={<PartnersPage />} />
          <Route path='ev-fleet' element={<MobilityPage />} />
          <Route path='ev-insurance' element={<InsurancePage />} />
          <Route path='ev-ecosystem' element={<EcosystemPage />} />
          <Route path='ev-telematics' element={<TelematicsPage />} />
          <Route path='ev-workshop' element={<WorkshopPage />} />
          <Route path='media-room' element={<MediaPage />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
