export type TabType = 'home' | 'services' | 'success' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bgClass: string;
  accentClass: string;
  tags?: string[];
  ctaText?: string;
  phone?: string;
  details?: string[];
  image?: string;
}

export interface ReviewStory {
  id: string;
  name: string;
  condition: string;
  avatar: string;
  rating: number;
  story: string;
  recoveryTime: string;
  statusLabel: string;
  iconName: string;
  isCustom?: boolean;
}

export interface Appointment {
  fullName: string;
  phoneNumber: string;
  email?: string;
  date: string;
  timeSlot: string;
  department: string;
  doctor: string;
  symptoms: string;
}
