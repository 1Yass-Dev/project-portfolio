import React from 'react';
import { Github, Linkedin, Phone } from 'lucide-react';
import TypedText from './TypedText';

const Hero = () => {
  return (
    <section id="home" className="pt-28 md:pt-36 pb-16 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Hi, It's Yassine
            </h1>
            <div className="flex items-center my-4">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mr-2">
                I'm a
              </h2>
              <TypedText />
            </div>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              I'm EL KORTIH YASSINE, a curious and motivated Full-Stack Developer, passionate about 
              building high-performance and innovative web applications. I am looking for opportunities 
              to apply my skills in real-world projects and further enhance my experience.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/cv-.pdf" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-transform hover:bg-blue-700 hover:scale-105 shadow-md"
                aria-label="Download CV"
              download >
                Download My CV
              </a>
              
              <div className="flex space-x-4 sm:space-x-6 items-center">
                <a 
                  href="https://github.com/1Yass-Dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/elkortih-yassine-dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="https://wa.me/+212623155756" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="WhatsApp Contact"
                >
                  <Phone size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center shadow-lg">
                <img 
                  src="/photo.jpeg" 
                  alt="Yassine El Kortih" 
                  className="w-60 h-60 md:w-76 md:h-76 lg:w-92 lg:h-92 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;