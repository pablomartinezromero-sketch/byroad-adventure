import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface FAQItemProps {
  key?: string;
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-5 text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 text-stone-100 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
      >
        <span className="font-display font-bold text-base md:text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-stone-500 flex-shrink-0" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-stone-400 leading-relaxed pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const { language } = useLanguage();

  const faqs = [
    {
      question: {
        es: '¿Qué tipo de carnet necesito para poder realizar las rutas?',
        en: 'What kind of motorcycle license do I need for these tours?'
      },
      answer: {
        es: 'Debido a la cilindrada y potencia de nuestras motos (Voge 900DSX, Voge DS800 Rally y Voge 625DSX), es requisito legal indispensable estar en posesión del carnet de conducir de motocicleta de clase A o A2 en vigor. Para la Voge 625DSX, el carnet A2 también es perfectamente válido. Si tienes un permiso internacional o de fuera de la UE, consúltanos antes y validaremos la equivalencia sin coste.',
        en: 'Due to the displacement and power of our motorcycles (Voge 900DSX, Voge DS800 Rally, and Voge 625DSX), holding a valid class A or A2 motorcycle driving license is a mandatory legal requirement. For the Voge 625DSX, an A2 license is also perfectly valid. If you have an international permit or license from outside the EU, please contact us first and we will verify its equivalency free of charge.'
      }
    },
    {
      question: {
        es: 'No tengo moto ni equipación propia, ¿está todo incluido de verdad?',
        en: "I don't have my own motorcycle or gear, is everything really included?"
      },
      answer: {
        es: 'Sí, absolutamente de verdad. Nuestro concepto se basa en quitarte todos los dolores de cabeza. En el precio de la ruta se incluye tanto el alquiler de la motocicleta seleccionada con seguro a todo riesgo con franquicia, como la equipación completa homologada (casco premium de carbono, chaqueta de cordura impermeable de tres capas con protecciones CE nivel 2, guantes y botas de aventura). Solo tienes que traer calzado cómodo y ropa térmica interior si eres friolero.',
        en: 'Yes, absolutely. Our concept is built entirely around removing all hassle. The tour price includes renting your selected motorcycle with full comprehensive insurance (with deductible), as well as a full set of certified protective gear (premium carbon fiber helmet, 3-layer waterproof textile jacket with CE Level 2 armor, gloves, and adventure boots). You only need to bring comfortable shoes and thermal underwear if you tend to get cold.'
      }
    },
    {
      question: {
        es: '¿Puedo llevar a un acompañante de pasajero en la moto?',
        en: 'Can I bring a passenger with me on the motorcycle?'
      },
      answer: {
        es: '¡Por supuesto! Nuestras motos de aventura están perfectamente homologadas y preparadas con asientos ergonómicos y maletas traseras que sirven de cómodo respaldo para viajar a dúo. Al configurar la ruta en la calculadora, selecciona la opción para acompañante. El acompañante recibirá también el casco y traje de cordura completo.',
        en: 'Of course! Our adventure motorcycles are fully certified and equipped with ergonomic seats and top cases that double as a comfortable backrest for two-up riding. When configuring your trip on our getaway calculator, simply select the passenger option. Your passenger will also receive a helmet and a full textile riding suit.'
      }
    },
    {
      question: {
        es: '¿Qué pasa si llueve o hace mal tiempo durante la travesía?',
        en: 'What happens if it rains or there is bad weather during the tour?'
      },
      answer: {
        es: 'Nuestras rutas siguen adelante en condiciones normales de lluvia, ya que los trajes técnicos de Gore-Tex que te proporcionamos son 100% impermeables y transpirables, y las motos disponen de control de tracción específico para lluvia. No obstante, si el guía de ruta dictamina que las condiciones son peligrosas o extremas (tormentas eléctricas severas, nieve, desprendimientos), disponemos de planes de ruta alternativos o coches de apoyo listos para trasladar a los pilotos de forma cómoda hasta el siguiente hotel.',
        en: 'Our tours proceed during normal rain conditions since the technical Gore-Tex riding gear we provide is 100% waterproof and breathable, and the motorcycles feature rain-specific traction control. However, if the tour guide determines that weather conditions are hazardous or extreme (severe thunderstorms, snow, or landslides), we have alternative routes or support vehicles ready to transport riders safely and comfortably to the next hotel.'
      }
    },
    {
      question: {
        es: '¿Cómo funciona el equipaje durante la ruta?',
        en: 'How is luggage handled during the journey?'
      },
      answer: {
        es: 'Tú solo tienes que conducir relajado. Al inicio de la jornada, entregarás tu maleta de equipaje grande a nuestro equipo. Esta viajará guardada de forma segura en nuestro furgón de asistencia silencioso que se traslada de hotel en hotel. Tú solo llevarás en la moto lo básico para el día (teléfono, cámara, documentación) guardado en la bolsa sobredepósito impermeable o maletas laterales de la moto.',
        en: 'You only need to focus on riding and relaxing. At the start of each day, you will hand over your large luggage to our support team. It will be safely transported in our support van from hotel to hotel. You only need to carry daily essentials (phone, camera, documents) in the waterproof tank bag or side panniers on your motorcycle.'
      }
    },
    {
      question: {
        es: '¿Los grupos van guiados o puedo rodar a mi aire?',
        en: 'Are the groups guided, or can I ride at my own pace?'
      },
      answer: {
        es: 'Ofrecemos ambas modalidades, pero la principal es la guiada en grupos reducidos (máximo 8 motos). Un guía profesional va abriendo el trazado marcando ritmos seguros y adaptados. No obstante, todas nuestras motos llevan un GPS de pantalla grande pre-cargado con el track diario interactivo y puntos de interés secretos offline. Si en algún tramo te apetece rodar en solitario a tu propio ritmo para sacar fotos, puedes hacerlo con total libertad y reincorporarte con el grupo en el punto de almuerzo.',
        en: 'We offer both, but our primary focus is guided tours in small groups (maximum of 8 motorcycles). A professional guide leads the path, maintaining safe and balanced speeds. However, all our bikes are equipped with a large GPS screen preloaded with the interactive daily route and offline secret points of interest. If you want to ride solo on a section at your own pace to take photos, you are free to do so and rejoin the group at the lunch spot.'
      }
    }
  ];

  return (
    <section className="py-24 bg-black/10 border-t border-white/10 relative" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> {language === 'es' ? 'RESOLVEMOS TUS DUDAS' : 'FAQ - RESOLVING YOUR DOUBTS'}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 mb-4 tracking-tight uppercase italic">
            {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Antes de lanzarte a la carretera secundaria, repasa los detalles prácticos clave de nuestra experiencia con motos todo incluido.'
              : 'Before you embark on the scenic backroads, review the key practical details of our all-inclusive motorcycle experiences.'}
          </p>
        </div>

        {/* FAQs List Wrapper */}
        <div className="frosted-panel rounded-3xl p-6 md:p-10 shadow-2xl" id="faq-list">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question[language]}
              question={faq.question[language]}
              answer={faq.answer[language]}
            />
          ))}
        </div>

        {/* Contact Block CTA */}
        <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left backdrop-blur-md">
          <div>
            <h4 className="font-display font-bold text-sm text-stone-200 uppercase tracking-wide">
              {language === 'es' ? '¿Tienes alguna pregunta más específica?' : 'Do you have a more specific question?'}
            </h4>
            <p className="font-sans text-xs text-stone-500 mt-0.5">
              {language === 'es'
                ? 'Estamos disponibles para charlar por teléfono o WhatsApp y diseñar un plan a medida para clubes o parejas.'
                : 'We are available to chat via phone or WhatsApp to design custom tailored itineraries for clubs or couples.'}
            </p>
          </div>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-xs bg-orange-500 hover:bg-orange-400 text-black px-5 py-3 rounded-xl transition-all uppercase tracking-wider flex-shrink-0 shadow-lg shadow-orange-500/10"
          >
            {language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
          </a>
        </div>

      </div>
    </section>
  );
}
