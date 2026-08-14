import { useState } from 'react'
import { Mail, MapPin, Send, Phone } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'

export default function Contact() {
  const [formFeedback, setFormFeedback] = useState({ visible: false, message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim()
    const subject = formData.get('subject')?.trim()
    const message = formData.get('message')?.trim()

    // Validate fields
    if (!name || !email || !subject || !message) {
      setFormFeedback({ visible: true, message: 'Please fill in all required fields.', type: 'error' })
      setIsSubmitting(false)
      setTimeout(() => setFormFeedback({ visible: false, message: '', type: '' }), 4000)
      return
    }

    // Build mailto link and open email client
    const mailtoSubject = encodeURIComponent(subject)
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:abeeshrj3@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`

    setFormFeedback({ visible: true, message: 'Your email client should open now. If it doesn\'t, please email abeeshrj3@gmail.com directly.', type: 'success' })
    e.target.reset()
    setIsSubmitting(false)
    setTimeout(() => setFormFeedback({ visible: false, message: '', type: '' }), 6000)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="space-y-3 text-center max-w-xl mx-auto">
          <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let's Build Something Together</h2>
          <p className="text-slate-400 text-sm">I'm open to Full Stack Developer opportunities, interesting projects, and professional collaborations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-5 space-y-4">

            <a href="mailto:abeeshrj3@gmail.com" className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center gap-4 group transition-colors hover:border-brand-500/40">
              <div className="p-3 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-slate-500 block">Email</span>
                <span className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors truncate block">abeeshrj3@gmail.com</span>
              </div>
            </a>

            <a href="tel:+917871857589" className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center gap-4 group transition-colors hover:border-brand-500/40">
              <div className="p-3 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-slate-500 block">Phone</span>
                <span className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors truncate block">+91 7871857589</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/abees-r-2a049a254/" target="_blank" rel="noopener noreferrer" className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center gap-4 group transition-colors hover:border-brand-500/40">
              <div className="p-3 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-slate-500 block">LinkedIn</span>
                <span className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors truncate block">linkedin.com/in/abees-r-2a049a254</span>
              </div>
            </a>

            <a href="https://github.com/abees2004" target="_blank" rel="noopener noreferrer" className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center gap-4 group transition-colors hover:border-brand-500/40">
              <div className="p-3 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-slate-500 block">GitHub</span>
                <span className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors truncate block">github.com/abees2004</span>
              </div>
            </a>

            <div className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">Location</span>
                <span className="text-sm font-semibold text-white">INDIA</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">

              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300">Name <span className="text-brand-400">*</span></label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300">Email <span className="text-brand-400">*</span></label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300">Subject <span className="text-brand-400">*</span></label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" placeholder="Full Stack Opportunity / Inquiry" />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300">Message <span className="text-brand-400">*</span></label>
                  <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg shadow-lg shadow-brand-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" /> {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                </button>

                {formFeedback.visible && (
                  <div className={`p-3 rounded-lg text-xs font-mono text-center border ${formFeedback.type === 'error' ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'}`}>
                    {formFeedback.message}
                  </div>
                )}
              </form>

              <p className="text-[11px] text-slate-500 text-center font-mono">
                Submitting this form will open your default email client.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
