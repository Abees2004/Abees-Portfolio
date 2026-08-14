import { Cpu } from 'lucide-react'
import python from '../assets/python.svg'
import java from '../assets/java.svg'
import php from '../assets/php.svg'
import cplusplus from '../assets/c++.svg'
import javascript from '../assets/javascript.svg'
import html from '../assets/html5.svg'
import css from '../assets/css3.svg'
import django from '../assets/django.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import postgresql from '../assets/postgresql.svg'
import mysql from '../assets/mysql.svg'
import git from '../assets/git.svg'
import postman from '../assets/postman.svg'
import vscode from '../assets/vscode.svg'

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        <div className="space-y-3 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Tech Stack &amp; Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Skills &amp; Technical Toolkit</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">Categorized overview of backend systems, frontend UI design, data architecture, and workflow tooling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 01. Languages & Core */}
          <div className="skill-card glass-panel p-7 rounded-2xl border border-slate-800/90 relative group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-500/10 border border-brand-500/30 text-brand-400 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-code text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Languages &amp; Logic</h3>
                    <p className="text-slate-400 font-mono text-xs">Core Programming</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20">01</span>
              </div>

              <div className="space-y-4 pt-2">
                {/* Python */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={python} alt="Python" className="w-5 h-5" /> Python
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full w-[90%]"></div>
                  </div>
                </div>
                {/* Java */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={java} alt="Java" className="w-5 h-5" /> Java
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full w-[80%]"></div>
                  </div>
                </div>
                {/* PHP */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={php} alt="PHP" className="w-5 h-5" /> PHP
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full w-[80%]"></div>
                  </div>
                </div>
                {/* C++ */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={cplusplus} alt="C++" className="w-5 h-5" /> C++
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full w-[78%]"></div>
                  </div>
                </div>
                {/* JavaScript */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={javascript} alt="JavaScript" className="w-5 h-5 rounded-sm" /> JavaScript (ES6+)
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mt-4">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <img src={html} alt="HTML5" className="w-4 h-4" /> HTML5
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <img src={css} alt="CSS3" className="w-4 h-4" /> CSS3
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-database text-brand-400 text-sm"></i> SQL
              </span>
            </div>
          </div>

          {/* 02. Backend Engineering */}
          <div className="skill-card glass-panel p-7 rounded-2xl border border-slate-800/90 relative group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-server text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Backend Engineering</h3>
                    <p className="text-slate-400 font-mono text-xs">Frameworks &amp; APIs</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">02</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={django} alt="Django" className="w-5 h-5 invert" /> Django &amp; DRF
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full w-[92%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <i className="fa-solid fa-network-wired text-emerald-400 text-base"></i> RESTful APIs
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={django} alt="Django ORM" className="w-5 h-5 invert" /> Django ORM
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mt-4">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-key text-emerald-400 text-sm"></i> JWT Auth
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-user-shield text-emerald-400 text-sm"></i> RBAC
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-emerald-400 text-sm"></i> Middleware
              </span>
            </div>
          </div>

          {/* 03. Frontend Development */}
          <div className="skill-card glass-panel p-7 rounded-2xl border border-slate-800/90 relative group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-desktop text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Frontend Development</h3>
                    <p className="text-slate-400 font-mono text-xs">UI &amp; State Management</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">03</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={react} alt="React" className="w-5 h-5" /> React.js
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={redux} alt="Redux" className="w-5 h-5" /> Redux Toolkit
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full w-[78%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={tailwindcss} alt="Tailwind CSS" className="w-5 h-5" /> Tailwind CSS
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mt-4">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-right-left text-cyan-400 text-sm"></i> Axios
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <img src={react} alt="React Hooks" className="w-4 h-4" /> React Hooks
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-cubes text-cyan-400 text-sm"></i> DOM Handling
              </span>
            </div>
          </div>

          {/* 04. Database Systems */}
          <div className="skill-card glass-panel p-7 rounded-2xl border border-slate-800/90 relative group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-database text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Database Architecture</h3>
                    <p className="text-slate-400 font-mono text-xs">Relational Storage</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-purple-400 font-semibold bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">04</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={postgresql} alt="PostgreSQL" className="w-5 h-5" /> PostgreSQL
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={mysql} alt="MySQL" className="w-5 h-5" /> MySQL
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full w-[82%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mt-4">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-gauge-high text-purple-400 text-sm"></i> Query Tuning
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-list-ol text-purple-400 text-sm"></i> Indexing
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-bolt-lightning text-purple-400 text-sm"></i> N+1 Fixes
              </span>
            </div>
          </div>

          {/* 05. Developer Tools */}
          <div className="skill-card glass-panel p-7 rounded-2xl border border-slate-800/90 relative group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30 text-yellow-400 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-wrench text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Tools &amp; Workflow</h3>
                    <p className="text-slate-400 font-mono text-xs">Version &amp; Testing</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-yellow-400 font-semibold bg-yellow-500/10 px-2.5 py-1 rounded-md border border-yellow-500/20">05</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={git} alt="Git" className="w-5 h-5" /> Git &amp; GitHub
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-300 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <img src={postman} alt="Postman" className="w-5 h-5" /> Postman Testing
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-300 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mt-4">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <img src={vscode} alt="VS Code" className="w-4 h-4" /> VS Code
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-credit-card text-blue-400 text-sm"></i> Razorpay API
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <img src={python} alt="VirtualEnv" className="w-4 h-4" /> VirtualEnv
              </span>
            </div>
          </div>

          {/* 06. Software Paradigms */}
          <div className="skill-card glass-panel p-7 rounded-2xl border border-slate-800/90 relative group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 border border-rose-500/30 text-rose-400 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-code-branch text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Software Paradigms</h3>
                    <p className="text-slate-400 font-mono text-xs">Methodology &amp; Design</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-rose-400 font-semibold bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">06</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <i className="fa-solid fa-cubes text-rose-400 text-base"></i> Object-Oriented Programming
                    </span>
                    <span className="text-slate-400 text-xs">Advanced</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-white text-sm font-bold flex items-center gap-2.5">
                      <i className="fa-solid fa-arrows-rotate text-rose-400 text-base"></i> Agile Methodology
                    </span>
                    <span className="text-slate-400 text-xs">Proficient</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80 mt-4">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-sitemap text-rose-400 text-sm"></i> MVC/MVT Pattern
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/90 text-white font-bold text-xs font-mono border border-slate-700/80 inline-flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-rose-400 text-sm"></i> DRY Principles
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
