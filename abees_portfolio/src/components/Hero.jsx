import { ArrowRight, Download, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import python from '../assets/python.svg'
import profile from '../assets/profile.png'
import django from '../assets/django.svg'
import react from '../assets/react.svg'
import mysql from '../assets/mysql.svg'
import postgresql from '../assets/postgresql.svg'

export default function Hero() {
  return (
    <section id="home" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              Available for opportunities
            </div>

            <div className="space-y-1">
              <p className="text-slate-400 font-mono text-sm sm:text-base">Hi, I'm Abees R</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">Developer</span>
              </h1>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              I build secure and scalable web applications using <strong className="text-white font-semibold">React.js</strong>, <strong className="text-white font-semibold">Django REST Framework</strong>, <strong className="text-white font-semibold">Python</strong>, with a strong focus on <strong className="text-white font-semibold">REST API development, database optimization, authentication, and performance.</strong>
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl border-l-2 border-brand-500/40 pl-3 py-0.5">
              I develop reliable backend systems and responsive frontend experiences with <strong className="text-white font-semibold">clean, maintainable, and production-focused code.</strong>
            </p>

            <div className="flex flex-wrap gap-3 pt-1 items-center">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-lg shadow-md shadow-brand-500/20 transition-all flex items-center gap-2"
            >
              View Projects <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
              <a href="/Abeesh_R_Full_Stack_Developer_Resume.pdf" download="Abeesh_R_Full_Stack_Developer_Resume.pdf" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white font-semibold text-sm rounded-lg border border-slate-800 transition-all flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>

            {/* Hero Social Connect Links */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Connect:</span>
              <a href="https://github.com/abees2004" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:text-brand-400 hover:bg-slate-800 transition-all border border-slate-700/50 flex items-center gap-2 text-xs font-mono font-semibold text-slate-200" aria-label="GitHub">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/abees-r-2a049a254/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:text-brand-400 hover:bg-slate-800 transition-all border border-slate-700/50 flex items-center gap-2 text-xs font-mono font-semibold text-slate-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:abeeshrj3@gmail.com" className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:text-brand-400 hover:bg-slate-800 transition-all border border-slate-700/50 flex items-center gap-2 text-xs font-mono font-semibold text-slate-200" aria-label="Email">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-cyan-500 rounded-2xl blur-xl opacity-20"></div>

              <div className="relative glass-panel rounded-2xl p-4 border border-slate-800 shadow-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">profile_overview.py</span>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 group">
                  <img
                    src={profile}
                    alt="Abees R - Full Stack Developer Profile Photo"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-slate-200 backdrop-blur-md shadow flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>INDIA</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-brand-400 backdrop-blur-md">
                      Full Stack Developer
                    </span>
                  </div>
                </div>

                <div className="font-mono text-[11px] text-slate-300 space-y-0.5 leading-relaxed bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-300">AbeesR</span>:</p>
                  <div className="pl-3 space-y-0.5">
                    <p><span className="text-brand-400">role</span> = <span className="text-emerald-300">"Full Stack Developer"</span></p>
                    <p><span className="text-brand-400">core</span> = [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Django REST"</span>, <span className="text-emerald-300">"PostgreSQL"</span>]</p>
                  </div>
                </div>

                <div className="pt-0.5 flex flex-wrap gap-1.5 items-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-slate-300">
                    <img src={react} alt="React" className="w-3 h-3" /> React
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-slate-300">
                    <img src={django} alt="Django" className="w-3 h-3 invert" /> Django
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-slate-300">
                    <img src={python} alt="Python" className="w-3 h-3" /> Python
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-slate-300">
                    <img src={postgresql} alt="PostgreSQL" className="w-3 h-3" /> PostgreSQL
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-slate-300">
                    <img src={mysql} alt="MySQL" className="w-3 h-3" /> MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
