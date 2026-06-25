import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import RouteExplorer from './components/RouteExplorer';
import EquipmentSelector from './components/EquipmentSelector';
import AdventureForm from './components/AdventureForm';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import LogoPreview from './components/LogoPreview';
import LegalNoticePage from './pages/LegalNoticePage';
import { isLegalNoticePath } from './utils/appRoutes';
import { TESTIMONIALS } from './data';
import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function App() {
  const { language, t } = useLanguage();
  const showLogoPreview = new URLSearchParams(window.location.search).has('logos');

  if (showLogoPreview) {
    return <LogoPreview />;
  }

  if (isLegalNoticePath()) {
    return <LegalNoticePage />;
  }

  return (
    <div className="font-sans antialiased text-stone-200 bg-gradient-to-br from-neutral-900 via-[#1c0f08] to-neutral-950 relative min-h-screen radial-dot-grid">
      {/* Absolute top background noise & lighting grids */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[1800px] right-1/4 w-[600px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Primary Components Layout */}
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <Philosophy />
        <RouteExplorer />
        <EquipmentSelector />

        {/* Dynamic Testimonials / Social Proof Section */}
        <section className="py-24 bg-black/20 border-t border-white/10 relative" id="experiencia">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <MessageSquare className="w-4 h-4" /> {t('testimonials.badge')}
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 mb-4 tracking-tight uppercase italic">
                {language === 'es' ? 'Historias de la carretera secundaria' : 'Stories from the Backroads'}
              </h2>
              <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
                {language === 'es' 
                  ? 'Descubre cómo vivieron su viaje en moto de aventura otros entusiastas de las dos ruedas que decidieron dejar sus motos y equipaje en casa.'
                  : 'Discover how other two-wheel enthusiasts who chose to leave their own motorcycles and heavy bags at home experienced their trip.'}
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
              {TESTIMONIALS.map((tItem, idx) => (
                <motion.div
                  key={tItem.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="frosted-panel frosted-panel-hover p-8 rounded-3xl flex flex-col justify-between text-left transition-all shadow-2xl relative group"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: tItem.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>

                    <p className="font-sans text-stone-300 text-sm leading-relaxed italic relative z-10">
                      "{tItem.quote[language]}"
                    </p>
                  </div>

                  {/* Customer Identity Info */}
                  <div className="border-t border-white/10 pt-5 mt-6 flex justify-between items-center">
                    <div>
                      <h4 className="font-display font-bold text-sm text-stone-100">{tItem.name}</h4>
                      <p className="font-sans text-xs text-stone-500 mt-0.5">{tItem.role[language]}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full uppercase">
                      {tItem.route[language].split(' ').slice(-1).join('')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Micro banner detailing trust */}
            <div className="mt-16 bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl flex flex-col sm:flex-row justify-center items-center gap-6">
              <span className="text-xs font-mono text-stone-500">
                {language === 'es' ? 'Nuestros proveedores oficiales de confianza:' : 'Our official trusted partners:'}
              </span>
              <div className="flex flex-wrap gap-8 justify-center items-center opacity-40">
                <span className="font-display font-black text-white text-sm tracking-widest uppercase">HONDA</span>
                <span className="font-display font-black text-white text-sm tracking-widest uppercase">BMW MOTORRAD</span>
                <span className="font-display font-black text-white text-sm tracking-widest uppercase">REV'IT!</span>
                <span className="font-display font-black text-white text-sm tracking-widest uppercase">SHOEI</span>
              </div>
            </div>

          </div>
        </section>

        <AdventureForm />
        <FAQs />
      </main>

      <Footer />
    </div>
  );
}
