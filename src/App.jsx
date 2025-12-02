import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import VolsVideSection from './components/sections/VolsVideSection'
import AvantagesSection from './components/sections/AvantagesSection'
import FonctionnementSection from './components/sections/FonctionnementSection'
import PartenairesSection from './components/sections/PartenairesSection'
import TarifsSection from './components/sections/TarifsSection'
import FaqSection from './components/sections/FaqSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VolsVideSection />
      
      <AvantagesSection />
      <FonctionnementSection />
      <PartenairesSection />
      <TarifsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App