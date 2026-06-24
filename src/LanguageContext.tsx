import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<string, { es: string; en: string }> = {
  // Navbar
  'nav.tours': { es: 'Rutas', en: 'Tours' },
  'nav.philosophy': { es: 'Nuestra\nFilosofía', en: 'Our\nPhilosophy' },
  'nav.gear': { es: 'Equipamiento', en: 'Gear' },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.faq': { es: 'Preguntas\nFrecuentes', en: 'FAQ' },
  'nav.book': { es: 'Reservar', en: 'Book Tour' },
  
  // Hero
  'hero.title': { es: 'Descubre la España Auténtica sobre dos ruedas', en: 'Discover the Authentic Spain on Two Wheels' },
  'hero.subtitle': { es: 'Rutas guiadas por carreteras secundarias infinitas, asfalto perfecto y paisajes espectaculares. Moto premium y equipación de alta gama incluidas. Solo tienes que volar y disfrutar.', en: 'Guided tours through endless backroads, perfect tarmac, and spectacular scenery. Premium motorcycle and high-end gear included. Just fly in and ride.' },
  'hero.cta.book': { es: 'Reserva tu Aventura', en: 'Book Your Adventure' },
  'hero.cta.explore': { es: 'Explorar Rutas', en: 'Explore Our Tours' },
  'hero.badge': { es: 'RUTAS EN MOTO PREMIUM TODO INCLUIDO', en: 'PREMIUM ALL-INCLUSIVE MOTORCYCLE TOURS' },
  'hero.sub_badge': { es: 'Todo Incluido • Moto • Equipamiento • Hoteles • Guías', en: 'All-Inclusive • Bike • Gear • Hotels • Guides' },
  'hero.stats.groups.title': { es: 'Grupos Reducidos', en: 'Small Groups' },
  'hero.stats.groups.subtitle': { es: 'Rutas sin prisas, momentos sin filtros', en: 'Unhurried Routes, Unfiltered Moments' },
  'hero.stats.safety.title': { es: 'Viaja seguro', en: 'Travel Safe' },
  'hero.stats.lodging.title': { es: 'Alojamientos con encanto', en: 'Charming Accommodations' },
  'hero.stats.lodging.subtitle': { es: 'Alojamiento y gastronomía locales', en: 'Local lodging and gastronomy' },

  // Philosophy / Pain Points
  'philosophy.badge': { es: 'NUESTROS PILARES', en: 'OUR CORE PILLARS' },
  'philosophy.title': { es: 'El viaje perfecto sin preocupaciones', en: 'The Perfect Worry-Free Journey' },
  'philosophy.subtitle': { es: 'Resolvemos todas las barreras logísticas para que tu única preocupación sea disfrutar del asfalto y los paisajes.', en: 'We solve all the logistical hurdles so your only concern is enjoying the pavement and the breathtaking scenery.' },
  'philosophy.p1.title': { es: 'Vuela y Pilota', en: 'Fly & Ride' },
  'philosophy.p1.desc': { es: 'Olvídate de la logística. Te entregamos una moto impecable y equipación de seguridad completa a tu llegada.', en: 'Forget the logistics. We hand you a pristine motorcycle and complete top-tier safety gear upon your arrival.' },
  'philosophy.p2.title': { es: 'Rutas Secundarias Curadas', en: 'Curated Backroads' },
  'philosophy.p2.desc': { es: 'Sin autopistas aburridas. Rutas seleccionadas curva a curva por expertos locales para descubrir la España que no sale en las guías turísticas.', en: 'No boring highways. Routes curated corner-by-corner by local experts to discover the Spain that isn\'t in any tourist guide.' },
  'philosophy.p3.title': { es: 'Alojamientos Premium', en: 'Premium Hospitality' },
  'philosophy.p3.desc': { es: 'Alojamientos con encanto y la mejor gastronomía local esperándote al final de cada jornada.', en: 'Charming boutique accommodations and the absolute finest local gastronomy awaiting you at the end of each riding day.' },
  'philosophy.p4.title': { es: 'Apoyo y Grupos de 8', en: 'Support & Small Groups (Max 8)' },
  'philosophy.p4.desc': { es: 'Viaja ligero y seguro con nuestro vehículo de asistencia discreto para tu equipaje y guías expertos liderando pequeños grupos ágiles de máximo 8 pilotos.', en: 'Travel light and safe with our discrete support vehicle for your luggage, while expert guides lead agile small groups of max 8 riders.' },

  // Route Explorer
  'routes.badge': { es: 'CONDUCCIÓN CURADA', en: 'CURATED RIDING' },
  'routes.title': { es: 'Explora nuestros itinerarios secretos', en: 'Explore Our Secret Itineraries' },
  'routes.subtitle': { es: 'Diseñados meticulosamente para evitar el tráfico pesado y maximizar el flujo y el disfrute visual.', en: 'Meticulously designed to avoid heavy traffic and maximize flow, corners, and scenic enjoyment.' },
  'routes.specs': { es: 'Especificaciones de Ruta', en: 'Route Specifications' },
  'routes.distance': { es: 'Distancia', en: 'Distance' },
  'routes.duration': { es: 'Duración', en: 'Duration' },
  'routes.difficulty': { es: 'Dificultad', en: 'Difficulty' },
  'routes.curves': { es: 'Nivel de Curvas', en: 'Curves Level' },
  'routes.terrain': { es: 'Terreno', en: 'Terrain' },
  'routes.highlights': { es: 'Puntos Fuertes del Viaje', en: 'Tour Highlights' },
  'routes.cta.select': { es: 'Seleccionar para Reservar', en: 'Select to Customize & Book' },
  'routes.cta.selected': { es: 'Ruta Seleccionada', en: 'Selected Route' },

  // Equipment Selector
  'gear.badge': { es: 'ALTA GAMA', en: 'HIGH-END GEAR' },
  'gear.title': { es: 'Vuela ligero. Te vestimos con lo mejor.', en: 'Fly Light. We Suit You Up with the Best.' },
  'gear.subtitle': { es: 'Ponemos a tu disposición una selección de cascos, chaquetas y guantes de nivel profesional. Seguridad y confort climático garantizados.', en: 'We provide you with a curated selection of professional-grade helmets, jackets, and gloves. Absolute safety and climate comfort guaranteed.' },
  'gear.cat.helmet': { es: 'Cascos', en: 'Helmets' },
  'gear.cat.jacket': { es: 'Chaquetas', en: 'Jackets' },
  'gear.cat.gloves': { es: 'Guantes', en: 'Gloves' },
  'gear.brand': { es: 'Marca', en: 'Brand' },
  'gear.material': { es: 'Material Exterior', en: 'Outer Material' },
  'gear.features': { es: 'Características Destacadas', en: 'Featured Benefits' },
  'gear.included': { es: 'Incluido en tu Reserva', en: 'Included in Your Tour' },
  'gear.tag': { es: 'Ajuste Profesional', en: 'Professional Fit' },

  // Testimonials
  'testimonials.badge': { es: 'OPINIONES REALES', en: 'RIDER TESTIMONIALS' },
  'testimonials.title': { es: 'Historias de la carretera secundaria', en: 'Stories from the Backroads' },
  'testimonials.subtitle': { es: 'Descubre cómo vivieron su viaje de aventura otros entusiastas de las dos ruedas que decidieron dejar sus motos y equipaje en casa.', en: 'Discover how other two-wheeled enthusiasts who decided to leave their bikes and heavy luggage at home experienced their adventure tour.' },
  'testimonials.trust': { es: 'Nuestros proveedores oficiales de confianza:', en: 'Our trusted official suppliers:' },

  // Adventure Form
  'form.badge': { es: 'CONFIGURADOR', en: 'TOUR BUILDER' },
  'form.title': { es: 'Diseña tu viaje a medida', en: 'Customize Your Adventure' },
  'form.subtitle': { es: 'Calcula tu presupuesto estimado al instante según tus preferencias de moto, equipación y días de aventura.', en: 'Calculate your instant estimated quote based on your choice of bike, high-end gear, and duration.' },
  'form.step1': { es: '1. Selección de Ruta', en: '1. Select Your Route' },
  'form.step2': { es: '2. Elige tu Moto de Aventura', en: '2. Choose Your Adventure Bike' },
  'form.step3': { es: '3. Elige tu Equipamiento (Gama Alta)', en: '3. Select Your High-End Gear' },
  'form.step4': { es: '4. Datos de Reserva y Duración', en: '4. Tour Options & Rider Details' },
  'form.selected_route': { es: 'Ruta actual:', en: 'Current Tour:' },
  'form.no_route': { es: 'Por favor, selecciona una ruta más arriba para continuar.', en: 'Please select a route from the Route Explorer above to continue.' },
  'form.suitability': { es: 'Adecuación:', en: 'Suitability:' },
  'form.bike_specs': { es: 'Especificaciones:', en: 'Specifications:' },
  'form.days': { es: 'Días de aventura sugeridos:', en: 'Suggested adventure days:' },
  'form.days.custom': { es: 'Personalizar días de viaje:', en: 'Customize duration (Days):' },
  'form.days.min_warning': { es: 'El viaje mínimo sugerido para esta ruta es de', en: 'The minimum suggested duration for this route is' },
  'form.days.suffix': { es: 'días', en: 'days' },
  'form.gear.desc': { es: 'La equipación de gama alta está 100% incluida. Marca tus preferencias para asegurar la reserva de tu talla.', en: 'High-end gear is 100% included in your package. Select your preferences to secure your sizing.' },
  'form.rider.name': { es: 'Nombre Completo del Piloto', en: 'Rider\'s Full Name' },
  'form.rider.email': { es: 'Correo Electrónico', en: 'Email Address' },
  'form.rider.phone': { es: 'Número de Teléfono (con prefijo)', en: 'Phone Number (with prefix)' },
  'form.rider.experience': { es: 'Años de Experiencia en Moto', en: 'Years of Motorcycle Experience' },
  'form.rider.experience.placeholder': { es: 'Ej: 5 años', en: 'e.g. 5 years' },
  'form.price.base': { es: 'Tarifa Base Ruta (incluye hoteles y guías)', en: 'Base Tour Rate (includes hotels & guides)' },
  'form.price.bike': { es: 'Alquiler Moto', en: 'Bike Rental' },
  'form.price.gear': { es: 'Equipamiento de Seguridad Premium', en: 'Premium Protective Gear' },
  'form.price.total': { es: 'Total Estimado Reservado', en: 'Total Estimated Quote' },
  'form.price.day': { es: 'por día', en: 'per day' },
  'form.price.included': { es: 'Gratis (Incluido)', en: 'Free (Included)' },
  'form.btn.submit': { es: 'Solicitar Reserva Sin Compromiso', en: 'Request Worry-Free Booking' },
  'form.btn.submitting': { es: 'Procesando tu Solicitud...', en: 'Processing Your Request...' },
  'form.success.title': { es: '¡Aventura Solicitada con Éxito!', en: 'Adventure Requested Successfully!' },
  'form.success.body': { es: 'Hemos guardado tu presupuesto estimado de {price}€ para la {route} a lomos de la {bike}. Hemos enviado una copia de confirmación de reserva a {email}. Un guía local de Byroad Adventures te llamará en las próximas 24 horas para definir la mejor fecha.', en: 'We have saved your estimated quote of {price}€ for the {route} riding the {bike}. We have sent a confirmation email to {email}. A local Byroad Adventures guide will call you within 24 hours to schedule and finalize details.' },
  'form.success.summary_title': { es: 'Resumen de Configuración Previa', en: 'Rider Sizing & Gear Summary' },
  'form.success.summary_route': { es: 'Ruta Seleccionada', en: 'Selected Route' },
  'form.success.summary_bike': { es: 'Moto Seleccionada', en: 'Selected Bike' },
  'form.success.summary_gear': { es: 'Equipamiento Elegido', en: 'Selected Gear' },
  'form.success.summary_duration': { es: 'Duración del Viaje', en: 'Tour Duration' },
  'form.success.summary_contact': { es: 'Datos de Contacto', en: 'Contact Details' },
  'form.success.btn.new': { es: 'Configurar Otra Ruta', en: 'Configure Another Tour' },

  // FAQs
  'faq.badge': { es: 'SOPORTE AL VIAJERO', en: 'RIDER SUPPORT' },
  'faq.title': { es: 'Todo lo que necesitas saber', en: 'Frequently Asked Questions' },
  'faq.subtitle': { es: 'Respuestas claras para solucionar tus dudas sobre el vuelo, la fianza, las coberturas del seguro y la organización de las rutas.', en: 'Clear answers to address all your questions regarding flights, safety deposits, insurance coverage, and tour organization.' },

  // Footer
  'footer.motto': { es: 'Vuela ligero. Conduce libre. Vive el asfalto más místico de la España rural alejado de los grupos masivos.', en: 'Fly light. Ride free. Experience the most mystical tarmac of rural Spain far from mass tourist groups.' },
  'footer.explore': { es: 'Explorar', en: 'Explore' },
  'footer.routes': { es: 'Nuestras Rutas', en: 'Our Tours' },
  'footer.experience': { es: 'Experiencia', en: 'Experience' },
  'footer.form': { es: 'Configurador', en: 'Customize' },
  'footer.faqs': { es: 'Preguntas Frecuentes', en: 'FAQs' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.office': { es: 'Oficina Central', en: 'Headquarters' },
  'footer.office.address': { es: 'Vía de las Dos Ruedas, s/n, 28001 Madrid, España', en: 'Vía de las Dos Ruedas, s/n, 28001 Madrid, Spain' },
  'footer.phone': { es: 'Teléfono', en: 'Phone' },
  'footer.email': { es: 'Email', en: 'Email' },
  'footer.copy': { es: 'Byroad Adventures S.L. Todos los derechos reservados.', en: 'Byroad Adventures S.L. All rights reserved.' },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('byroad_lang');
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('byroad_lang', lang);
  };

  const t = (key: string): string => {
    const item = translations[key];
    if (!item) return key;
    return item[language] || item['es'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
