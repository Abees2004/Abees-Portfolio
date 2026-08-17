import { ChevronRight } from 'lucide-react'
import { Github } from './BrandIcons'
import fooddelivery from '../assets/fooddeliverymain.avif'
import multiservice from '../assets/multiservicemain.avif'
import turfbooking from '../assets/turfbookingmain.avif'

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="space-y-3 text-center">
          <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Web applications built with React, Django, Django REST Framework, and relational databases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PROJECT 01: FOOD DELIVERY SYSTEM */}
          <div className="project-card glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between h-full">
            <div>
              <div className="bg-slate-900 border-b border-slate-800">
                <div className="px-4 py-2.5 bg-slate-950 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">food-delivery.app</span>
                </div>
                <div className="relative aspect-[16/10] img-zoom-container bg-slate-950">
                  <img src={fooddelivery} alt="Food Delivery System Application Interface Screenshot" className="w-full h-full object-cover object-top filter brightness-95 contrast-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-brand-400 backdrop-blur-sm">
                    React + Django
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Food Delivery System</h3>
                  <p className="text-xs text-brand-400 font-mono">Multi-Role Food Ordering Platform</p>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  A multi-role food delivery platform designed to manage food ordering workflows from restaurant browsing to cart management, payment, approval, and order delivery tracking.
                </p>
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">User Roles:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Admin</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Customer</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Restaurant</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Delivery Partner</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">React.js</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Redux Toolkit</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Django REST</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">MySQL</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Razorpay</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/60 mt-4">
              <div className="flex items-center gap-2 pt-4">
                <a href="https://github.com/Abees2004/QuickBite" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>

              <a 
                href="#case-studies" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="pt-4 text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                Case Study <i className="fa-solid fa-chevron-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* PROJECT 02: MULTI-SERVICE BOOKING PLATFORM */}
          <div className="project-card glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between h-full">
            <div>
              <div className="bg-slate-900 border-b border-slate-800">
                <div className="px-4 py-2.5 bg-slate-950 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">booking-platform.app</span>
                </div>
                <div className="relative aspect-[16/10] img-zoom-container bg-slate-950">
                  <img src={multiservice} alt="Multi-Service Booking Platform Application Interface Screenshot" className="w-full h-full object-cover object-top filter brightness-95 contrast-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-brand-400 backdrop-blur-sm">
                    React + Django
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Multi-Service Booking Platform</h3>
                  <p className="text-xs text-brand-400 font-mono">Service Provider &amp; Customer Booking Engine</p>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  A centralized multi-service booking platform connecting customers, service providers, and administrators through structured slot workflows and waiting lists.
                </p>
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">User Roles:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Admin</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Customer</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Service Provider</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">React.js</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Django REST</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Razorpay</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/60 mt-4">
              <div className="flex items-center gap-2 pt-4">
                <a href="https://github.com/Abees2004/ServeZone" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
              <a 
                href="#case-study-booking" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-study-booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="pt-4 text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                Case Study <i className="fa-solid fa-chevron-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* PROJECT 03: TURF BOOKING SYSTEM */}
          <div className="project-card glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between h-full">
            <div>
              <div className="bg-slate-900 border-b border-slate-800">
                <div className="px-4 py-2.5 bg-slate-950 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">turf-booking.app</span>
                </div>
                <div className="relative aspect-[16/10] img-zoom-container bg-slate-950">
                  <img src={turfbooking} alt="Turf Booking System Application Interface Screenshot" className="w-full h-full object-cover object-top filter brightness-95 contrast-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-brand-400 backdrop-blur-sm">
                    Pure Django
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Turf Booking System</h3>
                  <p className="text-xs text-brand-400 font-mono">Django-Based Turf Management System</p>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  A turf reservation platform built with Django that allows users to discover and book turf grounds while enabling turf owners to manage their schedules.
                </p>
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">User Roles:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Admin</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Customer</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60">Turf Owner</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Django</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">MySQL</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-xs font-mono">Razorpay</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/60 mt-4">
              <div className="flex items-center gap-2 pt-4">
                <a href="https://github.com/Abees2004/TurfZone" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
              <a 
                href="#case-study-turf" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-study-turf')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="pt-4 text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                Case Study <i className="fa-solid fa-chevron-right text-xs"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
