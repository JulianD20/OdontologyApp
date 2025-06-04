import React, { useState } from 'react';
import { X } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import { useTranslation } from 'react-i18next';

interface GalleryImage {
  thumbnail: string;
  fullsize: string;
  alt: string;
  category: 'clinic' | 'results' | 'team';
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'clinic' | 'results' | 'team'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { t } = useTranslation();

  const images: GalleryImage[] = [
    {
      thumbnail: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.reception'),
      category: 'clinic'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.treatment'),
      category: 'clinic'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.equipment'),
      category: 'clinic'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.smile1'),
      category: 'results'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.smile2'),
      category: 'results'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.beforeAfter'),
      category: 'results'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/5215009/pexels-photo-5215009.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/5215009/pexels-photo-5215009.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.team1'),
      category: 'team'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullsize: 'https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: t('gallery.images.team2'),
      category: 'team'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={100}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-2">
              <button
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                {t('gallery.filters.all')}
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'clinic'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter('clinic')}
              >
                {t('gallery.filters.clinic')}
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'results'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter('results')}
              >
                {t('gallery.filters.results')}
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'team'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter('team')}
              >
                {t('gallery.filters.team')}
              </button>
            </div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <AnimatedElement key={index} animation="fade-up" delay={index * 50}>
              <div
                className="overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.thumbnail}
                  alt={image.alt}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage.fullsize}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;