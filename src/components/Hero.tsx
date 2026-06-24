import React from 'react';
import { motion } from 'motion/react';
import { Compass, Bike, ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import heroBg from '../assets/images/motorcycle_road_hero_1782234906072.jpg';

export default function Hero() {
  const { language, t } = useLanguage();

  const scrollToReserva = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#reserva');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRutas = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#rutas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero-section">
      {/* Background Cinematic Image with Progressive Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Moto de aventura aparcada en carretera secundaria sinuosa de montaña al atardecer"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
          id="hero-bg-image"
        />
        {/* Absolute dark overlays for absolute readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />
        <div className="absolute inset-0 bg-neutral-950/10 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 w-full text-center md:text-left flex flex-col justify-between min-h-[calc(100vh-80px)]">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md mb-6"
            id="hero-badge"
          >
            <Compass className="w-4 h-4 text-orange-500 animate-spin-slow" />
            <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-stone-200">
              {t('hero.badge')}
            </span>
          </motion.div>
        </div>

        {/* Core Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.95] text-white tracking-tighter uppercase italic text-left drop-shadow-2xl"
              id="hero-heading"
            >
              {language === 'es' ? (
                <>
                  Descubre la <br className="hidden sm:inline" />
                  <span className="text-orange-500 glow-orange">
                    España Auténtica
                  </span> <br />
                  sobre dos ruedas.
                </>
              ) : (
                <>
                  Discover the <br className="hidden sm:inline" />
                  <span className="text-orange-500 glow-orange">
                    Authentic Spain
                  </span> <br />
                  on Two Wheels.
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-stone-300 font-sans text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-shadow-subtle text-left"
              id="hero-subtext"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Crucial Concept Highlight: No need for bike/gear */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="frosted-panel p-6 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-5 max-w-xl text-left shadow-2xl"
              id="hero-highlight-box"
            >
              <div className="bg-orange-500 text-black p-3.5 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/10">
                <Bike className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-stone-100 mb-1 uppercase tracking-tight">
                  {language === 'es' ? 'Cero Preocupaciones: Todo Incluido' : 'Worry-Free: All-Inclusive Service'}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed font-sans">
                  {language === 'es' 
                    ? 'No necesitas tener moto ni equipación propia. Nosotros ponemos a tu disposición una moto de aventura premium de última generación y trajes homologados completos. Solo trae tu pasaporte de explorador.' 
                    : 'No need to bring your own bike or gear. We supply a latest-generation premium adventure motorcycle and fully approved technical protective apparel. Just fly in and ride.'}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
              id="hero-actions"
            >
              <a
                href="#reserva"
                onClick={scrollToReserva}
                className="bg-orange-500 hover:bg-orange-400 text-black font-display font-bold px-8 py-4 rounded-full transition-all text-center tracking-widest uppercase text-xs flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/10 cursor-pointer"
              >
                {t('hero.cta.book')}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#rutas"
                onClick={scrollToRutas}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 hover:text-white font-display font-bold px-8 py-4 rounded-full transition-all text-center text-xs uppercase tracking-widest backdrop-blur-md cursor-pointer"
              >
                {t('hero.cta.explore')}
              </a>
            </motion.div>
          </div>

          {/* Quick Stats Panel */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="frosted-panel p-8 rounded-3xl flex flex-col gap-6 glow-box-orange max-w-xs ml-auto shadow-2xl text-left"
              id="hero-stats-panel"
            >
              <div className="border-b border-white/5 pb-4">
                <span className="text-3xl font-display font-black text-orange-500 italic uppercase">100%</span>
                <p className="text-[10px] text-stone-400 font-mono tracking-wider uppercase mt-1">
                  {language === 'es' ? 'Carreteras Secundarias Curvas' : 'Curvy Backroads'}
                </p>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-3xl font-display font-black text-stone-100 italic uppercase">
                  {t('hero.stats.groups.title')}
                </span>
                <p className="text-[10px] text-stone-400 font-mono tracking-wider uppercase mt-1">
                  {t('hero.stats.groups.subtitle')}
                </p>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="text-3xl font-display font-black text-stone-100 italic">
                  {t('hero.stats.safety.title')}
                </span>
                <p className="text-[10px] text-stone-400 font-mono tracking-wider uppercase mt-1">
                  {language === 'es' ? 'Equipación Pro Incluida' : 'Pro Gear Included'}
                </p>
              </div>
              <div>
                <span className="text-2xl font-display font-black text-orange-500 italic uppercase leading-tight">
                  {t('hero.stats.lodging.title')}
                </span>
                <p className="text-[10px] text-stone-400 font-mono tracking-wider uppercase mt-1">
                  {t('hero.stats.lodging.subtitle')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center items-center gap-2 mt-12 cursor-pointer text-stone-500 hover:text-orange-500 transition-colors py-4 self-center"
          onClick={() => {
            document.querySelector('#filosofia')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="hero-scroll-indicator"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            {language === 'es' ? 'Descubrir más' : 'Discover More'}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>

      {/* Subtle background animation style */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.02) translate(0px, 0px); }
          100% { transform: scale(1.07) translate(5px, -5px); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
