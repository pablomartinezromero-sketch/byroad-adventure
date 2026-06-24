import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Bike, Shirt, Award, Check } from 'lucide-react';
import { MOTORCYCLES, GEAR_ITEMS } from '../data';
import { useLanguage } from '../LanguageContext';
import { publicAsset } from '../utils/assetUrl';
import gearDetailsImg from '../assets/images/motorcycle_gear_details_1782234922105.jpg';

const VOGE_LOGO = publicAsset('logos/voge-logo.png');

export default function EquipmentSelector() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'motos' | 'equipacion'>('motos');
  const [selectedBikeId, setSelectedBikeId] = useState<string>(MOTORCYCLES[0].id);
  const [selectedGearCategory, setSelectedGearCategory] = useState<'all' | 'helmet' | 'jacket' | 'gloves'>('all');

  const selectedBike = MOTORCYCLES.find((b) => b.id === selectedBikeId) || MOTORCYCLES[0];

  const filteredGear = selectedGearCategory === 'all'
    ? GEAR_ITEMS
    : GEAR_ITEMS.filter((g) => g.category === selectedGearCategory);

  return (
    <section className="py-24 bg-black/10 border-t border-white/10 relative" id="motos-equipacion">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4" /> {language === 'es' ? 'NO NECESITAS NADA PROPIO' : 'NO PERSONAL GEAR REQUIRED'}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-4 tracking-tight uppercase italic">
            {language === 'es' ? 'Motos nuevas e indumentaria premium' : 'Latest Adventure Motorcycles & Premium Apparel'}
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
            {language === 'es' 
              ? 'Eliminamos las barreras de entrada. Ponemos a tu disposición monturas de última generación y prendas protectoras de las marcas líderes en seguridad.'
              : 'We eliminate all barriers to entry. We provide you with cutting-edge motorcycles and technical protective apparel from world-leading safety brands.'}
          </p>

          {/* Large Tab Switcher */}
          <div className="flex justify-center mt-10">
            <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 inline-flex gap-2 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('motos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 ${
                  activeTab === 'motos'
                    ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/10'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <Bike className="w-4 h-4" /> {language === 'es' ? 'La Flota de Aventura' : 'Adventure Fleet'}
              </button>
              <button
                onClick={() => setActiveTab('equipacion')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 ${
                  activeTab === 'equipacion'
                    ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/10'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <Shirt className="w-4 h-4" /> {language === 'es' ? 'La Equipación Pro' : 'Pro Protective Apparel'}
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: FLOTA DE MOTOS */}
        <AnimatePresence mode="wait">
          {activeTab === 'motos' ? (
            <motion.div
              key="motos-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              id="motos-explorer"
            >
              {/* Left Selector List */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold mb-1 text-left">
                  {language === 'es' ? 'Modelos Disponibles (Elige la tuya)' : 'Available Models (Select Your Ride)'}
                </span>
                <div className="flex flex-col gap-3">
                  {MOTORCYCLES.map((bike) => (
                    <button
                      key={bike.id}
                      onClick={() => setSelectedBikeId(bike.id)}
                      className={`p-5 rounded-3xl border text-left transition-all duration-300 flex items-center gap-4 ${
                        selectedBikeId === bike.id
                          ? 'bg-orange-500/10 border-orange-500 text-white shadow-2xl'
                          : 'bg-white/5 border border-white/10 hover:border-orange-500/40 text-stone-300 hover:text-white'
                      }`}
                    >
                      <div className="flex-shrink-0 w-[4.5rem] h-10 flex items-center justify-center px-1.5">
                        <img src={VOGE_LOGO} alt="Voge" className="h-6 w-auto max-w-full object-contain opacity-95" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-base text-stone-100">{bike.name}</h4>
                        <p className="font-sans text-xs text-stone-500 mt-1">{bike.type[language]}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Moto Details Block */}
              <div className="lg:col-span-8 frosted-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Stats & Description (col-span 7) */}
                  <div className="md:col-span-7 flex flex-col gap-5 text-left">
                    <div>
                      <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold">
                        {selectedBike.type[language]}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1 uppercase italic">
                        {selectedBike.name}
                      </h3>
                    </div>

                    <p className="font-sans text-stone-300 text-sm leading-relaxed">
                      {selectedBike.description[language]}
                    </p>

                    {/* Suitability Badge */}
                    <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl text-xs text-stone-300 font-sans leading-relaxed">
                      <strong className="text-orange-500">{language === 'es' ? 'Idoneidad: ' : 'Suitability: '}</strong> {selectedBike.suitability[language]}
                    </div>

                    {/* Bike Specs */}
                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-500">
                          {language === 'es' ? 'Motor y Potencia' : 'Engine & Power'}
                        </span>
                        <p className="text-sm font-display font-bold text-stone-200 mt-0.5">{selectedBike.engine}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-500">
                          {language === 'es' ? 'Peso en orden de marcha' : 'Curb Weight'}
                        </span>
                        <p className="text-sm font-display font-bold text-stone-200 mt-0.5">{selectedBike.weight}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bike Aesthetic Image (col-span 5) */}
                  <div className="md:col-span-5 h-56 md:h-72 rounded-3xl overflow-hidden border border-white/10 relative bg-neutral-950 flex items-center justify-center shadow-lg">
                    <img
                      src={selectedBike.image}
                      alt={selectedBike.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3">
                      <img src={VOGE_LOGO} alt="Voge" className="h-5 w-auto object-contain drop-shadow-lg" />
                    </div>
                    <div className="absolute top-3 right-3 bg-black/80 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-mono text-stone-300 backdrop-blur-md">
                      {language === 'es' ? 'Incluida en Ruta' : 'Included in Tour'}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ) : (
            /* Tab 2: EQUIPACIÓN COMPLETA */
            <motion.div
              key="equipacion-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
              id="gear-explorer"
            >
              {/* Left Side: Custom Generated Gear Image! */}
              <div className="lg:col-span-5 h-64 sm:h-96 lg:h-auto rounded-3xl overflow-hidden border border-white/10 relative flex flex-col justify-end shadow-2xl">
                <img
                  src={gearDetailsImg}
                  alt="Equipamiento de seguridad de moto de alta gama con casco de carbono y chaqueta Revit"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10" />
                
                <div className="relative z-20 p-6 text-left">
                  <span className="text-[10px] font-mono text-orange-500 font-bold tracking-widest uppercase">
                    {language === 'es' ? 'TE VESTIMOS DE CABEZA A PIES' : 'WE APPAREL YOU HEAD-TO-TOE'}
                  </span>
                  <h4 className="font-display font-black text-lg text-white mt-1 uppercase italic">
                    {language === 'es' ? 'Equipamiento de Protección Homologada' : 'CE-Approved Protective Gear'}
                  </h4>
                  <p className="font-sans text-xs text-stone-300 max-w-sm">
                    {language === 'es'
                      ? 'No regateamos con la seguridad. Toda la indumentaria cumple la homologación CE nivel 2, garantizando máxima resistencia a la abrasión y protección climática Gore-Tex®.'
                      : 'We do not compromise on safety. All riding gear is CE Level 2 approved, guaranteeing maximum abrasion resistance and outstanding Gore-Tex® weather protection.'}
                  </p>
                </div>
              </div>

              {/* Right Side: Interactive Gear Catalog */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                
                {/* Category filters */}
                <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md self-start" id="gear-filters">
                  {(['all', 'helmet', 'jacket', 'gloves'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedGearCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-display font-semibold uppercase tracking-wider transition-all duration-300 ${
                        selectedGearCategory === cat
                          ? 'bg-orange-500/15 border border-orange-500/40 text-orange-400'
                          : 'text-stone-300 hover:text-white border border-transparent hover:bg-white/5'
                      }`}
                    >
                      {cat === 'all' 
                        ? (language === 'es' ? 'Ver Todo' : 'View All') 
                        : cat === 'helmet' 
                          ? (language === 'es' ? 'Cascos' : 'Helmets') 
                          : cat === 'jacket' 
                            ? (language === 'es' ? 'Chaquetas' : 'Jackets') 
                            : (language === 'es' ? 'Guantes' : 'Gloves')}
                    </button>
                  ))}
                </div>

                {/* Filtered Gear List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {filteredGear.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/5 border border-white/10 hover:border-orange-500/40 p-5 rounded-3xl flex flex-col justify-between text-left group transition-all duration-300 shadow-2xl"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] font-mono text-stone-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                            {item.brand}
                          </span>
                          <span className="text-[10px] font-mono text-orange-500">
                            {item.category === 'helmet' 
                              ? (language === 'es' ? 'Casco Carbon' : 'Carbon Helmet') 
                              : item.category === 'jacket' 
                                ? (language === 'es' ? 'GoreTex Pro' : 'GoreTex Pro') 
                                : 'CE Nivel 2'}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-stone-100 mt-2.5 group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                          {item.name}
                        </h4>
                        <p className="font-sans text-[11px] text-stone-400 mt-1 italic">
                          {language === 'es' ? 'Material' : 'Material'}: {item.material[language]}
                        </p>
                      </div>

                      {/* Bullet Features */}
                      <ul className="mt-4 border-t border-white/10 pt-3 flex flex-col gap-1.5">
                        {item.features[language].slice(0, 2).map((feat) => (
                          <li key={feat} className="flex items-start gap-1.5 text-[11px] text-stone-400 font-sans">
                            <Check className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Summary Box */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3 text-left backdrop-blur-md">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="font-sans text-xs text-stone-400">
                    <strong className="text-stone-200 font-bold">
                      {language === 'es' ? '¿Dudas con la talla? ' : 'Unsure about sizing? '}
                    </strong> 
                    {language === 'es' 
                      ? 'No te preocupes. Al reservar te pediremos tu altura, peso y tallas habituales de indumentaria. En el punto de salida tendrás varias tallas disponibles para asegurar un ajuste ergonómico perfecto.'
                      : 'Do not worry. Upon booking, we will request your height, weight, and standard clothing sizes. Multiple sizes will be available at the starting point to guarantee a perfect ergonomic fit.'}
                  </p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
