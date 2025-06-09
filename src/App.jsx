import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LendingPage from './Pages/LendingPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactPage';


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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
