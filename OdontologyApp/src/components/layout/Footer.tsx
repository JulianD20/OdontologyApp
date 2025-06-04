import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-50 dark:bg-slate-900 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl flex items-center mb-4">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M12 2a9 9 0 0 1 9 9c0 3.9-2 7-5 8.5-1.5.8-3 1.2-4.5 1.5h-.5c-1.5-.3-3-.7-4.5-1.5-3-1.5-5-4.6-5-8.5a9 9 0 0 1 9-9Z" />
                  <path d="M12 2v20" />
                  <path d="m4.3 8 15.4 8" />
                  <path d="M4.3 16 20 8" />
                </svg>
              </span>
              DentCare
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('footer.quickLinks.services')}
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('footer.quickLinks.team')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('footer.quickLinks.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('footer.quickLinks.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('footer.quickLinks.privacy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('services.preventiveCare.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('services.cosmeticDentistry.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('services.restorativeServices.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('services.orthodontics.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  {t('services.emergencyCare.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">123 Dental Street, Medical District, City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">info@dentcare.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-600 dark:text-gray-400">
                  <div>{t('contact.info.weekdays')}: 8:00 AM - 6:00 PM</div>
                  <div>{t('contact.info.saturday')}: 9:00 AM - 4:00 PM</div>
                  <div>{t('contact.info.sunday')}: {t('contact.info.closed')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;