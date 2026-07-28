import { SalonService, AcademyCourse, MasterTrainer, StudioBranch, Testimonial, BeforeAfterPair } from '../types';

export const salonServices: SalonService[] = [
  {
    id: 'nail-extensions',
    titleKey: 'service.gel_ext_title',
    category: 'extensions',
    price: 1999,
    durationMinutes: 75,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'service.gel_ext_desc',
    isPopular: true,
    featuresKeys: ['Gel & Acrylic Extensions', 'Glass Gloss Finish', '4-5 Weeks Retention', 'Free Cuticle Care']
  },
  {
    id: 'gel-polish',
    titleKey: 'service.gel_overlay_title',
    category: 'gel-polish',
    price: 999,
    durationMinutes: 45,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'service.gel_overlay_desc',
    isPopular: true,
    featuresKeys: ['Non-Chipping Gel Polish', 'High Gloss Mirror Finish', 'Quick UV/LED Cure', 'Safe Damage-Free Removal']
  },
  {
    id: 'nail-art',
    titleKey: 'service.chrome_ombre_title',
    category: 'nail-art',
    price: 1499,
    durationMinutes: 60,
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'service.chrome_ombre_desc',
    isPopular: true,
    featuresKeys: ['Chrome, Ombre & Cat-Eye', 'Handmade Custom Designs', 'Foil & Sticker Art', 'Scratch-Proof Seal']
  },
  {
    id: 'bridal-nails',
    titleKey: 'service.3d_bridal_title',
    category: 'bridal',
    price: 3499,
    durationMinutes: 120,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'service.3d_bridal_desc',
    isPopular: true,
    featuresKeys: ['Handmade 3D Flowers', 'Swarovski Crystals', '24K Gold Leaf Details', 'Free VIP Bridal Trial']
  },
  {
    id: 'nail-spa',
    titleKey: 'service.spa_detox_title',
    category: 'nail-spa',
    price: 1299,
    durationMinutes: 60,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'service.spa_detox_desc',
    isPopular: false,
    featuresKeys: ['Rose & Essential Oil Soak', 'Botanical Scrub Exfoliation', 'Hydrating Cuticle Therapy', 'Relaxing Hand Massage']
  },
  {
    id: 'pedicure',
    titleKey: 'Pedicure & Foot Care Spa',
    category: 'nail-spa',
    price: 1499,
    durationMinutes: 60,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'Deep detoxifying foot soak, cuticle restoration, callus smoothing, and long-lasting gel pedicure.',
    isPopular: false,
    featuresKeys: ['Callus Removal', 'Dead Skin Exfoliation', 'Relaxing Foot Massage', 'Long-Lasting Polish']
  },
  {
    id: 'luxury-manicure',
    titleKey: 'Luxury Manicure',
    category: 'nail-spa',
    price: 1199,
    durationMinutes: 45,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'Premium herbal hand mask, nail shaping, cuticle nourishment, and soothing massage.',
    isPopular: false,
    featuresKeys: ['Herbal Hand Soak', 'Precision Cuticle Care', 'Moisturizing Paraffin Pack', 'Gloss Shine Finish']
  },
  {
    id: 'nail-repair',
    titleKey: 'Nail Repair & Extension Refill',
    category: 'extensions',
    price: 499,
    durationMinutes: 30,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    descriptionKey: 'Expert single nail extension fix, apex rebalancing, and damage recovery treatment.',
    isPopular: false,
    featuresKeys: ['Instant Crack Repair', 'Apex Rebalancing', 'Safe Removal', 'Strengthening Treatment']
  }
];

export const academyCourses: AcademyCourse[] = [
  {
    id: 'basic-to-advance',
    titleKey: 'Basic to Advance Nail Course',
    badgeKey: 'FLAGSHIP ACADEMY COURSE',
    durationDays: 30,
    practicalHours: 120,
    originalFee: 25000,
    discountedFee: 15000,
    kitIncluded: true,
    kitValue: 3000,
    nextBatch: 'New Batch Starts Every Monday',
    seatsLeft: 4,
    image: '/course-poster-15000.jpg',
    curriculumKeys: [
      'Basic Nail Art & Color Blending',
      'Nail Extensions (Gel & Acrylic)',
      'Gel Polish Application & Art',
      'Acrylic Nails Sculpting & Apex Building',
      'Salon Hygiene & Sanitization Protocols',
      'Client Handling & Consultation Skills',
      'Government Authorised Certification',
      'Free Starter Kit + Products Worth ₹3,000',
      'EMI Facility Available',
      '100% Placement Guidance & Salon Launch'
    ],
    certificationNameKey: 'Govt. Authorised Professional Nail Artist Certification'
  }
];

