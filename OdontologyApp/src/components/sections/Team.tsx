import React from 'react';
import Card from '../ui/Card';
import AnimatedElement from '../ui/AnimatedElement';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Team: React.FC = () => {
  const { t } = useTranslation();

  const team: TeamMember[] = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist',
      bio: 'Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She is passionate about providing gentle, comprehensive care to all her patients.',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Orthodontist',
      bio: 'Specializing in orthodontics, Dr. Chen helps patients achieve beautiful smiles through braces and aligners. He is known for his precise and patient-centered approach.',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Dr. Sophia Martinez',
      role: 'Pediatric Dentist',
      bio: 'With her gentle approach and child-friendly techniques, Dr. Martinez specializes in creating positive dental experiences for our youngest patients.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Emma Wilson',
      role: 'Dental Hygienist',
      bio: 'Emma is dedicated to preventive care and patient education. She ensures our patients maintain optimal oral health through thorough cleanings and personalized advice.',
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('team.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedElement key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full overflow-hidden">
                <div className="overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;