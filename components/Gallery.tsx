import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'quince' | 'boda' | 'moda'>('all');

  const filteredImages = filter === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(img => img.category === filter);

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-velvet-900 mb-2">Galería Velvet</h2>
            <p className="text-stone-500 italic">Donde la elegancia se encuentra con el arte.</p>
          </div>
          
          <div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'Todo' },
              { id: 'quince', label: 'Quinceañeras' },
              { id: 'boda', label: 'Bodas' },
              { id: 'moda', label: 'Moda' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                  filter === cat.id 
                    ? 'bg-velvet-800 text-white' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${item.span || ''}`}
            >
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </h3>
                <p className="text-velvet-200 text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};