import { MotionConfig } from 'framer-motion'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Numbers from './components/Numbers.jsx'
import ParallaxColumns from './components/ParallaxColumns.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { parallaxColumns } from './data/photos.js'

function App() {
  return (
    <MotionConfig reducedMotion='user'>
      <Navbar />
      <main>
        <Hero />
        <Numbers />
        <Portfolio />
        <About />
        <Services />
        <ParallaxColumns columns={parallaxColumns} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  )
}

export default App
