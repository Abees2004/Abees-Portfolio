import { Atom, Server, MapPin, MonitorSmartphone, ServerCog, Workflow, Database, Zap, ShieldCheck, Layers, CreditCard } from 'lucide-react'
import profile from '../assets/profile.png'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="space-y-3 text-center">
          <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Profile &amp; Core Competencies</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-5 h-full flex flex-col justify-between">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60">
                <img
                  src={profile}
                  alt="Abees R - Full Stack Developer Profile Photo"
                  className="w-full h-full object-cover object-top filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <Atom className="w-3.5 h-3.5" /> React.js
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" /> Django
                </div>
              </div>

              <div className="space-y-3 text-sm px-2 pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-mono">Based in</span>
                  <span className="text-slate-200 font-medium flex items-center gap-1 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" /> INDIA
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-mono">Focus</span>
                  <span className="text-slate-200 font-medium text-xs">Full Stack Development</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-mono">Primary Backend</span>
                  <span className="text-slate-200 font-medium text-xs">Python / Django / DRF</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-mono">Primary Frontend</span>
                  <span className="text-slate-200 font-medium text-xs">React.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 h-full flex flex-col justify-center text-slate-300">
              <h3 className="text-2xl font-bold text-white tracking-tight">Building reliable backend systems and modern web applications.</h3>
              <p className="text-base leading-relaxed">
                I'm a Full Stack Developer focused on building reliable web applications using React.js, Python, Django, and Django REST Framework. I work across the entire development lifecycle, from designing responsive user interfaces to developing REST APIs, implementing authentication and authorization, managing relational databases, and integrating third-party services.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-brand-500/40 pl-4 py-1">
                My experience includes building multi-user platforms with role-based workflows, payment integration, booking systems, and business management applications. I enjoy solving backend challenges involving database design, API architecture, query optimization, and maintainable application structure, with an emphasis on clean and production-ready code.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-brand-500/40 pl-4 py-1">
                I focus on writing clean, reusable code while optimizing database interactions through efficient Django ORM practices, including select_related, prefetch_related, and eliminating N+1 query patterns to build reliable and scalable applications.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-800 text-center sm:text-left">
                <div>
                  <span className="text-2xl font-extrabold text-brand-400 font-mono block">3+</span>
                  <span className="text-xs text-slate-400 font-mono">Full Stack Projects Built</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-brand-400 font-mono block">1 year</span>
                  <span className="text-xs text-slate-400 font-mono">Hands-on Internship Exp.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Capabilities Grid */}
        <div className="space-y-6 pt-4">
          <div className="text-left space-y-1">
            <span className="text-brand-400 font-mono text-xs font-semibold uppercase tracking-widest">Engineering Focus</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">Key Technical Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <MonitorSmartphone className="w-5 h-5 shrink-0" />
                  <h4>Responsive Frontend Development</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Building responsive and user-friendly interfaces with React.js, ensuring smooth experiences across desktop, tablet, and mobile devices.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <ServerCog className="w-5 h-5 shrink-0" />
                  <h4>Secure &amp; Scalable Backend Development</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Building secure and scalable backend systems with Python, Django, and Django REST Framework, focusing on clean architecture, RESTful APIs, authentication, authorization, and reliable application performance.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <Workflow className="w-5 h-5 shrink-0" />
                  <h4>REST API Development</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Designing and developing RESTful APIs using Django REST Framework for modular, decoupled frontend-backend data exchange.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <Database className="w-5 h-5 shrink-0" />
                  <h4>Database Optimization</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Optimizing Django ORM operations and relational database queries in PostgreSQL and MySQL for maximum speed and scalability.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <Zap className="w-5 h-5 shrink-0" />
                  <h4>N+1 Query Avoidance</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Eliminating redundant database hits using ORM optimization techniques such as <code className="text-brand-300 font-mono text-xs bg-slate-900 px-1 py-0.5 rounded">select_related</code> and <code className="text-brand-300 font-mono text-xs bg-slate-900 px-1 py-0.5 rounded">prefetch_related</code>.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <h4>Authentication &amp; Authorization</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Implementing secure JWT authentication flow and role-based access control (RBAC) across multi-user web platforms.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <Layers className="w-5 h-5 shrink-0" />
                  <h4>Full Stack Development</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Connecting responsive React.js frontends seamlessly with Django and Django REST Framework backends.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-brand-400 font-bold text-base">
                  <CreditCard className="w-5 h-5 shrink-0" />
                  <h4>Payment Integration</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Integrating secure online Razorpay payment workflows, checkout triggers, and robust webhook verification.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
