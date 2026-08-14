import { Webhook, KeyRound, CreditCard } from 'lucide-react'
import python from '../assets/python.svg'
import django from '../assets/django.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import postgresql from '../assets/postgresql.svg'
import mysql from '../assets/mysql.svg'
import git from '../assets/git.svg'
import postman from '../assets/postman.svg'
import github from '../assets/github.svg'

export default function TechStrip() {
  return (
    <section className="py-10 border-y border-slate-800/50 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">Technologies I Work With</p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={python} alt="Python" className="w-4 h-4" /> Python
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={javascript} alt="JavaScript" className="w-4 h-4 rounded-sm" /> JavaScript
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={react} alt="React.js" className="w-4 h-4" /> React.js
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={redux} alt="Redux" className="w-4 h-4" /> Redux
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={django} alt="Django" className="w-4 h-4 invert" /> Django
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={django} alt="Django REST Framework" className="w-4 h-4 invert" /> Django REST Framework
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={postgresql} alt="PostgreSQL" className="w-4 h-4" /> PostgreSQL
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={mysql} alt="MySQL" className="w-4 h-4" /> MySQL
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <Webhook className="w-4 h-4 text-brand-400" /> REST APIs
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-emerald-400" /> JWT
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={git} alt="Git" className="w-4 h-4" /> Git
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={github} alt="GitHub" className="w-4 h-4 invert" /> GitHub
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <img src={postman} alt="Postman" className="w-4 h-4" /> Postman
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 hover:text-white transition-all cursor-default flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-blue-400" /> Razorpay
          </span>
        </div>
      </div>
    </section>
  )
}
