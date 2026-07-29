export type Language = 'en' | 'hi' | 'mr' | 'as';

export type ServiceCategory = 'all' | 'extensions' | 'nail-art' | 'gel-polish' | 'bridal' | 'nail-spa';

export interface SalonService {
  id: string;
  titleKey: string;
  category: ServiceCategory;
  price: number;
  durationMinutes: number;
  image: string;
  descriptionKey: string;
  isPopular?: boolean;
  featuresKeys: string[];
}

export interface AcademyCourse {
  id: string;
  titleKey: string;
  badgeKey: string;
  durationDays: number;
  practicalHours: number;
  originalFee: number;
  discountedFee: number;
  kitIncluded: boolean;
  kitValue: number;
  nextBatch: string;
  seatsLeft: number;
  image: string;
  curriculumKeys: string[];
  certificationNameKey: string;
}

export interface MasterTrainer {
  id: string;
  name: string;
  roleKey: string;
  experienceYears: number;
  image: string;
  specializationKey: string;
  certifications: string[];
  quoteKey: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  roleKey: string;
  rating: number;
  avatar: string;
  reviewKey: string;
  type: 'client' | 'student' | 'franchise';
  resultImage?: string;
  verified: boolean;
}

export interface StudioBranch {
  id: string;
  city: 'Mumbai' | 'Guwahati';
  areaKey: string;
  addressKey: string;
  phone: string;
  whatsapp: string;
  googleRating: number;
  reviewCount: number;
  timingKey: string;
  image: string;
  mapsEmbedUrl?: string;
}

export interface BeforeAfterPair {
  id: string;
  titleKey: string;
  categoryKey: string;
  beforeImage: string;
  afterImage: string;
  descriptionKey: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  city: string;
  branch: string;
  serviceId: string;
  date: string;
  time: string;
  notes?: string;
}

export interface AdmissionFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  courseId: string;
  preferredBatch: string;
  notes?: string;
}

export interface FranchiseFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  investmentBudget: string;
  propertyAvailable: boolean;
  notes?: string;
}
