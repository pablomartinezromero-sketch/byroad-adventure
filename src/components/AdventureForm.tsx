import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROUTES, ROUTE_TYPES, MOTORCYCLES } from '../data';
import { Sparkles, Calendar, Bike, ShieldAlert, CheckCircle2, Calculator, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { publicAsset } from '../utils/assetUrl';

const VOGE_LOGO = publicAsset('logos/voge-logo.png');

export default function AdventureForm() {
  const { language } = useLanguage();
  
  // Booking state
  const [selectedRouteId, setSelectedRouteId] = useState<string>(ROUTES[0].id);
  const [selectedBikeId, setSelectedBikeId] = useState<string>(MOTORCYCLES[0].id);
  const [selectedGearStyle, setSelectedGearStyle] = useState<string>('adv');
  
  // Rider details
  const [riderName, setRiderName] = useState('');
  const [riderEmail, setRiderEmail] = useState('');
  const [riderLevel, setRiderLevel] = useState('intermediate');
  const [hasLicense, setHasLicense] = useState('yes');
  
  // Custom non-blocking inline error handling
  const [formError, setFormError] = useState<string | null>(null);

  // Form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedRoute = ROUTES.find((r) => r.id === selectedRouteId) || ROUTES[0];
  const selectedBike = MOTORCYCLES.find((b) => b.id === selectedBikeId) || MOTORCYCLES[0];

  // Pricing calculations
  const getBasePrice = (routeId: string) => {
    switch (routeId) {
      case 'guardianes': return 720;
      case 'corona': return 960;
      case 'travesia': return 1850;
      case 'dehesa': return 350;
      case 'senderos': return 380;
      default: return 500;
    }
  };

  const getBikeSurcharge = (bikeId: string) => {
    switch (bikeId) {
      case 'voge800rally': return 0; // standard
      case 'voge900ds': return 35; // per day surcharge
      case 'voge625dsx': return 65; // per day surcharge
      default: return 0;
    }
  };

  const getDays = (routeId: string) => {
    switch (routeId) {
      case 'dehesa':
      case 'senderos':
        return 1;
      case 'guardianes':
        return 3;
      case 'corona':
        return 4;
      case 'travesia':
        return 7;
      default:
        return 1;
    }
  };

  const daysCount = getDays(selectedRouteId);
  const basePrice = getBasePrice(selectedRouteId);
  const finalBikeSurcharge = getBikeSurcharge(selectedBikeId) * daysCount;
  const totalPrice = basePrice + finalBikeSurcharge;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!riderName.trim() || !riderEmail.trim()) {
      setFormError(
        language === 'es'
          ? 'Por favor, rellena tu nombre y dirección de correo electrónico.'
          : 'Please fill out your name and email address.'
      );
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setRiderName('');
    setRiderEmail('');
    setRiderLevel('intermediate');
    setHasLicense('yes');
    setFormError(null);
    setIsSubmitted(false);
  };

  return (
    <section className="py-24 bg-black/10 border-t border-white/10 relative" id="reserva">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <Calculator className="w-4 h-4" /> {language === 'es' ? 'CALCULADORA DE ESCAPADA' : 'GETAWAY CALCULATOR'}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-4 tracking-tight uppercase italic">
            {language === 'es' ? 'Diseña tu ruta a medida' : 'Design Your Custom Adventure'}
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
            {language === 'es'
              ? 'Configura tu viaje de ensueño. Calcula el presupuesto en tiempo real, escoge tu moto de alquiler y deja listo tu equipamiento sin compromiso de pago inmediato.'
              : 'Configure your dream getaway. Calculate your budget in real-time, choose your rental motorcycle, and customize your riding gear with no upfront deposit.'}
          </p>
        </div>

        {/* Interactive Booking Box */}
        <div className="frosted-panel rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden relative" id="booking-container">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left"
              >
                
                {/* LEFT OPTIONS PANEL (Col-span 7) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  {/* Step 1: Select Route */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3 block">
                      {language === 'es' ? '1. Elige tu Ruta Escénica' : '1. Choose Your Scenic Route'}
                    </label>
                    <div className="flex flex-col gap-5">
                      {ROUTE_TYPES.map((type) => {
                        const typeRoutes = ROUTES.filter((route) => route.routeType === type.id);
                        return (
                          <div key={type.id}>
                            <div className="mb-2">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-500">
                                {type.label[language]}
                              </span>
                              <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                                {type.description[language]}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {typeRoutes.map((route) => (
                                <button
                                  key={route.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedRouteId(route.id);
                                    setFormError(null);
                                  }}
                                  className={`p-4 rounded-3xl border text-left flex flex-col justify-between transition-all duration-300 ${
                                    selectedRouteId === route.id
                                      ? 'bg-orange-500/10 border-orange-500 text-white'
                                      : 'bg-white/5 border border-white/10 hover:border-orange-500/40 text-stone-300 hover:text-white'
                                  }`}
                                >
                                  <div>
                                    <span className="text-[9px] font-mono text-stone-400 uppercase">
                                      {route.distance} · {route.duration[language]}
                                    </span>
                                    <h4 className="font-display font-bold text-xs sm:text-sm text-stone-100 mt-1 uppercase tracking-tight">
                                      {route.name[language]}
                                    </h4>
                                  </div>
                                  <span className="text-xs font-mono font-bold text-orange-400 mt-3 block">
                                    {language === 'es' ? 'Desde' : 'From'} {getBasePrice(route.id)}€
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Select Motorcycle */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3 block">
                      {language === 'es' ? '2. Elige tu Moto de Aventura' : '2. Choose Your Adventure Motorcycle'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {MOTORCYCLES.map((bike) => (
                        <button
                          key={bike.id}
                          type="button"
                          onClick={() => {
                            setSelectedBikeId(bike.id);
                            setFormError(null);
                          }}
                          className={`p-4 rounded-3xl border text-left flex flex-col justify-between transition-all duration-300 ${
                            selectedBikeId === bike.id
                              ? 'bg-orange-500/10 border-orange-500 text-white shadow-lg'
                              : 'bg-white/5 border border-white/10 hover:border-orange-500/40 text-stone-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-14 h-8 flex items-center justify-center px-1">
                              <img src={VOGE_LOGO} alt="Voge" className="h-5 w-auto max-w-full object-contain opacity-95" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[9px] font-mono text-stone-400 uppercase">{bike.engine.split(' | ')[0]}</span>
                              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-100 mt-1 uppercase tracking-tight">{bike.name.replace(/^Voge\s/, '')}</h4>
                            </div>
                          </div>
                          <span className="text-[11px] font-sans text-stone-400 mt-3 block">
                            {getBikeSurcharge(bike.id) === 0 
                              ? (language === 'es' ? 'Sin recargo' : 'No surcharge') 
                              : `+${getBikeSurcharge(bike.id)}€ / ${language === 'es' ? 'día' : 'day'}`}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Select Gear Style */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3 block">
                      {language === 'es' ? '3. Estilo de Equipación Incluida' : '3. Included Riding Apparel Style'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedGearStyle('adv');
                          setFormError(null);
                        }}
                        className={`p-4 rounded-3xl border text-left flex gap-3.5 items-start transition-all duration-300 ${
                          selectedGearStyle === 'adv'
                            ? 'bg-orange-500/10 border-orange-500 text-white'
                            : 'bg-white/5 border border-white/10 hover:border-orange-500/40 text-stone-300 hover:text-white'
                        }`}
                      >
                        <div className="bg-white/5 border border-white/10 p-2 rounded-xl mt-0.5 text-orange-500">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-stone-200 uppercase tracking-tight">
                            {language === 'es' ? 'Traje Técnico Adventure' : 'Adventure Technical Suit'}
                          </h4>
                          <p className="font-sans text-[11px] text-stone-400 mt-1">
                            {language === 'es'
                              ? 'Chaquetas multicapa Revit y cascos Shoei con visor de amplio campo de visión.'
                              : 'Multi-layer Revit jackets and Shoei helmets with premium panoramic face shields.'}
                          </p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedGearStyle('retro');
                          setFormError(null);
                        }}
                        className={`p-4 rounded-3xl border text-left flex gap-3.5 items-start transition-all duration-300 ${
                          selectedGearStyle === 'retro'
                            ? 'bg-orange-500/10 border-orange-500 text-white'
                            : 'bg-white/5 border border-white/10 hover:border-orange-500/40 text-stone-300 hover:text-white'
                        }`}
                      >
                        <div className="bg-white/5 border border-white/10 p-2 rounded-xl mt-0.5 text-orange-500">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-stone-200 uppercase tracking-tight">
                            {language === 'es' ? 'Estilo Clásico Scrambler' : 'Classic Scrambler Style'}
                          </h4>
                          <p className="font-sans text-[11px] text-stone-400 mt-1">
                            {language === 'es'
                              ? 'Cazadora de cuero Spidi Tracker, casco vintage de burbuja Bell y guantes de piel flor.'
                              : 'Spidi Tracker leather jacket, vintage Bell bubble-shield helmet, and full-grain leather gloves.'}
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Step 4: Rider Contact Details */}
                  <div className="border-t border-white/10 pt-6 mt-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3 block">
                      {language === 'es' ? '4. Información del Piloto' : '4. Rider Details'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-500 mb-1.5 block">
                          {language === 'es' ? 'Nombre del Piloto' : 'Rider Name'}
                        </span>
                        <input
                          type="text"
                          placeholder={language === 'es' ? 'Ej: Pablo Martínez' : 'e.g. Pablo Martinez'}
                          value={riderName}
                          onChange={(e) => {
                            setRiderName(e.target.value);
                            setFormError(null);
                          }}
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3 text-stone-200 text-sm focus:outline-none transition-all placeholder-stone-600"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-500 mb-1.5 block">
                          {language === 'es' ? 'Email de Contacto' : 'Contact Email'}
                        </span>
                        <input
                          type="email"
                          placeholder={language === 'es' ? 'Ej: pablo@ejemplo.com' : 'e.g. pablo@example.com'}
                          value={riderEmail}
                          onChange={(e) => {
                            setRiderEmail(e.target.value);
                            setFormError(null);
                          }}
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3 text-stone-200 text-sm focus:outline-none transition-all placeholder-stone-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-500 mb-1.5 block">
                          {language === 'es' ? 'Experiencia de Conducción' : 'Riding Experience'}
                        </span>
                        <select
                          value={riderLevel}
                          onChange={(e) => setRiderLevel(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3 text-stone-300 text-sm focus:outline-none transition-all"
                        >
                          <option value="beginner" className="bg-neutral-900 text-stone-300">
                            {language === 'es' ? 'Principiante (menos de 2 años)' : 'Beginner (less than 2 years)'}
                          </option>
                          <option value="intermediate" className="bg-neutral-900 text-stone-300">
                            {language === 'es' ? 'Intermedio (curvas habituales de fin de semana)' : 'Intermediate (regular curves)'}
                          </option>
                          <option value="expert" className="bg-neutral-900 text-stone-300">
                            {language === 'es' ? 'Avanzado (viajero habitual de larga distancia)' : 'Advanced (seasoned road traveler)'}
                          </option>
                        </select>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-500 mb-1.5 block">
                          {language === 'es' ? '¿Tienes carnet de moto A o A2?' : 'Do you have a valid motorcycle license?'}
                        </span>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setHasLicense('yes')}
                            className={`flex-1 py-3 px-4 rounded-xl border font-sans text-xs font-semibold text-center transition-all duration-300 ${
                              hasLicense === 'yes'
                                ? 'bg-orange-500/15 border-orange-500 text-orange-400 font-bold'
                                : 'bg-white/5 border-white/10 text-stone-400'
                            }`}
                          >
                            {language === 'es' ? 'Sí, tengo carnet vigente' : 'Yes, valid license'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setHasLicense('no')}
                            className={`flex-1 py-3 px-4 rounded-xl border font-sans text-xs font-semibold text-center transition-all duration-300 ${
                              hasLicense === 'no'
                                ? 'bg-red-500/10 border-red-500/50 text-red-400'
                                : 'bg-white/5 border-white/10 text-stone-400'
                            }`}
                          >
                            {language === 'es' ? 'No, no tengo carnet' : 'No, unlicensed'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT SUMMARY PANEL (Col-span 5) */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between self-stretch shadow-2xl backdrop-blur-md">
                  <div className="flex flex-col gap-5">
                    <h3 className="font-display font-black text-lg text-white border-b border-white/10 pb-3 flex items-center justify-between uppercase italic tracking-wide">
                      <span>{language === 'es' ? 'Tu Presupuesto' : 'Your Quote'}</span>
                      <span className="font-mono text-[9px] text-orange-500 font-bold bg-orange-500/10 px-2.5 py-1 border border-orange-500/20 rounded-full uppercase">
                        {language === 'es' ? 'TODO INCLUIDO' : 'ALL-INCLUSIVE'}
                      </span>
                    </h3>

                    {/* Cost Breakdown */}
                    <div className="flex flex-col gap-3.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-400 font-sans">
                          {language === 'es' ? 'Ruta Seleccionada:' : 'Selected Route:'}
                        </span>
                        <span className="text-stone-100 font-display font-bold text-right max-w-[180px] truncate">
                          {selectedRoute.name[language]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-400 font-sans">
                          {language === 'es' ? 'Duración del Viaje:' : 'Tour Duration:'}
                        </span>
                        <span className="text-stone-100 font-mono font-bold">
                          {daysCount} {language === 'es' ? 'días' : 'days'} ({selectedRoute.distance[language]})
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-400 font-sans">
                          {language === 'es' ? 'Motocicleta Escogida:' : 'Selected Motorcycle:'}
                        </span>
                        <span className="text-stone-100 font-display font-bold">{selectedBike.name}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-400 font-sans">
                          {language === 'es' ? 'Traje y Protecciones CE:' : 'CE Riding Apparel:'}
                        </span>
                        <span className="text-stone-100 font-display font-bold uppercase text-[9px] text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                          {language === 'es' ? 'Gratis • Incluido' : 'Free • Included'}
                        </span>
                      </div>
                      
                      <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center text-xs text-stone-400">
                          <span>{language === 'es' ? 'Base de la Ruta:' : 'Route Base:'}</span>
                          <span className="text-stone-200">{basePrice}€</span>
                        </div>
                        {finalBikeSurcharge > 0 && (
                          <div className="flex justify-between items-center text-xs text-stone-400">
                            <span>{language === 'es' ? `Suplemento ${selectedBike.name.split(' ').slice(-1)}:` : `${selectedBike.name.split(' ').slice(-1)} Surcharge:`}</span>
                            <span className="text-stone-200">+{finalBikeSurcharge}€</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Final Calculation Section */}
                  <div className="border-t border-white/10 pt-5 mt-6 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[10px] font-mono text-stone-500 uppercase">
                          {language === 'es' ? 'PRESUPUESTO TOTAL' : 'ESTIMATED TOTAL'}
                        </span>
                        <p className="text-3xl font-display font-black text-white leading-none mt-1">
                          {totalPrice}€
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400 text-right">
                        {language === 'es' ? 'Aprox.' : 'Approx.'} {Math.round(totalPrice / daysCount)}€ / {language === 'es' ? 'día' : 'day'}
                      </span>
                    </div>

                    {/* License Warn Warning */}
                    {hasLicense === 'no' && (
                      <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-2xl flex items-start gap-2 text-[10px] text-red-300 leading-relaxed font-sans">
                        <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>
                          {language === 'es'
                            ? 'Se requiere carnet A o A2 vigente para conducir las motos de la flota. Si no dispones de carnet, puedes reservar como '
                            : 'A valid motorcycle license is required to operate our fleet. If you do not have a license, you may book as a '}
                          <strong className="text-white">{language === 'es' ? 'Acompañante de ruta' : 'Passenger'}</strong> {language === 'es' ? 'en el mismo grupo.' : 'within the group.'}
                        </span>
                      </div>
                    )}

                    {/* Error message inline */}
                    {formError && (
                      <div className="bg-red-500/15 border border-red-500/30 p-3 rounded-2xl flex items-start gap-2 text-[10px] text-red-400 leading-relaxed font-sans">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Action button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-orange-500 hover:bg-orange-400 text-black font-display font-bold py-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] tracking-wider uppercase text-xs flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/10 cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          {language === 'es' ? 'Reservando plaza...' : 'Securing your spot...'}
                        </>
                      ) : (
                        <>
                          {language === 'es' ? 'Solicitar Reserva de Plaza' : 'Request Tour Reservation'}
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-stone-500 text-center font-sans">
                      {language === 'es'
                        ? '*No se cargará ningún importe hoy. Nos pondremos en contacto contigo para verificar la disponibilidad, fecha exacta y concretar tallas de indumentaria.'
                        : '*No payment is collected today. We will contact you to verify availability, coordinate exact dates, and finalize clothing sizes.'}
                    </p>
                  </div>

                </div>

              </motion.form>
            ) : (
              /* Step 6: Confirmation/Completion State */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center flex flex-col items-center justify-center max-w-xl mx-auto"
                id="booking-success-box"
              >
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-full w-fit mb-6 animate-pulse">
                  <CheckCircle2 className="w-12 h-12 stroke-[2]" />
                </div>
                
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">
                  {language === 'es' ? '¡SOLICITUD CONFIRMADA!' : 'REQUEST CONFIRMED!'}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-100 mt-2.5 mb-3 tracking-tight uppercase italic">
                  {language === 'es' ? `Hola, ${riderName}. Tu aventura comienza aquí.` : `Hello, ${riderName}. Your adventure starts here.`}
                </h3>
                
                <p className="font-sans text-stone-300 text-sm leading-relaxed mb-8">
                  {language === 'es' ? (
                    <>
                      Hemos guardado tu presupuesto estimado de <strong className="text-orange-500">{totalPrice}€</strong> para la <strong className="text-white">{selectedRoute.name[language]}</strong> a lomos de la <strong className="text-white">{selectedBike.name}</strong>. Hemos enviado una copia de confirmación de reserva a <strong className="text-white">{riderEmail}</strong>. Un guía local de Byroad Adventures te llamará en las próximas 24 horas para definir la mejor fecha.
                    </>
                  ) : (
                    <>
                      We have saved your estimated quote of <strong className="text-orange-500">{totalPrice}€</strong> for the <strong className="text-white">{selectedRoute.name[language]}</strong> riding the <strong className="text-white">{selectedBike.name}</strong>. We have sent a reservation copy to <strong className="text-white">{riderEmail}</strong>. A local Byroad Adventures guide will call you within the next 24 hours to coordinate the details.
                    </>
                  )}
                </p>

                {/* Summary block */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl w-full text-left flex flex-col gap-3.5 mb-8">
                  <h4 className="font-display font-bold text-xs text-stone-400 uppercase tracking-wider border-b border-white/10 pb-2">
                    {language === 'es' ? 'Resumen provisional:' : 'Provisional Summary:'}
                  </h4>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">{language === 'es' ? 'Ruta:' : 'Route:'}</span> 
                    <span className="text-stone-300 font-bold">{selectedRoute.name[language]}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">{language === 'es' ? 'Vehículo:' : 'Vehicle:'}</span> 
                    <span className="text-stone-300 font-bold">{selectedBike.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">{language === 'es' ? 'Estilo de Equipo:' : 'Gear Style:'}</span> 
                    <span className="text-stone-300 font-bold">
                      {selectedGearStyle === 'adv' 
                        ? (language === 'es' ? 'Técnico Adventure' : 'Adventure Technical') 
                        : (language === 'es' ? 'Clásico Retro Leather' : 'Classic Retro Leather')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs border-t border-white/10 pt-2">
                    <span className="text-stone-500 font-bold">{language === 'es' ? 'Total estimado:' : 'Estimated Total:'}</span> 
                    <span className="text-orange-400 font-mono font-bold text-sm">{totalPrice}€</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleReset}
                    className="bg-white/5 border border-white/10 hover:border-white/20 text-stone-300 hover:text-white font-display font-bold text-xs px-6 py-3 rounded-xl transition-all"
                  >
                    {language === 'es' ? 'Crear Otra Configuración' : 'Create Another Quote'}
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-orange-500 hover:bg-orange-400 text-black font-display font-bold text-xs px-6 py-3 rounded-xl transition-all"
                  >
                    {language === 'es' ? 'Volver al Inicio' : 'Back to Top'}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
