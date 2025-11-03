import { Rocket, Shield, KeyRound, Lock, MapPin, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100" aria-hidden="true" />
      <div className="relative">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <a href="#top" className="font-bold text-xl tracking-tight text-amber-900">Jeeva</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-amber-900/80 hover:text-amber-900">About</a>
            <a href="#skills" className="text-amber-900/80 hover:text-amber-900">Skills</a>
            <a href="#showcase" className="text-amber-900/80 hover:text-amber-900">Projects</a>
            <a href="#tutorials" className="text-amber-900/80 hover:text-amber-900">Tutorials</a>
            <a href="#contact" className="text-amber-900/80 hover:text-amber-900">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/70 hover:bg-white shadow text-amber-900">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/70 hover:bg-white shadow text-amber-900">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <section id="top" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base font-medium text-amber-700 tracking-wide mb-3">
                வணக்கம் • Vanakkam
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-amber-950 leading-tight">
                Jeeva — Backend Developer
              </h1>
              <p className="mt-3 text-lg text-amber-900/80">
                Tamil Nadu, India
              </p>
              <p className="mt-6 text-base sm:text-lg text-amber-900/90">
                I build secure, scalable backend systems with Spring Boot, Spring Security, and JWT — then turn them into clear teaching tools that empower others.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" id="skills">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-amber-900 shadow">
                  <Shield className="h-4 w-4" /> Spring Security
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-amber-900 shadow">
                  <Lock className="h-4 w-4" /> JWT Auth
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-amber-900 shadow">
                  <KeyRound className="h-4 w-4" /> OAuth2
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-amber-900 shadow">
                  <Rocket className="h-4 w-4" /> Spring Boot
                </span>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="#showcase" className="inline-flex items-center justify-center rounded-lg bg-amber-700 text-white px-5 py-3 font-medium shadow hover:bg-amber-800 transition">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-amber-900 px-5 py-3 font-medium shadow hover:bg-amber-50 transition">
                  Contact Me
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-amber-900/70">
                <MapPin className="h-4 w-4" /> Based in Tamil Nadu • Available for remote work
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white/70 backdrop-blur p-6 shadow-lg border border-amber-900/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <pre className="text-xs sm:text-sm leading-relaxed text-amber-900 overflow-auto">
{`// Secure REST with JWT (Teaching Snippet)
@Bean
SecurityFilterChain security(HttpSecurity http) throws Exception {
  return http
    .csrf(csrf -> csrf.disable())
    .authorizeHttpRequests(auth -> auth
      .requestMatchers("/api/auth/**").permitAll()
      .anyRequest().authenticated())
    .oauth2ResourceServer(oauth -> oauth.jwt())
    .build();
}

// Principle: keep it simple, document, and teach.`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
