import React from 'react';
import { Button } from './Button';
import { INSTAGRAM_POSTS } from '../constants';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <p className="text-stone-500 uppercase tracking-widest text-sm mb-3">Síguenos en Instagram</p>
          <a 
            href="https://instagram.com/velvet_cuba" 
            target="_blank" 
            rel="noreferrer"
            className="text-4xl md:text-5xl font-serif text-velvet-900 hover:text-velvet-800 transition-colors"
          >
            @velvet_cuba
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post) => (
            <a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-stone-200 block"
            >
              <img 
                src={post.imageUrl} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-1">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="font-bold">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                       <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
                     </svg>
                    <span className="font-bold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Button 
            variant="outline" 
            href="https://instagram.com/velvet_cuba" 
            target="_blank" 
            rel="noreferrer"
            className="border-velvet-900 text-velvet-900 hover:bg-velvet-900 hover:text-white"
          >
            Ver Perfil Completo
          </Button>
        </div>

      </div>
    </section>
  );
};