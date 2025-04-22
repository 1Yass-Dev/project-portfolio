import React from 'react';
import { Github, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">1Yass-Dev</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                A passionate Full-Stack Developer dedicated to creating innovative and high-performance web applications.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/1Yass-Dev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/yassine-el-kortih" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://wa.me/123456789" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                  aria-label="WhatsApp Contact"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors">Education</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Other Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policies</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} 1Yass-Dev | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;