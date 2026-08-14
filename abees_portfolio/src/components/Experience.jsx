export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-3 text-center mb-16">
          <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Career History</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Professional Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">

            {/* Experience 01 */}
            <div className="relative flex flex-col md:flex-row items-stretch">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-brand-400 text-brand-400 items-center justify-center z-10 hidden md:flex top-6">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-400"></div>
              </div>

              <div className="w-full md:w-1/2 md:pr-10">
                <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 text-left">
                  <div className="space-y-1.5 border-b border-slate-800 pb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-semibold">
                      February 2026 — June 2026
                    </span>
                    <h3 className="text-xl font-bold text-white pt-1">Full Stack Developer Intern</h3>
                    <p className="text-sm font-medium text-slate-400">Intriad Innovations Technopark, Trivandrum</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                    <span className="text-brand-400 font-mono font-semibold block">Key Impact &amp; Focus</span>
                    <p className="text-slate-300">Contributed to the development of a production-grade web application by building scalable
backend services and optimizing database operations. Worked closely with senior developers
in an Agile team to deliver reliable, secure and high-performance features.</p>
                  </div>

                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                    <li>Designed and develotned RESTful APIs using Python, Django and Django REST Framework,
following best practices for clean architecture and maintainable code.</li>
                    <li>Optimized Django ORM queries with select_related and prefetch_related to eliminate N+1 queries,
significantly improving API response time and reducing unnecessary database access.</li>
                    <li>Implemented JWT-based authentication and role-based access control (RBAC) for secure
user management and data protection.</li>
                    <li>Optimized PostgreSQL database schema and queries, improving data retrieval efficiency
and ensuring smooth application performance under real-world load.</li>
                    <li>Integrated payment workflows and third-party services, contributing to end-to-end
                                        membership and transaction functionality.</li>
                    <li>Followed Agile development practices, collaborated with frontend and QA teams, and
participated in code reviews, testing, and deployment activities.</li>
                  </ul>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Experience 02 */}
            <div className="relative flex flex-col md:flex-row items-stretch">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 text-slate-400 items-center justify-center z-10 hidden md:flex top-6">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>

              <div className="w-full md:w-1/2 md:pl-10">
                <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 text-left">
                  <div className="space-y-1.5 border-b border-slate-800 pb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-semibold">
                      July 2025 — January 2026
                    </span>
                    <h3 className="text-xl font-bold text-white pt-1">Full Stack Developer Intern</h3>
                    <p className="text-sm font-medium text-slate-400">Srishti Innovative Technopark, Trivandrum</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                    <span className="text-brand-400 font-mono font-semibold block">Key Impact &amp; Focus</span>
                    <p className="text-slate-300">Contributed to the development and improvement of full-stack web applications by building React.js frontend modules, integrating REST APIs, and improving the structure and maintainability of Django-based backend systems.</p>
                  </div>

                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                    <li>Developed reusable React.js frontend modules and integrated them with Django REST Framework APIs using Axios, enabling seamless communication between frontend interfaces and backend services.</li>
                    <li>Designed and maintained relational PostgreSQL database schemas, defining appropriate relationships and integrity constraints to ensure consistent and reliable data management.</li>
                    <li>Refactored legacy Django views into structured and reusable backend operations, reducing code duplication and improving the maintainability of existing application logic.</li>
                    <li>Worked across both frontend and backend layers to connect application workflows, troubleshoot integration issues, and ensure consistent data flow between React components and REST APIs.</li>
                    <li>Applied structured development practices to improve code organization and make existing features easier to extend and maintain.</li>
                    <li>Contributed to full-stack feature development by working across React.js, Django, Django REST Framework, PostgreSQL, and API integrations.</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
