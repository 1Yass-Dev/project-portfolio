import React from 'react';
import EducationCard from './EducationCard';

const Education = () => {
  const educationData = [
    {
      degree: 'Specialized Technician in Digital Development',
      institution: 'INSTITUT SPÉCIALISÉ DE FORMATION DE L\'OFFSHORING CASABLANCA',
      period: '2023–2025',
      isCurrent: true,
      description: 'Currently pursuing advanced studies in web and mobile application development with focus on both front-end and back-end technologies.',
    },
    {
      degree: 'Baccalaureate in Physical Sciences',
      institution: 'Ibnu Lhaitam High School, Sidi-Moumen, Casablanca',
      period: '2022–2023',
      isCurrent: false,
      description: 'Completed secondary education with focus on physical sciences, developing strong analytical and problem-solving skills.',
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills in the field of technology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Education cards */}
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <EducationCard 
                  key={index} 
                  education={education} 
                  isEven={index % 2 === 0} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;