import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        
        <a href="#" className="text-3xl font-serif tracking-widest text-stone-200 mb-8 hover:opacity-80 transition-opacity">
          Sensoria
        </a>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-sm tracking-widest uppercase">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#journal" className="hover:text-white transition-colors">Journal</a>
          <a href="#works" className="hover:text-white transition-colors">Works</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex space-x-8 mb-12">
          <a href="#" className="text-stone-500 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-stone-500 hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-stone-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="w-full max-w-xs h-[1px] bg-stone-800 mb-8"></div>

        <p className="text-xs tracking-widest text-stone-600">
          © Sensoria All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;