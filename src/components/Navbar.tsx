import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';
import { appPath, isLegalNoticePath } from '../utils/appRoutes';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.philosophy'), href: '#filosofia' },
    { name: t('nav.tours'), href: '#rutas' },
    { name: t('nav.gear'), href: '#motos-equipacion' },
    { name: t('nav.experience'), href: '#experiencia' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onLegalPage = isLegalNoticePath();

  const navLinkClass =
    'font-sans font-medium text-[11px] xl:text-xs text-stone-300 hover:text-orange-500 transition-colors tracking-wider uppercase text-center leading-tight max-w-[4.75rem] xl:max-w-[5.5rem] px-1 whitespace-pre-line';

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121214]/60 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 lg:gap-6">
          {/* Logo */}
          <a
            href={onLegalPage ? appPath() : '#'}
            onClick={(e) => {
              if (!onLegalPage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex-shrink-0"
            id="nav-logo"
          >
            <Logo />
          </a>

          {/* Desktop Navigation — fills space between logo and actions */}
          <nav
            className="hidden lg:flex flex-1 items-center justify-between gap-x-6 xl:gap-x-9 2xl:gap-x-12 px-5 xl:px-10 min-w-0"
            id="nav-desktop-menu"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={navLinkClass}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-auto lg:ml-0">
            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 p-1 rounded-full text-[10px] font-mono tracking-wider">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'es' ? 'bg-orange-500 text-black font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'en' ? 'bg-orange-500 text-black font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <span className="text-[10px] font-mono text-stone-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
              {language === 'es' ? 'Plazas Limitadas' : 'Limited Spots'} • 2026
            </span>
            <a
              href="#reserva"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#reserva');
              }}
              className="px-6 py-2.5 bg-transparent border border-white/30 hover:border-orange-500/50 hover:bg-white hover:text-black font-display font-bold text-xs rounded-full transition-all cursor-pointer uppercase tracking-widest"
              id="nav-cta-desktop"
            >
              {t('nav.book')}
            </a>
          </div>

          {/* Mobile Menu Button & Mini Switcher */}
          <div className="flex items-center gap-2 md:hidden ml-auto">
            <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 p-0.5 rounded-full text-[9px] font-mono">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'es' ? 'bg-orange-500 text-black font-bold' : 'text-stone-400'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'en' ? 'bg-orange-500 text-black font-bold' : 'text-stone-400'
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1 hover:text-orange-500 transition-colors"
              aria-label="Toggle menu"
              id="nav-mobile-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bg-neutral-950/90 backdrop-blur-xl border-b border-white/10 z-40 md:hidden p-6 flex flex-col gap-6"
            id="nav-mobile-drawer"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="font-display font-bold text-sm text-stone-200 hover:text-orange-500 uppercase tracking-wider transition-colors border-b border-white/5 pb-2 text-left"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[10px] font-mono text-stone-400 flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                {language === 'es' ? 'Plazas para grupos reducidos abiertas para 2026' : 'Small group slots open for 2026'}
              </div>
              <a
                href="#reserva"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#reserva');
                }}
                className="bg-orange-500 hover:bg-orange-400 text-black font-display font-bold py-3 rounded-full text-center transition-all tracking-wider uppercase text-xs"
                id="nav-cta-mobile"
              >
                {t('nav.book')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
