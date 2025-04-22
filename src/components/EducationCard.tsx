import React from 'react';

interface EducationProps {
  education: {
    degree: string;
    institution: string;
    period: string;
    isCurrent: boolean;
    description: string;
  };
  isEven: boolean;
}

const EducationCard: React.FC<EducationProps> = ({ education, isEven }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-6 w-6 rounded-full bg-blue-500 border-4 border-white shadow-md z-10"></div>
      
      {/* Card */}
      <div className={`md:w-1/2 ${isEven ? 'md:pl-12 md:pr-8' : 'md:pr-12 md:pl-8'} w-full pl-10 md:pl-0`}>
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${education.isCurrent ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
            {education.period}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{education.degree}</h3>
          <p className="text-gray-600 mb-4">{education.institution}</p>
          <p className="text-gray-700">{education.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;