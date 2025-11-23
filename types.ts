export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  priceStart: string;
}

export interface PortfolioImage {
  id: string;
  url: string;
  category: 'quince' | 'boda' | 'moda' | 'social';
  caption: string;
  span?: string; // class for grid span
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  link: string;
}