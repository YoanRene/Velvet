import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-velvet-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-velvet-500 mx-auto"></div>
          <p className="mt-4 text-stone-600 max-w-xl mx-auto">
            Creamos experiencias visuales únicas adaptadas a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-velvet-900/0 group-hover:bg-velvet-900/20 transition-all duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-block px-4 py-1 border border-velvet-200 text-velvet-800 text-xs font-bold tracking-wider uppercase rounded-full">
                  {service.priceStart}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};