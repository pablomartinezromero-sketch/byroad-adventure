import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, Calendar, ShieldCheck, Star, Compass } from 'lucide-react';
import { ROUTES, ROUTE_TYPES } from '../data';
import { RouteType } from '../types';
import { useLanguage } from '../LanguageContext';
import scenicViewImg from '../assets/images/motorcycle_scenic_view_1782234937146.jpg';

export default function RouteExplorer() {
  const { language } = useLanguage();
  const [activeRouteType, setActiveRouteType] = useState<RouteType>('custom');
  const [activeRouteId, setActiveRouteId] = useState<string>(
    ROUTES.find((r) => r.routeType === 'custom')?.id ?? ROUTES[0].id
  );

  const routesInType = useMemo(
    () => ROUTES.filter((route) => route.routeType === activeRouteType),
    [activeRouteType]
  );

  const activeRoute = ROUTES.find((r) => r.id === activeRouteId) || routesInType[0] || ROUTES[0];
  const activeTypeMeta = ROUTE_TYPES.find((type) => type.id === activeRouteType)!;

  const handleTypeChange = (type: RouteType) => {
    setActiveRouteType(type);
    const firstInType = ROUTES.find((route) => route.routeType === type);
    if (firstInType) setActiveRouteId(firstInType.id);
  };

  const getRouteSvgPath = (id: string) => {
    switch (id) {
      case 'canones':
        return 'M 20,130 C 40,80 80,180 120,60 C 160,150 200,90 240,160 C 280,40 320,140 380,80';
      case 'encinas':
        return 'M 20,100 C 60,60 100,140 150,70 C 200,130 260,50 320,120 C 350,80 365,100 380,90';
      case 'silencio':
        return 'M 20,80 C 60,150 100,50 150,140 C 200,80 250,150 280,50 C 310,120 340,60 380,120';
      case 'atlantico':
        return 'M 20,50 C 40,120 70,30 110,150 C 160,80 190,160 250,40 C 300,120 340,30 380,150';
      case 'dehesa':
        return 'M 20,120 C 50,90 90,150 130,80 C 170,140 220,60 280,130 C 320,90 350,110 380,100';
      case 'senderos':
        return 'M 20,140 C 40,100 80,160 120,70 C 160,150 200,50 260,140 C 300,80 340,120 380,60';
      default:
        return 'M 20,100 Q 100,20 Q 200,180 Q 300,20 Q 380,100';
    }
  };

  const getRouteImage = (id: string) => {
    if (id === 'atlantico') {
      return scenicViewImg;
    }
    if (id === 'canones') {
      return 'https://picsum.photos/seed/canones/800/600';
    }
    if (id === 'dehesa' || id === 'senderos') {
      return `https://picsum.photos/seed/${id}/800/600`;
    }
    return `https://picsum.photos/seed/${id}/800/600`;
  };

  const routeStartY: Record<string, number> = {
    canones: 130,
    encinas: 100,
    silencio: 80,
    atlantico: 50,
    dehesa: 120,
    senderos: 140,
  };

  const routeEndY: Record<string, number> = {
    canones: 80,
    encinas: 90,
    silencio: 120,
    atlantico: 150,
    dehesa: 100,
    senderos: 60,
  };

  const startY = routeStartY[activeRouteId] ?? 100;
  const endY = routeEndY[activeRouteId] ?? 100;

  return (
    <section className="py-24 bg-black/10 border-t border-white/10 relative" id="rutas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold">
              {language === 'es' ? 'EXPLORA EL MAPA SECRETO' : 'EXPLORE THE SECRET MAP'}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-2 tracking-tight uppercase italic">
              {language === 'es' ? 'Rutas diseñadas para desconectar' : 'Routes designed to disconnect'}
            </h2>
            <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
              {language === 'es'
                ? 'Olvida el GPS convencional. Te llevamos por carreteras singulares seleccionadas por sus paisajes asombrosos, la nula presencia de camiones y la fluidez de sus curvas.'
                : 'Forget the standard GPS. We guide you through unique roads hand-selected for stunning landscapes, zero truck traffic, and the sheer flow of curves.'}
            </p>
          </div>
        </div>

        {/* Route type selection */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-3 block">
            {language === 'es' ? 'Tipo de ruta' : 'Route type'}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3" id="route-type-tabs">
            {ROUTE_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type.id)}
                className={`p-5 rounded-3xl border text-left transition-all duration-300 ${
                  activeRouteType === type.id
                    ? 'bg-orange-500/10 border-orange-500 shadow-lg shadow-orange-500/10'
                    : 'bg-white/5 border-white/10 hover:border-orange-500/40'
                }`}
              >
                <h3
                  className={`font-display font-black text-lg uppercase italic tracking-tight ${
                    activeRouteType === type.id ? 'text-orange-500' : 'text-white'
                  }`}
                >
                  {type.label[language]}
                </h3>
                <p className="font-sans text-xs text-stone-400 mt-2 leading-relaxed">
                  {type.description[language]}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Sub-route selection */}
        <div className="mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-3 block">
            {language === 'es' ? 'Sub-rutas' : 'Sub-routes'} · {activeTypeMeta.label[language]}
          </span>
          <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 w-fit" id="route-tabs">
            {routesInType.map((route) => (
              <button
                key={route.id}
                onClick={() => setActiveRouteId(route.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeRouteId === route.id
                    ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/10'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {route.name[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="route-display-block">
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRouteId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6 text-left"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold bg-orange-500/10 border border-orange-500/30 text-orange-500 px-2.5 py-1 rounded-full uppercase">
                      {activeTypeMeta.label[language]}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-orange-500/10 border border-orange-500/30 text-orange-500 px-2.5 py-1 rounded-full uppercase">
                      {language === 'es' ? 'Dificultad' : 'Difficulty'} {activeRoute.difficulty[language]}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-stone-300 px-2.5 py-1 rounded-full uppercase">
                      {activeRoute.terrain[language]}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase italic">
                    {activeRoute.name[language]}
                  </h3>
                  <p className="font-sans font-medium text-orange-500/90 text-sm mt-1 uppercase tracking-tight">
                    {activeRoute.tagline[language]}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-stone-500 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-orange-500" /> {language === 'es' ? 'Distancia' : 'Distance'}
                    </span>
                    <span className="text-lg font-display font-bold text-stone-100 mt-1">{activeRoute.distance}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-stone-500 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" /> {language === 'es' ? 'Duración' : 'Duration'}
                    </span>
                    <span className="text-lg font-display font-bold text-stone-100 mt-1">{activeRoute.duration[language]}</span>
                  </div>
                  <div className="flex flex-col col-span-2 sm:col-span-2">
                    <span className="text-stone-500 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                      {language === 'es' ? 'Conducción / Curvas' : 'Riding / Curves'}
                    </span>
                    <div className="flex items-center gap-1 mt-1.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${
                            idx < activeRoute.curves ? 'fill-orange-500 text-orange-500' : 'text-stone-700'
                          }`}
                        />
                      ))}
                      <span className="text-xs font-mono text-stone-400 ml-1">({activeRoute.curves}/5)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-2 font-bold">
                    {language === 'es' ? 'El Plan de Viaje' : 'The Trip Plan'}
                  </h4>
                  <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed">
                    {activeRoute.description[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3 font-bold">
                    {language === 'es' ? 'Puntos Clave Exclusivos' : 'Exclusive Highlights'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeRoute.highlights[language].map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-stone-300 text-xs sm:text-sm font-sans">
                        <ShieldCheck className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-orange-500/80 mb-3 font-bold flex items-center gap-1.5">
                <Map className="w-3.5 h-3.5" /> {language === 'es' ? 'Perfil de curvas del trayecto (Topología de Ruta)' : 'Route Curves Profile (Road Topology)'}
              </h4>
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10 h-36 relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full absolute inset-0 opacity-10" viewBox="0 0 400 200">
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#fff" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#fff" strokeDasharray="3 3" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#fff" strokeDasharray="3 3" />
                </svg>

                <AnimatePresence mode="wait">
                  <motion.svg
                    key={activeRouteId}
                    className="w-full h-full relative z-10"
                    viewBox="0 0 400 200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.path
                      d={getRouteSvgPath(activeRouteId)}
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                    <circle cx="20" cy={startY} r="6" fill="#f97316" className="animate-ping" />
                    <circle cx="20" cy={startY} r="4" fill="#121214" stroke="#f97316" strokeWidth="2" />
                    <circle cx="380" cy={endY} r="6" fill="#ef4444" />
                    <text x="15" y={startY - 15} fill="#a8a29e" className="font-mono text-[9px] font-bold">{language === 'es' ? 'INICIO' : 'START'}</text>
                    <text x="360" y={endY - 15} fill="#ef4444" className="font-mono text-[9px] font-bold">{language === 'es' ? 'FIN' : 'END'}</text>
                  </motion.svg>
                </AnimatePresence>

                <div className="absolute bottom-3 right-3 text-[9px] font-mono text-stone-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                  {language === 'es' ? 'Vista Isométrica • Trazado Secundario' : 'Isometric View • Backroad Mapping'}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 self-stretch">
            <div className="relative h-64 sm:h-96 lg:h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end" id="route-preview-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRouteId}
                  src={getRouteImage(activeRouteId)}
                  alt={activeRoute.name[language]}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10" />

              <div className="relative z-20 p-6 flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-mono text-orange-500 font-bold tracking-widest uppercase">
                  {activeTypeMeta.label[language]} · {language === 'es' ? 'EXPLORACIÓN EXCLUSIVA' : 'EXCLUSIVE RIDE'}
                </span>
                <h4 className="font-display font-black text-lg text-white uppercase italic">
                  {activeRoute.tagline[language]}
                </h4>
                <p className="font-sans text-xs text-stone-300 max-w-sm">
                  {activeRoute.description[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
