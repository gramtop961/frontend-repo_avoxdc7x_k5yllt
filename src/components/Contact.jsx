import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-950">
              தொடர்புக்கு • Contact
            </h2>
            <p className="mt-4 text-amber-900/90">
              Let’s collaborate on secure, well-documented backends — or plan your next inclusive group journey. I’m open to contract and full‑time roles.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@jeeva.dev" className="flex items-center gap-3 text-amber-900 hover:text-amber-700">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-900"><Mail className="h-5 w-5" /></span>
                hello@jeeva.dev
              </a>
              <a href="tel:+919000000000" className="flex items-center gap-3 text-amber-900 hover:text-amber-700">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-900"><Phone className="h-5 w-5" /></span>
                +91 90000 00000
              </a>
              <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-amber-900 hover:text-amber-700">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-900"><MessageSquare className="h-5 w-5" /></span>
                WhatsApp — Quick chat
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-amber-900/10 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900">Name</label>
                  <input id="name" type="text" required className="mt-1 w-full rounded-lg border border-amber-200 bg-amber-50/50 px-3 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900">Email</label>
                  <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-amber-200 bg-amber-50/50 px-3 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-amber-900">Message</label>
                <textarea id="message" rows="4" required className="mt-1 w-full rounded-lg border border-amber-200 bg-amber-50/50 px-3 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 text-white px-5 py-3 font-medium shadow hover:bg-amber-800 transition">
                Send Message
              </button>
              <p className="mt-3 text-xs text-amber-900/70">This demo form doesn’t send yet — use email or WhatsApp above.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
