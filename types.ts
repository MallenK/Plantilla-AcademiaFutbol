import { LucideIcon } from 'lucide-react';

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface Program {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  image: string;
  features: string[];
}

export interface Coach {
  id: number;
  name: string;
  role: string;
  license: string;
  specialty: string;
  image: string;
  stats: { label: string; value: string }[];
}

export type EventType = 'training' | 'match' | 'tournament';

export interface CalendarEvent {
  id: number;
  date: Date;
  type: EventType;
  title: string;
  time: string;
  location: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
}