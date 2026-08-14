import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-400 font-mono font-bold text-sm">AR</div>
              <span className="font-bold text-white text-lg">Abees R</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Building scalable web applications with React.js, Django REST Framework, and relational databases.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-brand-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-brand-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a>
            <a href="#resume" className="hover:text-brand-400 transition-colors">Resume</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/abees2004" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded bg-slate-900 hover:text-white transition-colors border border-slate-800" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/abees-r-2a049a254/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded bg-slate-900 hover:text-white transition-colors border border-slate-800" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:abeeshrj3@gmail.com" className="p-2.5 rounded bg-slate-900 hover:text-white transition-colors border border-slate-800" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Abees R. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with React.js &amp; Vite</p>
        </div>
      </div>
    </footer>
  )
}
