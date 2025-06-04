import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=120',
      rating: 5,
      comment: t('testimonials.comments.emily')
    },
    {
      name: 'Marcus Thompson',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=120',
      rating: 5,
      comment: t('testimonials.comments.marcus')
    },
    {
      name: 'Sophie Lee',
      avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=120',
      rating: 5,
      comment: t('testimonials.comments.sophie')
    },
    {
      name: 'Daniel Clark',
      avatar: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=120',
      rating: 4,
      comment: t('testimonials.comments.daniel')
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    let interval: number | undefined;

    if (autoplay) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
        </AnimatedElement>

        <div className="relative max-w-4xl mx-auto">
          <AnimatedElement animation="fade-in" key={currentIndex}>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
              <div className="mb-6 flex justify-center">
                <Quote className="text-blue-200 dark:text-blue-800 w-20 h-20" />
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center italic mb-8">
                "{testimonials[currentIndex].comment}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} 
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-yellow-500" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
              />
            ))}
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-slate-700 rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors md:flex hidden"
            onClick={() => {
              prevSlide();
              setAutoplay(false);
            }}
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-slate-700 rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors md:flex hidden"
            onClick={() => {
              nextSlide();
              setAutoplay(false);
            }}
          >
            <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;