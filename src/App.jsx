import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import GitHub from './sections/GitHub'
import Contact from './sections/Contact'
import TravelingName from './components/TravelingName'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <GitHub />
        <Contact />
      </main>
      <Footer />
      <TravelingName />
    </>
  )
}
