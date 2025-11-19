import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-black text-white uppercase tracking-tighter flex items-center gap-2">
          Apex <span className="text-brand-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Programas', 'Staff', 'Calendario', 'Scouting'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors">
              {item}
            </a>
          ))}
          <a href="#contacto" className="bg-white text-brand-dark text-xs font-bold py-3 px-6 uppercase tracking-wider hover:bg-brand-accent transition-colors duration-300">
            Únete Hoy
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-dark border-b border-brand-border p-6 flex flex-col gap-6 md:hidden shadow-2xl">
             {['Programas', 'Staff', 'Calendario', 'Scouting', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-bold uppercase tracking-widest hover:text-brand-accent"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;