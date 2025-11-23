import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { ChatAssistant } from './components/ChatAssistant';
import { InstagramFeed } from './components/InstagramFeed';

function App() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <InstagramFeed />
      <Contact />
      <footer className="bg-black text-stone-500 py-8 text-center text-sm">
        <div className="container mx-auto">
          <p className="font-serif tracking-widest text-lg text-white mb-2">VELVET</p>
          <p>&copy; {new Date().getFullYear()} Velvet Photography. Todos los derechos reservados.</p>
        </div>
      </footer>
      <ChatAssistant />
    </main>
  );
}

export default App;