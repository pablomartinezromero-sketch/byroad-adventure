export type Localized<T = string> = { es: T; en: T };

export type RouteType = 'trail' | 'custom' | 'offroad';

export interface RouteInfo {
  id: string;
  routeType: RouteType;
  name: Localized;
  tagline: Localized;
  distance: string;
  duration: Localized;
  difficulty: Localized;
  curves: number; // 1 to 5 stars
  terrain: Localized;
  description: Localized;
  highlights: Localized<string[]>;
}

export interface GearItem {
  id: string;
  name: string;
  category: 'helmet' | 'jacket' | 'gloves';
  brand: string;
  material: Localized;
  features: Localized<string[]>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: Localized;
  quote: Localized;
  route: Localized;
  rating: number;
}

