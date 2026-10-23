export type Language = 'en' | 'hi';

export interface DoctorProfile {
  id: string;
  name: string;
  qualification: string;
  role: string;
  experience: string;
  bio: string;
  specialities: string[];
  opdHours: string;
  phone: string;
  image: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  sanskritName: string;
  category: 'panchakarma' | 'ksharsutra' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  indications: string[];
  image: string;
  badge?: string;
}

export interface ComparisonRow {
  parameter: string;
  ksharsutra: string;
  modernSurgery: string;
  highlightKsharsutra?: boolean;
}

export interface ReviewItem {
  author: string;
  city: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
