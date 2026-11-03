export type Service = { name: string; description: string };
export type Business = {
  category: string;
  name: string;
  tagline: string;
  description: string;
  phone: string;
  instagram: string;
  services: Service[];
  accent: string;
  heroImage: string;
};

export const businesses: Record<string, Business> = {
  presencaDigital: {
    category: 'Criação de sites',
    name: 'Presença Digital',
    tagline: 'Sites profissionais para o seu negócio.',
    description: 'Criamos sites e páginas profissionais com preço acessível para pequenos negócios, comércios, MEIs e profissionais autônomos.',
    phone: '5519983085773',
    instagram: '@presenca.digital.sites',
    accent: '#18BB60',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=75',
    services: [
      { name: 'Site institucional', description: 'Apresente sua empresa e seus serviços com clareza.' },
      { name: 'Landing page', description: 'Divulgue uma oferta, campanha ou serviço.' },
      { name: 'Catálogo digital', description: 'Organize seus produtos em uma página fácil de compartilhar.' },
    ],
  },
};

export const whatsappUrl = (phone: string, message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
