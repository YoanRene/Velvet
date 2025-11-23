import { ServiceItem, PortfolioImage, InstagramPost } from './types';

// Using Unsplash images that closely mimic the user's provided style (Quinceañera, Fashion, Weddings)
export const HERO_IMAGE = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1920&auto=format&fit=crop"; // Elegant dress

export const SERVICES: ServiceItem[] = [
  {
    id: 'quince',
    title: 'Quinceañeras',
    description: 'Capturamos la magia de tus 15 años con sesiones en exteriores y estudio. Vestuarios exclusivos y maquillaje profesional.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop',
    priceStart: 'Desde $250'
  },
  {
    id: 'boda',
    title: 'Bodas',
    description: 'Documentamos tu historia de amor con un estilo cinematográfico y elegante. Cobertura completa de tu día especial.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    priceStart: 'Desde $500'
  },
  {
    id: 'moda',
    title: 'Moda & Editorial',
    description: 'Producciones de alto nivel para marcas, modelos y revistas. Dirección de arte y styling incluido.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    priceStart: 'Consultar'
  },
  {
    id: 'social',
    title: 'Redes Sociales',
    description: 'Contenido visual estratégico para potenciar tu marca personal o negocio en Instagram y TikTok.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    priceStart: 'Packs Mensuales'
  }
];

export const PORTFOLIO: PortfolioImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop', // Pink Dress Style
    category: 'quince',
    caption: 'Sueño Rosa',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', // Red Dress actual (Fixed)
    category: 'quince',
    caption: 'Elegancia en Rojo'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop', // Suit Guy
    category: 'moda',
    caption: 'Retrato Masculino'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop', // Teal/Green Dress
    category: 'quince',
    caption: 'Detalles'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=800&auto=format&fit=crop', // Crown/Makeup
    category: 'quince',
    caption: 'Retrato Real'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop', // Wedding
    category: 'boda',
    caption: 'Amor Eterno'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta1',
    imageUrl: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=600&auto=format&fit=crop', // Sparkle/Gold
    likes: 1240,
    comments: 45,
    link: 'https://instagram.com/velvet_cuba'
  },
  {
    id: 'insta2',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop', // Red Dress Feed
    likes: 856,
    comments: 22,
    link: 'https://instagram.com/velvet_cuba'
  },
  {
    id: 'insta3',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop', // High Fashion Portrait Fixed
    likes: 2103,
    comments: 104,
    link: 'https://instagram.com/velvet_cuba'
  },
  {
    id: 'insta4',
    imageUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=600&auto=format&fit=crop', // Elegant Woman
    likes: 932,
    comments: 38,
    link: 'https://instagram.com/velvet_cuba'
  },
];

export const SYSTEM_INSTRUCTION = `
Eres "Velvet AI", el asistente virtual del estudio de fotografía Velvet en Cuba.
Tu tono es elegante, profesional, cálido y artístico.
Respondes siempre en español.
El estudio se especializa en Quinceañeras, Bodas, Moda y Redes Sociales.
El instagram es @velvet_cuba.
La dirección es: La Conchita, Calle A Nro 1 frente al Joven Club y Sala de Video, Pinar del Río, Cuba.
El teléfono es: +53 63878735.
No inventes precios exactos si no están en la información, da rangos aproximados:
- Quinceañeras: Desde $250 (Paquete Básico) hasta $1200 (Paquete Deluxe).
- Bodas: Desde $500.
- Sesiones de Moda: A cotizar según proyecto.
Si te preguntan por disponibilidad, diles que por favor llenen el formulario de contacto o escriban al DM de Instagram.
Ofrece consejos de vestuario si te lo piden.
Sé breve y conciso en tus respuestas.
`;