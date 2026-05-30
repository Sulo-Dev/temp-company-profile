'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk mendeteksi saat user men-scroll halaman
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Tentang Kami', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-blue/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-wide">
              YourCompany<span className="text-brand-orange">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-brand-yellow transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-brand-orange-dark to-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-[0_0_15px_rgba(252,122,11,0.5)] transition-all hover:-translate-y-0.5"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-blue border-b border-white/10 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-brand-yellow block px-3 py-3 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-brand-orange-dark to-brand-orange text-white px-6 py-3 rounded-full text-base font-bold"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}