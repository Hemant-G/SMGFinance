import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import SolutionsSection from '../Components/SolutionsSection'
import ImpactSection from '../Components/ImpactSection'
import SocialEconomicSection from '../Components/SocialEconomicSection'
import Footer from '../Components/Footer'



function HomePage() {
  return (
    <div >
       <div className="font-sans antialiased text-white bg-blue-950 overflow-x-hidden">
      <main>
        <HeroSection />
        <SolutionsSection />
        <ImpactSection />
        <SocialEconomicSection />
      </main>
    </div>
    </div>
  )
}

export default HomePage
