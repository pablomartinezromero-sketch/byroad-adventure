import { motion } from 'motion/react';
import { Shield, EyeOff, Users, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Philosophy() {
  const { language, t } = useLanguage();

  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: t('philosophy.p1.title'),
      description: t('philosophy.p1.desc'),
    },
    {
      icon: <EyeOff className="w-6 h-6 text-orange-500" />,
      title: t('philosophy.p2.title'),
      description: t('philosophy.p2.desc'),
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: t('philosophy.p3.title'),
      description: t('philosophy.p3.desc'),
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: t('philosophy.p4.title'),
      description: t('philosophy.p4.desc'),
    },
  ];

  return (
    <section className="py-24 bg-black/10 border-t border-white/10 relative" id="filosofia">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold">
            {language === 'es' ? 'NUESTRO MANIFIESTO' : 'OUR MANIFESTO'}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-6 tracking-tight uppercase italic">
            {language === 'es' ? (
              <>
                Viajar despacio, <br />
                <span className="text-orange-500">
                  conducir de verdad
                </span>
              </>
            ) : (
              <>
                Ride with intent, <br />
                <span className="text-orange-500">
                  experience the real roads
                </span>
              </>
            )}
          </h2>
          <p className="font-sans text-stone-400 text-base sm:text-lg leading-relaxed">
            {language === 'es'
              ? 'No medimos los viajes en kilómetros, sino en curvas y en la calidad de las conversaciones al apagar los motores alrededor de una chimenea rústica.'
              : 'We do not measure journeys in miles, but in corners carved and the warmth of conversations around rustic fireplaces when engines are cut.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="philosophy-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="frosted-panel frosted-panel-hover p-8 rounded-3xl transition-all duration-300 shadow-2xl group flex flex-col sm:flex-row gap-5 text-left"
            >
              {/* Icon Container */}
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl h-fit w-fit transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500/40">
                {pillar.icon}
              </div>
              
              {/* Text Block */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-stone-100 mb-2 transition-colors duration-300 group-hover:text-orange-500 uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-stone-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Quote / Statement Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 frosted-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
          id="philosophy-manifesto-box"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-2xl text-left relative z-10">
            <span className="font-mono text-[10px] bg-white/10 text-orange-500 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">
              {language === 'es' ? 'CONCEPTO CLAVE' : 'CORE CONCEPT'}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-4 mb-3 tracking-tight uppercase italic">
              {language === 'es' ? '¿Por qué carreteras secundarias?' : 'Why secondary roads?'}
            </h3>
            <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
              {language === 'es'
                ? 'Las autovías conectan lugares, pero las carreteras secundarias conectan personas. Son trazados antiguos que respetan la orografía de la tierra, repletos de curvas diseñadas para el disfrute, flanqueados por naturaleza intacta y salpicados de pequeños pueblos auténticos donde el viajero en moto sigue siendo un huésped de honor.'
                : 'Highways connect places, but backroads connect people. They are ancient routes respecting the contours of the land, filled with corners designed for pure riding pleasure, flanked by untouched nature, and dotted with authentic small villages where the motorcycle traveler is welcomed as an honored guest.'}
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px] text-left border-l-2 border-orange-500/80 pl-6 py-2 relative z-10">
            <span className="font-display font-black text-5xl text-orange-500 tracking-tighter italic">0%</span>
            <span className="font-sans font-bold text-sm text-stone-200">
              {language === 'es' ? 'Autovías y Peajes' : 'Highways & Tolls'}
            </span>
            <span className="font-sans text-xs text-stone-500 font-medium">
              {language === 'es' ? 'Excluidas del plan de rutas' : 'Excluded from all route mapping'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
