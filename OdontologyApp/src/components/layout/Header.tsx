import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t('header.home'), href: '#home' },
    { label: t('header.services'), href: '#services' },
    { label: t('header.about'), href: '#about' },
    { label: t('header.team'), href: '#team' },
    { label: t('header.testimonials'), href: '#testimonials' },
    { label: t('header.gallery'), href: '#gallery' },
    { label: t('header.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md dark:bg-slate-900 dark:bg-opacity-90' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 2a9 9 0 0 1 9 9c0 3.9-2 7-5 8.5-1.5.8-3 1.2-4.5 1.5h-.5c-1.5-.3-3-.7-4.5-1.5-3-1.5-5-4.6-5-8.5a9 9 0 0 1 9-9Z" />
                  <path d="M12 2v20" />
                  <path d="m4.3 8 15.4 8" />
                  <path d="M4.3 16 20 8" />
                </svg>
              </span>
              DentCare
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20' 
                        : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
              <button 
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-colors"
              >
                <Languages size={18} />
                <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
              </button>
              
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Button variant="primary" size="sm">{t('header.bookAppointment')}</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center"
            >
              <Languages size={20} />
            </button>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 px-4">
                <Button variant="primary" className="w-full">{t('header.bookAppointment')}</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;