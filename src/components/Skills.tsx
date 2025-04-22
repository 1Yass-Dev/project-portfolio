import React from 'react';
import SkillCard from './SkillCard';
import {
  Figma,
  Code,
  Palette,
  ScrollText,
  Github,
  Shell,
  GitBranch,
  Database,
  FileCode,
  Atom
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Figma', icon: <Figma />, color: 'bg-purple-100', textColor: 'text-purple-600' },
    { name: 'HTML', icon: <Code />, color: 'bg-orange-100', textColor: 'text-orange-600' },
    { name: 'CSS', icon: <Palette />, color: 'bg-blue-100', textColor: 'text-blue-600' },
    { name: 'JavaScript', icon: <ScrollText />, color: 'bg-yellow-100', textColor: 'text-yellow-600' },
    { name: 'GitHub', icon: <Github />, color: 'bg-gray-100', textColor: 'text-gray-600' },
    { name: 'Python', icon: <Shell />, color: 'bg-green-100', textColor: 'text-green-600' },
    { name: 'Git', icon: <GitBranch />, color: 'bg-red-100', textColor: 'text-red-600' },
    { name: 'SQL', icon: <Database />, color: 'bg-blue-100', textColor: 'text-blue-600' },
    { name: 'PHP', icon: <FileCode />, color: 'bg-indigo-100', textColor: 'text-indigo-600' },
    { name: 'React', icon: <Atom />, color: 'bg-cyan-100', textColor: 'text-cyan-600' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-100 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical abilities and expertise in various development technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;