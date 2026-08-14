import { Printer, Download, Mail, Phone, ExternalLink } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Abeesh_R_Full_Stack_Developer_Resume.pdf'
    link.download = 'Abeesh_R_Full_Stack_Developer_Resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Document</span>
            <h2 className="text-3xl font-bold text-white">Online Resume</h2>
          </div>

          <div className="flex items-center gap-3 no-print">
            <button onClick={() => window.print()} className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs rounded-lg flex items-center gap-2 transition-all shadow">
              <Printer className="w-4 h-4" /> Print Resume
            </button>
            <button onClick={handleDownload} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-lg border border-slate-700 flex items-center gap-2 transition-all">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        <div className="print-area glass-panel bg-slate-900 p-8 sm:p-12 rounded-2xl border border-slate-800 text-slate-200 space-y-8 shadow-2xl">

          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Abees R</h1>
              <p className="text-brand-400 font-mono text-base font-semibold">Full Stack Developer</p>
              <p className="text-xs text-slate-400">India</p>
            </div>
            <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
              <p><a href="mailto:abeeshrj3@gmail.com" className="hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"><Mail className="w-3 h-3" /> abeeshrj3@gmail.com</a></p>
              <p><a href="tel:+917871857589" className="hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"><Phone className="w-3 h-3" /> +91 7871857589</a></p>
              <p><a href="https://github.com/abees2004" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"><Github className="w-3 h-3" /> github.com/abees2004</a></p>
              <p><a href="https://www.linkedin.com/in/abees-r-2a049a254/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"><Linkedin className="w-3 h-3" /> linkedin.com/in/abees-r-2a049a254</a></p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">Professional Summary</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Full Stack Developer experienced in Python, Django REST Framework, and React.js. Specializes in database optimization, secure APIs, and role-based access control. Skilled in reducing latency, improving efficiency, and structuring relational database schemas. Focused on writing clean, maintainable backend code that minimizes endpoint overhead. Adept at collaborating across development lifecycles to deliver performance-tuned features.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p><strong className="text-white">Languages:</strong> Python, JavaScript, HTML, CSS, SQL</p>
              <p><strong className="text-white">Frontend:</strong> React.js, Redux, React Hooks</p>
              <p><strong className="text-white">Backend &amp; Databases:</strong> Django, Django REST Framework, Django ORM, PostgreSQL, MySQL</p>
              <p><strong className="text-white">Tools &amp; Concepts:</strong> Git, GitHub, Postman, REST APIs, JWT, RBAC, OOP, Agile</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">Professional Experience</h3>

            {/* Role 1 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h4 className="font-bold text-white text-sm">Full Stack Developer Intern — <span className="text-slate-300">Intriad Innovations, Technopark, Trivandrum</span></h4>
                <span className="text-xs font-mono text-slate-400 whitespace-nowrap">Feb 2026 — Jun 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>Engineered high-throughput RESTful APIs using Python, Django, and Django REST Framework to unify data exchange pipelines across modular application layers.</li>
                <li>Optimized PostgreSQL query performance using Django's <code className="text-brand-400 font-mono">select_related</code> and <code className="text-brand-400 font-mono">prefetch_related</code>, eliminating N+1 queries and reducing API response time by 35%.</li>
                <li>Implemented JWT authentication and role-based access control (RBAC), enhancing overall application security.</li>
                <li>Partnered directly with frontend and quality assurance teams through a structured Agile lifecycle to accelerate system feature deployments and maintain high code testability standards.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h4 className="font-bold text-white text-sm">Full Stack Developer Intern — <span className="text-slate-300">Srishti Innovative, Technopark, Trivandrum</span></h4>
                <span className="text-xs font-mono text-slate-400 whitespace-nowrap">Jul 2025 — Jan 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>Developed end-to-end full-stack modules by binding asynchronous React.js frontend interfaces to underlying Django REST Framework backends via Axios connections.</li>
                <li>Designed relational database schemas inside PostgreSQL, validating integrity constraints and setting optimal column mapping structures to improve system transaction safety under concurrent access patterns.</li>
                <li>Refactored legacy monolithic views into structured, reusable Django database operations to isolate distinct backend functional responsibilities and improve codebase maintainability.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">Key Projects</h3>

            {/* Project 1 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h4 className="font-bold text-white text-sm">Food Delivery System</h4>
                <span className="text-xs font-mono text-slate-400">React.js, Redux Toolkit, Django REST Framework, MySQL, Razorpay</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                <li>Engineered a multi-role food delivery platform supporting Admin, Customer, Restaurant, and Delivery Partner workflows via role-based access control.</li>
                <li>Developed RESTful APIs and optimized database interactions for cart management, order processing, and restaurant operations.</li>
                <li>Implemented authentication, authorization, and Razorpay payment integration for secure transactions.</li>
                <li>Designed an end-to-end order management workflow from food selection to restaurant approval and real-time delivery tracking.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h4 className="font-bold text-white text-sm">Multi-Service Booking Platform</h4>
                <span className="text-xs font-mono text-slate-400">React.js, Django REST Framework, PostgreSQL, Razorpay</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                <li>Engineered a centralized booking engine enabling service providers, customers, and administrators to manage bookings through unified workflows.</li>
                <li>Developed scalable RESTful APIs supporting slot reservations, waiting-list handling, and automated status updates.</li>
                <li>Improved API response times by 30% through optimization of PostgreSQL queries and Django ORM operations under concurrent load.</li>
                <li>Designed a booking lifecycle featuring time-bound payment processing, automatic booking expiration, and slot reallocation.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h4 className="font-bold text-white text-sm">Turf Booking System</h4>
                <span className="text-xs font-mono text-slate-400">Django, MySQL, Razorpay</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                <li>Built a Django-based reservation platform supporting Customer, Turf Owner, and Admin operational workflows.</li>
                <li>Integrated Razorpay payment gateways for secure slot reservations and managed dynamic pricing/time allocations.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">Education</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between text-xs gap-1">
              <div>
                <p className="font-bold text-white">Bachelor of Science (B.Sc.) in Computer Science</p>
                <p className="text-slate-400">Manonmaniam Sundaranar University, Kanyakumari, Tamil Nadu</p>
              </div>
              <span className="font-mono text-slate-400 whitespace-nowrap">2022 — 2025</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
