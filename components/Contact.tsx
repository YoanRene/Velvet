import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds so they can send another if needed
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-stone-900 text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">Reserva tu Fecha</h2>
            <p className="text-stone-300 mb-8 text-lg leading-relaxed">
              Cada sesión es única, como tú. Contáctanos para diseñar el paquete perfecto para tu evento. 
              Respondemos en menos de 24 horas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-velvet-400 text-xl mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Ubicación</h4>
                  <p className="text-stone-400 max-w-sm">La Conchita, Calle A Nro 1 frente al Joven Club y Sala de Video, Pinar del Río, Cuba</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-velvet-400 text-xl mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Teléfono</h4>
                  <p className="text-stone-400">+53 63878735</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-velvet-400 text-xl mt-1">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </span>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Instagram</h4>
                  <a href="https://instagram.com/velvet_cuba" target="_blank" rel="noreferrer" className="text-velvet-400 hover:text-velvet-300">@velvet_cuba</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10" onSubmit={handleSubmit}>
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-stone-300">Gracias por escribirnos. Nos pondremos en contacto contigo muy pronto.</p>
                <button 
                  type="button" 
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-sm text-velvet-400 hover:text-velvet-300 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2">Nombre</label>
                    <input required type="text" className="w-full bg-stone-800 border-none text-white p-3 rounded focus:ring-2 focus:ring-velvet-500" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2">Teléfono</label>
                    <input required type="tel" className="w-full bg-stone-800 border-none text-white p-3 rounded focus:ring-2 focus:ring-velvet-500" placeholder="+53 5xxx xxxx" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2">Tipo de Evento</label>
                  <select className="w-full bg-stone-800 border-none text-white p-3 rounded focus:ring-2 focus:ring-velvet-500">
                    <option>Quinceañera</option>
                    <option>Boda</option>
                    <option>Moda / Editorial</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2">Mensaje</label>
                  <textarea required rows={4} className="w-full bg-stone-800 border-none text-white p-3 rounded focus:ring-2 focus:ring-velvet-500" placeholder="Cuéntanos sobre tu idea..."></textarea>
                </div>

                <Button className="w-full" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};