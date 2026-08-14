import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'glass-panel border-slate-800/80 shadow-lg' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center space-x-2.5 group cursor-pointer"
          >
            <span className="font-bold text-base sm:text-lg tracking-tight text-brand-400 group-hover:text-white transition-colors">
              Abees R
            </span>
          </a>

          {/* <!-- Desktop Navigation --> */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')} 
              className="px-3 py-2 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')} 
              className="px-3 py-2 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')} 
              className="px-3 py-2 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md transition-colors cursor-pointer"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')} 
              className="px-3 py-2 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md transition-colors cursor-pointer"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')} 
              className="px-3 py-2 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="px-3 py-2 text-slate-300 hover:text-brand-400 hover:bg-slate-800/50 rounded-md transition-colors cursor-pointer"
            >
              Contact
            </a>
            <a 
              href="#resume" 
              onClick={(e) => scrollToSection(e, 'resume')} 
              className="ml-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 text-brand-400 hover:bg-brand-500 hover:text-white rounded-md font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <i class="fa-regular fa-file-lines text-sm"></i> Resume
            </a>
          </nav>

          {/* <!-- Mobile Menu Button --> */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <i class="fa-solid fa-xmark text-xl w-6 h-6 flex items-center justify-center"></i>
              ) : (
                <i class="fa-solid fa-bars text-xl w-6 h-6 flex items-center justify-center"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Navigation Drawer --> */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')} 
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-400 cursor-pointer"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')} 
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-400 cursor-pointer"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => scrollToSection(e, 'skills')} 
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-400 cursor-pointer"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, 'experience')} 
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-400 cursor-pointer"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')} 
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-400 cursor-pointer"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-400 cursor-pointer"
          >
            Contact
          </a>
          <a 
            href="#resume" 
            onClick={(e) => scrollToSection(e, 'resume')} 
            className="block px-3 py-2 rounded-md text-base font-semibold text-brand-400 bg-brand-500/10 border border-brand-500/20 text-center cursor-pointer"
          >
            View Resume
          </a>
        </div>
      )}
    </header>
  )
}