import React, { useState, useEffect } from 'react';
import { Menu, Search, Instagram, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-medium font-serif tracking-widest text-stone-900 hover:opacity-80 transition-opacity">
          Sensoria
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l border-stone-300 pl-6">
            <button className="text-stone-500 hover:text-stone-900 transition-colors">
              <Search size={18} />
            </button>
            <button className="text-stone-500 hover:text-earth-terra transition-colors">
              <Instagram size={18} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 border-t border-stone-100 shadow-lg py-8 px-6 flex flex-col space-y-6 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium font-serif tracking-widest text-stone-800 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex justify-center space-x-6 pt-4">
            <Search className="text-stone-500" />
            <Instagram className="text-stone-500" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;