export const masterTrainers: MasterTrainer[] = [
  {
    id: 'uma-goswami',
    name: 'Uma Goswami',
    roleKey: 'Founder & International Master Educator',
    experienceYears: 15,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    specializationKey: 'Master Nail Educator, Celebrity Nail Artist & Salon Franchise Mentor',
    certifications: ['Govt. Authorised Master Educator', 'Internationally Certified Nail Tech', '15+ Years Industry Experience'],
    quoteKey: '"At Nail Style Studio Academy, we don\'t just teach nail extensions—we empower women and aspiring artists to build flourishing, financially independent beauty careers."'
  },
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    roleKey: 'Senior Academy Educator',
    experienceYears: 8,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    specializationKey: '3D Artistry, Polygel & Airbrush Specialist',
    certifications: ['Master Polygel Specialist', 'Airbrush Nail Art Educator', 'Russian Cuticle Master'],
    quoteKey: '"Every student receives personal 1-on-1 attention until their extension apex and cuticle sealing are 100% flawless."'
  }
];

export const studioBranches: StudioBranch[] = [
  {
    id: 'mumbai-andheri-sahar',
    city: 'Mumbai',
    areaKey: 'Andheri East (Main Branch)',
    addressKey: 'Shop No. 2, Shri Sai Darshan Welfare Society, Highway, Sai Wadi, Andheri East, Mumbai, Maharashtra 400069',
    phone: '9372233042',
    whatsapp: '919372233042',
    googleRating: 4.7,
    reviewCount: 186,
    timingKey: '10:00 AM – 7:00 PM (Mon - Sun)',
    image: '/studio-front.jpg'
  },
  {
    id: 'mumbai-goregaon-west',
    city: 'Mumbai',
    areaKey: 'Goregaon West',
    addressKey: '1st Floor, Phase 2, Kenorita Jewels, Shop No. 122 & 128, Kakaji Nagar, Jawahar Nagar, Goregaon West, Mumbai, Maharashtra 400104',
    phone: '9372233042',
    whatsapp: '919372233042',
    googleRating: 4.7,
    reviewCount: 186,
    timingKey: '10:00 AM – 7:00 PM (Mon - Sun)',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mumbai-andheri-west',
    city: 'Mumbai',
    areaKey: 'Andheri West (Lokhandwala)',
    addressKey: 'Shop No. 12, Link Plaza, Opposite Infinity Mall, Lokhandwala, Andheri West, Mumbai',
    phone: '9136924076',
    whatsapp: '919136924076',
    googleRating: 4.7,
    reviewCount: 142,
    timingKey: '10:00 AM – 7:00 PM (Mon - Sun)',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mumbai-ghatkopar',
    city: 'Mumbai',
    areaKey: 'Ghatkopar East',
    addressKey: 'Shop 4, Tilak Road, Near Railway Station, Ghatkopar East, Mumbai, Maharashtra',
    phone: '7400434215',
    whatsapp: '917400434215',
    googleRating: 4.7,
    reviewCount: 110,
    timingKey: '10:00 AM – 7:00 PM (Mon - Sun)',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'guwahati-gsroad',
    city: 'Guwahati',
    areaKey: 'G.S. Road (Christian Basti)',
    addressKey: '2nd Floor, Royal Plaza, Near Christian Basti, G.S. Road, Guwahati, Assam 781005',
    phone: '9372233042',
    whatsapp: '919372233042',
    googleRating: 4.8,
    reviewCount: 165,
    timingKey: '10:00 AM – 7:00 PM (Mon - Sun)',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'guwahati-zooroad',
    city: 'Guwahati',
    areaKey: 'Zoo Road (Commerce College)',
    addressKey: 'Opp. Commerce College Signal, Zoo Road, Guwahati, Assam 781024',
    phone: '9136924076',
    whatsapp: '919136924076',
    googleRating: 4.7,
    reviewCount: 120,
    timingKey: '10:00 AM – 7:00 PM (Mon - Sun)',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Pooja Mehta',
    location: 'Mumbai (Andheri East)',
    roleKey: 'Verified Salon Client',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'Nail Style Studio Academy in Andheri East is top-notch! Uma Goswami ma\'am\'s team created my wedding nail extensions. The quality was outstanding and lasted 4+ weeks. Highly recommended!',
    type: 'client',
    resultImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 't2',
    name: 'Riniki Kalita',
    location: 'Guwahati Branch',
    roleKey: 'Basic to Advance Course Graduate',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'I enrolled in the 30-day Basic to Advance Nail Course for ₹15,000. I received a free starter kit with products worth ₹3,000. The 100% practical training gave me complete confidence. I now run my own setup!',
    type: 'student',
    resultImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 't3',
    name: 'Simran Grover',
    location: 'Mumbai (Andheri)',
    roleKey: 'Placed at Premium Salon',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'The placement team at Nail Style Studio Academy helped me secure interviews immediately after certification. Great faculty, government authorized certificate, and hands-on client practice!',
    type: 'student',
    resultImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 't4',
    name: 'Neha Kulkarni',
    location: 'Ghatkopar East Branch',
    roleKey: 'Regular Nail Spa Client',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'Cleanest nail salon in Ghatkopar East! Friendly staff, genuine products, and reasonable pricing for gel polish and nail extensions. 5 stars!',
    type: 'client',
    verified: true
  }
];

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 'ba1',
    titleKey: 'Damaged & Short Nails Transformation',
    categoryKey: 'Nail Extension & Repair',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    descriptionKey: 'Custom Gel extension structure rebuild into elegant almond shape with gloss finish.'
  },
  {
    id: 'ba2',
    titleKey: '3D Bridal Nail Art Transformation',
    categoryKey: 'Bridal Couture',
    beforeImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
    descriptionKey: 'Hand-sculpted 3D flowers with Swarovski crystals and gold foil detailing.'
  }
];

