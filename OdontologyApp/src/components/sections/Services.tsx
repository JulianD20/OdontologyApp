import React from 'react';
import { Shield, Sparkles, Smile, Heart, Clock, Clipboard } from 'lucide-react';
import Card from '../ui/Card';
import AnimatedElement from '../ui/AnimatedElement';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Shield className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      translationKey: 'preventiveCare'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      translationKey: 'cosmeticDentistry'
    },
    {
      icon: <Smile className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      translationKey: 'restorativeServices'
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      translationKey: 'pediatricDentistry'
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      translationKey: 'emergencyCare'
    },
    {
      icon: <Clipboard className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      translationKey: 'orthodontics'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} animation="fade-up" delay={index * 100}>
              <Card hoverable className="h-full">
                <div className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {t(`services.${service.translationKey}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t(`services.${service.translationKey}.description`)}
                  </p>
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;