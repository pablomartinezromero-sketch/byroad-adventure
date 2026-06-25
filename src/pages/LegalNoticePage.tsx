import { useEffect } from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageContext';
import { LEGAL_NOTICE_SECTIONS } from '../content/legalNotice';
import { appPath } from '../utils/appRoutes';

export default function LegalNoticePage() {
  const { language } = useLanguage();

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      language === 'es'
        ? 'Aviso Legal | Byroad Adventures'
        : 'Legal Notice | Byroad Adventures';
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, [language]);

  const lastUpdated =
    language === 'es' ? 'Última actualización: junio de 2026' : 'Last updated: June 2026';

  return (
    <div className="font-sans antialiased text-stone-200 bg-gradient-to-br from-neutral-900 via-[#1c0f08] to-neutral-950 relative min-h-screen radial-dot-grid">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 pt-28 pb-16" id="main-content">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href={appPath()}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'es' ? 'Volver al inicio' : 'Back to home'}
          </a>

          <header className="mb-10 text-left">
            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Scale className="w-4 h-4" />
              {language === 'es' ? 'Información legal' : 'Legal information'}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 mb-3 tracking-tight uppercase italic">
              {language === 'es' ? 'Aviso Legal' : 'Legal Notice'}
            </h1>
            <p className="font-sans text-stone-400 text-sm leading-relaxed">
              {language === 'es'
                ? 'Información legal sobre el titular del sitio web, las condiciones de uso y el marco normativo aplicable a Byroad Adventures.'
                : 'Legal information about the website owner, terms of use, and the regulatory framework applicable to Byroad Adventures.'}
            </p>
            <p className="font-mono text-[10px] text-stone-500 mt-4 uppercase tracking-wider">{lastUpdated}</p>
          </header>

          <article className="flex flex-col gap-8 text-left">
            {LEGAL_NOTICE_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <h2 className="font-display font-bold text-lg text-stone-100 uppercase tracking-tight mb-4">
                  {section.title[language]}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.paragraphs[language].map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="font-sans text-sm text-stone-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