export const faqItems = [
  {
    category: 'salon',
    question: 'Where is Nail Style Studio Academy located in Mumbai?',
    answer: 'Our main Mumbai branch is located at Shop No. 2, Shri Sai Darshan Welfare Society, Sahar Road, Andheri East, Mumbai, Maharashtra. We also have branches in Andheri West (Lokhandwala) and Ghatkopar East, as well as Guwahati.'
  },
  {
    category: 'salon',
    question: 'How long do Gel and Acrylic nail extensions last?',
    answer: 'Our signature gel and acrylic extensions last 4 to 5 weeks with zero chipping before needing a quick fill. We use high quality imported non-toxic products.'
  },
  {
    category: 'academy',
    question: 'What is the fee and duration for the Basic to Advance Nail Course?',
    answer: 'The flagship Basic to Advance Nail Course duration is 30 Days and the fee is ₹15,000. It includes basic nail art, extensions, gel polish, acrylics, hygiene, client handling, government authorised certificate, EMI facility, placement guidance, and a starter kit with products worth ₹3,000!'
  },
  {
    category: 'academy',
    question: 'Is EMI available for academy course fees?',
    answer: 'Yes! Flexible EMI facilities and easy installment options are available for all our students so you can start learning without financial stress.'
  },
  {
    category: 'academy',
    question: 'Is Nail Style Studio Academy Government Authorised?',
    answer: 'Yes! Nail Style Studio Academy is a Government Authorised Training Centre with internationally certified trainers led by Founder Uma Goswami.'
  },
  {
    category: 'franchise',
    question: 'How can I apply for a Nail Style Studio Franchise?',
    answer: 'We provide full business support, staff training, marketing assistance, branding, and setup guidance. You can apply directly through our Franchise form or call us at 9372233042 / 9136924076.'
  }
];
