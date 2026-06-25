import { Shield, Compass, Heart, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';
import { appPath } from '../utils/appRoutes';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/10 border-t border-white/10 text-stone-400 py-16 relative z-10" id="app-footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group w-fit"
            >
              <Logo />
            </a>
            
            <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-2">
              {language === 'es'
                ? 'Agencia de turismo alternativo sobre ruedas. Especialistas en expediciones guiadas y autoguiadas por carreteras secundarias reviradas. Olvídate del estrés: nosotros te proporcionamos la moto de aventura y el equipo de protección completo.'
                : 'Alternative adventure tourism agency on wheels. Specialists in guided and self-guided expeditions along winding backroads. Forget the stress: we provide you with the adventure motorcycle and full protective gear.'}
            </p>

            {/* Micro badges */}
            <div className="flex flex-wrap gap-2.5 mt-3">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-xl text-[10px] font-mono text-stone-400">
                <Shield className="w-3 h-3 text-emerald-400" /> {language === 'es' ? 'Seguro Integrado' : 'Comprehensive Insurance'}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-xl text-[10px] font-mono text-stone-400">
                <Compass className="w-3 h-3 text-orange-500" /> {language === 'es' ? 'Curado por Guías' : 'Guide-Curated Routes'}
              </span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3 text-left">
            <h4 className="font-display font-bold text-sm text-stone-200 uppercase tracking-widest mb-1">
              {language === 'es' ? 'Explorar Experiencia' : 'Explore Experience'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <button
                onClick={() => handleNavClick('#filosofia')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer font-sans"
              >
                {language === 'es' ? 'La Filosofía' : 'Our Philosophy'}
              </button>
              <button
                onClick={() => handleNavClick('#motos-equipacion')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer font-sans"
              >
                {language === 'es' ? 'La Flota' : 'The Fleet'}
              </button>
              <button
                onClick={() => handleNavClick('#rutas')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer font-sans"
              >
                {language === 'es' ? 'Rutas Secretas' : 'Secret Routes'}
              </button>
              <button
                onClick={() => handleNavClick('#motos-equipacion')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer font-sans"
              >
                {language === 'es' ? 'Equipamiento Pro' : 'Pro Gear'}
              </button>
              <button
                onClick={() => handleNavClick('#faq')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer font-sans"
              >
                {language === 'es' ? 'Preguntas / FAQ' : 'Questions / FAQ'}
              </button>
              <button
                onClick={() => handleNavClick('#reserva')}
                className="hover:text-orange-500 transition-colors text-left text-orange-500 font-bold cursor-pointer font-sans"
              >
                {language === 'es' ? 'Prepara Tu Viaje' : 'Prepare Your Trip'}
              </button>
            </div>
          </div>

          {/* Community & Contact (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4 text-left">
            <h4 className="font-display font-bold text-sm text-stone-200 uppercase tracking-widest mb-1">
              {language === 'es' ? 'Síguenos en ruta' : 'Follow Our Journey'}
            </h4>
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              {language === 'es'
                ? 'Compartimos mapas interactivos, bitácoras de viaje e historias de nuestros pilotos cada semana.'
                : 'We share interactive maps, travel logs, and exciting stories from our riders every single week.'}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-orange-500 p-2.5 rounded-xl transition-colors"
                aria-label="Instagram de Byroad Adventures"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-orange-500 p-2.5 rounded-xl transition-colors"
                aria-label="Facebook de Byroad Adventures"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-orange-500 p-2.5 rounded-xl transition-colors"
                aria-label="Youtube de Byroad Adventures"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>
              &copy; {currentYear} Byroad Adventures S.L. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </span>
            <div className="flex gap-4">
              <a href={appPath('aviso-legal')} className="hover:text-stone-300 transition-colors">
                {language === 'es' ? 'Aviso Legal' : 'Legal Notice'}
              </a>
              <a href="#" className="hover:text-stone-300 transition-colors">{language === 'es' ? 'Privacidad' : 'Privacy Policy'}</a>
              <a href="#" className="hover:text-stone-300 transition-colors">{language === 'es' ? 'Condiciones de Alquiler' : 'Rental Terms'}</a>
            </div>
          </div>
          
          <div className="flex items-center gap-1 font-sans">
            <span>{language === 'es' ? 'Hecho con' : 'Made with'}</span>
            <Heart className="w-3.5 h-3.5 fill-red-500/80 text-red-500/80" />
            <span>{language === 'es' ? 'para amantes del asfalto curvo' : 'for lovers of winding asphalt'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
