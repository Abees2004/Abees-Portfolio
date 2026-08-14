import Header from './components/Header'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Education from './components/Education'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-bg text-slate-200 font-sans antialiased selection:bg-brand-500 selection:text-white relative bg-grid-pattern">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Education />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  )
}

export default App

