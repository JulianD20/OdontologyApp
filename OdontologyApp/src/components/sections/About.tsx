import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    'technology',
    'environment',
    'team',
    'treatment',
    'pricing',
    'scheduling'
  ];

  return (
    <section id="about" className="py-20 bg-blue-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <AnimatedElement animation="fade-in">
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3779696/pexels-photo-3779696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Modern Dental Clinic" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-80 h-80 bg-blue-200 dark:bg-blue-900/40 rounded-full filter blur-3xl opacity-80 z-0"></div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="lg:w-1/2">
            <AnimatedElement animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.title')}
              </h2>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={100}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {t('about.description1')}
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={200}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {t('about.description2')}
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={300}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('about.whyChooseUs')}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600 dark:text-gray-300">
                        {t(`about.benefits.${benefit}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={400}>
              <Button variant="primary" size="lg">
                {t('about.learnMore')}
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;