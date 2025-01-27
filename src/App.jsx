

import About from './Componets/About'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'
import Hero from './Componets/Hero'
import Navbar from './Componets/Navbar'
import ParticleBackground from './Componets/particle'
import Projects from './Componets/Projects'
import Testimonials from './Componets/Testimonials'

function App() {
 

  return (
    <>
    <ParticleBackground/>
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
