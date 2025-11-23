import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Adjust based on your header height to prevent overlapping
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group"
        >
          <div className={`text-2xl font-serif tracking-widest font-bold ${scrolled || menuOpen ? 'text-velvet-900' : 'text-white'}`}>
            VELVET
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-velvet-500 ${
                scrolled ? 'text-stone-800' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled || menuOpen ? 'bg-stone-800' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled || menuOpen ? 'bg-stone-800' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${scrolled || menuOpen ? 'bg-stone-800' : 'bg-white'}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
         <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-800 hover:text-velvet-800 text-sm uppercase tracking-widest"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
         </div>
      </div>
    </nav>
  );
};