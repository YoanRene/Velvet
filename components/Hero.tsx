import React from 'react';
import { Button } from './Button';
import { HERO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <header id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: `url(${HERO_IMAGE})`, animationDuration: '20s' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-900/90"></div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Estudio de Fotografía Profesional
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-bold mb-6 tracking-tight drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          VELVET
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Capturando la esencia de tus momentos más preciosos. Quinceañeras, bodas y moda con un toque de magia y elegancia.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="white" onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth'})}>
            Ver Portafolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};