import React from 'react';
import Button from '../ui/Button';
import { Calendar } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <AnimatedElement animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">{t('hero.title')}</span>
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={100}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t('hero.subtitle')}
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Calendar size={20} />}
                >
                  {t('hero.bookAppointment')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  {t('hero.ourServices')}
                </Button>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={300}>
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((index) => (
                    <img 
                      key={index}
                      src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=60`} 
                      alt="Happy Patient" 
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900 dark:text-white">{t('hero.happyPatients')}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{t('hero.joinUs')}</div>
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <AnimatedElement animation="fade-in" delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-teal-200 dark:bg-teal-900/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <img 
                  src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dental Care" 
                  className="rounded-xl shadow-2xl relative z-10 w-full"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;