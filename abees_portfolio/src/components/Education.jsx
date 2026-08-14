export default function Education() {
  return (
    <section id="education" className="py-16 bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-3 text-center mb-10">
          <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Academic Background</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-brand-400 uppercase">Degree</span>
              <h3 className="text-xl font-bold text-white">Bachelor of Science (B.Sc.) in Computer Science</h3>
              <p className="text-sm text-slate-300">Manonmaniam Sundaranar University</p>
              <p className="text-xs text-slate-400">Kanyakumari, Tamil Nadu</p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 whitespace-nowrap">
              2022 — 2025
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
