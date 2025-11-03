import { Shield, Lock, BookOpen, Server, Play } from 'lucide-react';

const projects = [
  {
    title: 'Modular Auth API',
    ta: 'தொகுதி அடிப்படையிலான ஆத் API',
    description:
      'Spring Boot + Spring Security 6 with JWT and role-based access. Designed as a learning scaffold with clear boundaries and tests.',
    tags: ['Spring Boot', 'Spring Security', 'JWT', 'RBAC'],
    icon: Shield,
    link: '#',
  },
  {
    title: 'Travel Planner Service',
    ta: 'பயணம் திட்டமிடும் சேவை',
    description:
      'Inclusive group travel logistics: roles, budgets, accessibility notes, and itinerary endpoints with policy documentation.',
    tags: ['REST', 'Postgres', 'Docker', 'Docs'],
    icon: Server,
    link: '#',
  },
  {
    title: 'API Hardening Toolkit',
    ta: 'API பாதுகாப்பு கருவிப்பெட்டி',
    description:
      'Opinionated starters for rate limiting, CORS, and headers with examples and test suites to teach secure defaults.',
    tags: ['Security', 'Best Practices', 'Testing'],
    icon: Lock,
    link: '#',
  },
];

const tutorials = [
  {
    title: 'JWT in Spring Security 6 — From Zero to Verified',
    ta: 'Spring Security 6 இல் JWT — அடிப்படையில் இருந்து',
    length: '20 min',
    link: '#',
  },
  {
    title: 'Designing RBAC You Can Explain to a Junior',
    ta: 'புதியவருக்கும் புரியும் RBAC வடிவமைப்பு',
    length: '15 min',
    link: '#',
  },
  {
    title: 'Teaching Through Tests: Secure by Example',
    ta: 'சோதனைகள் மூலம் கற்றல்: பாதுகாப்பு எடுத்துக்காட்டுகள்',
    length: '18 min',
    link: '#',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-gradient-to-b from-white to-amber-50/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-950">
          திட்டங்கள் • Projects
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-amber-900/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-950">{p.title}</h3>
                  <p className="text-sm text-amber-900/70">{p.ta}</p>
                </div>
              </div>
              <p className="mt-4 text-amber-900/90 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-amber-50 text-amber-900 px-2 py-1 rounded border border-amber-200">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-5 inline-flex items-center gap-2 text-amber-900 hover:text-amber-700 font-medium">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M7 17l9-9M7 7h10v10"/></svg>
              </a>
            </article>
          ))}
        </div>

        <div id="tutorials" className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-950 flex items-center gap-2">
            பயிற்சிகள் • Tutorials <BookOpen className="h-6 w-6 text-amber-800" />
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {tutorials.map((t) => (
              <a key={t.title} href={t.link} className="group rounded-xl border border-amber-900/10 bg-white p-6 shadow-sm hover:shadow-md transition block">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-amber-950 group-hover:text-amber-800">{t.title}</h3>
                    <p className="text-sm text-amber-900/70">{t.ta}</p>
                  </div>
                  <span className="text-xs text-amber-900/70 inline-flex items-center gap-1"><Play className="h-4 w-4" /> {t.length}</span>
                </div>
                <p className="mt-3 text-sm text-amber-900/80">
                  Practical, step-by-step guides that scaffold learning with runnable code.
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
