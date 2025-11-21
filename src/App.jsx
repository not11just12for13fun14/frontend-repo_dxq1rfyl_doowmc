import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerBenefits from './components/PartnerBenefits';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1b3b] text-white">
      <Navbar />
      <Hero />
      <PartnerBenefits />
      <Services />
      <HowItWorks />
      <Partners />
      <Contact />
    </div>
  )
}

export default App
