import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jeeva',
    jobTitle: 'Backend Developer',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    knowsAbout: [
      'Spring Boot',
      'Spring Security',
      'JWT',
      'OAuth2',
      'REST API Design',
    ],
    sameAs: [
      'https://github.com/',
      'https://www.linkedin.com/',
    ],
    description:
      'Backend developer specializing in Spring Boot, Spring Security, and JWT authentication. Passionate about teaching and inclusive group travel logistics.',
  };

  return (
    <div className="min-h-screen bg-white text-amber-950">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:p-3 focus:bg-amber-100 focus:rounded">
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <About />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-amber-900/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-amber-900/70">© {new Date().getFullYear()} Jeeva • Built with care and warm tones</p>
          <nav className="text-sm flex items-center gap-4">
            <a href="#about" className="text-amber-900/70 hover:text-amber-900">About</a>
            <a href="#skills" className="text-amber-900/70 hover:text-amber-900">Skills</a>
            <a href="#showcase" className="text-amber-900/70 hover:text-amber-900">Projects</a>
            <a href="#tutorials" className="text-amber-900/70 hover:text-amber-900">Tutorials</a>
            <a href="#contact" className="text-amber-900/70 hover:text-amber-900">Contact</a>
          </nav>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

export default App;
