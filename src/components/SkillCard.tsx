import React from 'react';

interface SkillProps {
  skill: {
    name: string;
    icon: string;
    color: string;
    textColor: string;
  };
  delay: number;
}

const SkillCard: React.FC<SkillProps> = ({ skill, delay }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${skill.color}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
      <h3 className={`text-xl font-semibold ${skill.textColor}`}>{skill.name}</h3>
    </div>
  );
};

export default SkillCard;