import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'Sobre nós', href: '#sobre' },
    { text: 'Serviços', href: '#servicos' },
    { text: 'Diferenciais', href: '#diferenciais' },
    { text: 'Clientes', href: '#clientes' },
    { text: 'Contato', href: '#contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Top bar with phone */}
          <div className={`absolute top-0 left-0 right-0 bg-orange-600 text-white py-1 px-4 text-sm flex justify-between items-center transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
            <p className="text-xs sm:text-sm">OLÁ, seja bem-vindo ao site da <strong>Equipe Zion</strong></p>
            <a href="tel:08002112121" className="flex items-center hover:text-orange-200 text-xs sm:text-sm">
              <Phone size={14} className="mr-1" />
              <span>Assistência 24h: <strong>0800 211 2121</strong></span>
            </a>
          </div>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-sm font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 font-medium hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}