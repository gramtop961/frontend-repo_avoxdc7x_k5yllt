export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-950">
              பற்றி • About Me
            </h2>
            <p className="mt-4 text-amber-900/90 leading-relaxed">
              I'm Jeeva, a backend developer focused on clarity, security, and mentorship. I specialise in Spring Boot ecosystems and believe complex ideas should be accessible. My workflow turns production-grade systems into step-by-step learning experiences for teams and the community.
            </p>
            <p className="mt-4 text-amber-900/90 leading-relaxed">
              Beyond code, I enjoy group travel and inclusive logistics planning — designing routes, budgets, and roles so everyone feels welcome and empowered. The same care for safety and simplicity shows up in my APIs and documentation.
            </p>
          </div>
          <div>
            <div className="rounded-xl border border-amber-900/10 bg-white shadow-sm p-6">
              <h3 className="text-lg font-semibold text-amber-900">Teaching Philosophy</h3>
              <ul className="mt-4 space-y-3 text-amber-900/90">
                <li>• Start from first principles; avoid magic.</li>
                <li>• Document intent, not just implementation.</li>
                <li>• Build minimal, secure scaffolds before scaling.</li>
                <li>• Encourage hands-on exploration and pair learning.</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="font-medium text-amber-900">Languages</p>
                  <p className="text-amber-900/80">Java, Kotlin</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="font-medium text-amber-900">Infra</p>
                  <p className="text-amber-900/80">Docker, Postgres, Redis</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="font-medium text-amber-900">Auth</p>
                  <p className="text-amber-900/80">JWT, OAuth2, SSO</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="font-medium text-amber-900">Cloud</p>
                  <p className="text-amber-900/80">AWS (EC2, RDS), GCP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
