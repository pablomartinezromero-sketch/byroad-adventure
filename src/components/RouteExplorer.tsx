import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ShieldCheck, Star, Compass, FileText, Route, Bed } from 'lucide-react';
import { ROUTES, ROUTE_TYPES } from '../data';
import { ROUTE_EXTRAS } from '../data/routeExtras';
import { RouteType } from '../types';
import { useLanguage } from '../LanguageContext';
import RoutePhotoCarousel from './RoutePhotoCarousel';
import { publicAsset } from '../utils/assetUrl';

type RouteContentTab = 'description' | 'detail' | 'accommodations';

export default function RouteExplorer() {
  const { language } = useLanguage();
  const [activeRouteType, setActiveRouteType] = useState<RouteType>('custom');
  const [activeRouteId, setActiveRouteId] = useState<string>(
    ROUTES.find((r) => r.routeType === 'custom')?.id ?? ROUTES[0].id
  );
  const [contentTab, setContentTab] = useState<RouteContentTab>('description');

  useEffect(() => {
    setContentTab('description');
  }, [activeRouteId]);

  const contentTabs: { id: RouteContentTab; label: { es: string; en: string }; icon: typeof FileText }[] = [
    { id: 'description', label: { es: 'Descripción', en: 'Description' }, icon: FileText },
    { id: 'detail', label: { es: 'Detalle ruta', en: 'Route detail' }, icon: Route },
    { id: 'accommodations', label: { es: 'Alojamientos', en: 'Accommodations' }, icon: Bed },
  ];

  const routeExtras = ROUTE_EXTRAS[activeRouteId];

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

  const getRouteImage = (id: string) => {
    if (id === 'corona') {
      return publicAsset('images/routes/corona/ordesa.jpg');
    }
    if (id === 'travesia') {
      return publicAsset('images/routes/travesia/hondarribia.jpg');
    }
    if (id === 'dehesa' || id === 'senderos') {
      return `https://picsum.photos/seed/${id}/800/600`;
    }
    return `https://picsum.photos/seed/${id}/800/600`;
  };

  const expandPhotoToContent = contentTab === 'description';

  const routePhotoCard = (
    <div
      className="relative flex-1 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end"
      id="route-preview-card"
    >
      {activeRoute.gallery?.length ? (
        <div key={activeRouteId} className="absolute inset-0">
          <RoutePhotoCarousel
            images={activeRoute.gallery}
            language={language}
            alt={activeRoute.name[language]}
          />
        </div>
      ) : (
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
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10" />

      <div className="relative z-20 p-4 flex flex-col gap-1 text-left">
        <span className="text-[10px] font-mono text-orange-500 font-bold tracking-widest uppercase">
          {activeTypeMeta.label[language]} · {language === 'es' ? 'EXPLORACIÓN EXCLUSIVA' : 'EXCLUSIVE RIDE'}
        </span>
        <h4 className="font-display font-black text-base text-white uppercase italic line-clamp-2">
          {activeRoute.tagline[language]}
        </h4>
      </div>
    </div>
  );

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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRouteId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
            id="route-display-block"
          >
            <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1 text-left">
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

                <div className="flex flex-wrap gap-2 mt-4" role="tablist">
                  {contentTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={contentTab === tab.id}
                        onClick={() => setContentTab(tab.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-display font-bold uppercase tracking-wider transition-all duration-300 border ${
                          contentTab === tab.id
                            ? 'bg-orange-500 text-black border-orange-500 shadow-lg shadow-orange-500/15'
                            : 'bg-white/5 text-stone-300 border-white/10 hover:text-white hover:border-orange-500/40'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {tab.label[language]}
                      </button>
                    );
                  })}
                </div>
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

              {expandPhotoToContent && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeRouteId}-description`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    role="tabpanel"
                    className="flex flex-col gap-6"
                  >
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
              )}
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex min-h-48 sm:min-h-56">
              {routePhotoCard}
            </div>

            {contentTab === 'detail' && routeExtras && (
              <div className="lg:col-span-12 order-3 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeRouteId}-detail`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    role="tabpanel"
                    className="flex flex-col gap-4"
                  >
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
                      {language === 'es' ? 'Itinerario etapa a etapa' : 'Stage-by-stage itinerary'}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {routeExtras.routeDetail[language].map((stage) => (
                        <div
                          key={stage.title[language]}
                          className="p-5 rounded-3xl border text-left bg-white/5 border-white/10 hover:border-orange-500/40 transition-all duration-300"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <h5 className="font-display font-black text-lg uppercase italic tracking-tight text-white">
                              {stage.title[language]}
                            </h5>
                            {stage.distance && (
                              <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full uppercase">
                                {stage.distance}
                              </span>
                            )}
                          </div>
                          <p className="font-sans text-xs text-stone-400 mt-2 leading-relaxed whitespace-pre-line">
                            {stage.content[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {contentTab === 'accommodations' && routeExtras && (
              <div className="lg:col-span-7 order-3 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeRouteId}-accommodations`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    role="tabpanel"
                    className="flex flex-col gap-4"
                  >
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
                      {language === 'es' ? 'Alojamientos premium incluidos' : 'Premium accommodations included'}
                    </h4>
                    {routeExtras.accommodations.map((stay) => (
                      <div
                        key={stay.name[language]}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        {stay.image && (
                          <div className="sm:col-span-4 relative h-44 sm:h-auto sm:min-h-[11rem] rounded-2xl overflow-hidden border border-white/10">
                            <img
                              src={stay.image}
                              alt={stay.name[language]}
                              className="absolute inset-0 w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                            <span className="absolute bottom-3 left-3 text-[10px] font-mono text-orange-500 font-bold tracking-widest uppercase">
                              {stay.type[language]}
                            </span>
                          </div>
                        )}
                        <div className={stay.image ? 'sm:col-span-8 flex flex-col justify-center' : 'sm:col-span-12'}>
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h5 className="font-display font-bold text-sm text-stone-100">
                              {stay.name[language]}
                            </h5>
                            {!stay.image && (
                              <span className="text-[10px] font-mono text-stone-400 uppercase">
                                {stay.type[language]}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] font-mono text-orange-500/90 mb-2">{stay.location[language]}</p>
                          <p className="font-sans text-stone-300 text-xs sm:text-sm leading-relaxed">
                            {stay.description[language]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
