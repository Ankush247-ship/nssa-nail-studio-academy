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
    titleKey: 'course.basic_advance.title',
    badgeKey: 'course.badge.flagship',
    durationDays: 30,
    practicalHours: 120,
    originalFee: 30000,
    discountedFee: 30000,
    kitIncluded: true,
    kitValue: 3000,
    nextBatch: 'New Batch Starts Every Monday',
    seatsLeft: 4,
    image: '/course-poster-15000.jpg',
    curriculumKeys: [
      'course.basic_advance.c1',
      'course.basic_advance.c2',
      'course.basic_advance.c3',
      'course.basic_advance.c4',
      'course.basic_advance.c5',
      'course.basic_advance.c6',
      'course.basic_advance.c7',
      'course.basic_advance.c8',
      'course.basic_advance.c9',
      'course.basic_advance.c10'
    ],
    certificationNameKey: 'course.basic_advance.cert'
  },
  {
    id: 'beginner-level',
    titleKey: 'course.beginner.title',
    badgeKey: 'course.badge.starter',
    durationDays: 12,
    practicalHours: 48,
    originalFee: 15000,
    discountedFee: 15000,
    kitIncluded: true,
    kitValue: 1500,
    nextBatch: 'New Batch Starts Every Monday',
    seatsLeft: 6,
    image: '/nail-art-glitter-pink.jpg',
    curriculumKeys: [
      'course.beginner.c1',
      'course.beginner.c2',
      'course.beginner.c3',
      'course.beginner.c4',
      'course.beginner.c5',
      'course.beginner.c6'
    ],
    certificationNameKey: 'course.beginner.cert'
  },
  {
    id: 'basic-to-diploma',
    titleKey: 'course.diploma.title',
    badgeKey: 'course.badge.comprehensive',
    durationDays: 60,
    practicalHours: 220,
    originalFee: 60000,
    discountedFee: 60000,
    kitIncluded: true,
    kitValue: 5000,
    nextBatch: 'New Batch Starts Every Monday',
    seatsLeft: 4,
    image: '/art-3d-5d-flowers.jpg',
    curriculumKeys: [
      'course.diploma.c1',
      'course.diploma.c2',
      'course.diploma.c3',
      'course.diploma.c4',
      'course.diploma.c5',
      'course.diploma.c6',
      'course.diploma.c7',
      'course.diploma.c8'
    ],
    certificationNameKey: 'course.diploma.cert'
  },
  {
    id: 'international-artist',
    titleKey: 'course.international.title',
    badgeKey: 'course.badge.elite',
    durationDays: 30,
    practicalHours: 130,
    originalFee: 75000,
    discountedFee: 75000,
    kitIncluded: true,
    kitValue: 8000,
    nextBatch: 'New Batch Starts Every Monday',
    seatsLeft: 3,
    image: '/art-master-advance.jpg',
    curriculumKeys: [
      'course.international.c1',
      'course.international.c2',
      'course.international.c3',
      'course.international.c4',
      'course.international.c5',
      'course.international.c6'
    ],
    certificationNameKey: 'course.international.cert'
  }
];

export const masterTrainers: MasterTrainer[] = [
  {
    id: 'uma-goswami',
    name: 'Uma Goswami',
    roleKey: 'trainer.uma.role',
    experienceYears: 15,
    image: '/uma-goswami-founder.jpg',
    specializationKey: 'trainer.uma.spec',
    certifications: ['trainer.uma.cert1', 'trainer.uma.cert2', 'trainer.uma.cert3'],
    quoteKey: 'trainer.uma.quote'
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
    name: 'Riniki Kalita',
    location: 'Guwahati Branch',
    roleKey: 'Basic to Advance Graduate',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'I enrolled in the Basic to Advance Nail Course. I received a free starter kit and the 100% practical training under Uma ma\'am gave me complete confidence. I now run my own setup!',
    type: 'student',
    resultImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 't2',
    name: 'Simran Grover',
    location: 'Mumbai (Andheri)',
    roleKey: 'Placed at Premium Salon',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'The placement team at NSSA helped me secure interviews immediately after certification. Great faculty, government authorised certificate, and hands-on client practice!',
    type: 'student',
    resultImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600',
    verified: true
  },
  {
    id: 't3',
    name: 'Priyanka Das',
    location: 'International Artist Course Alumni',
    roleKey: 'Now a Freelance Master Artist',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'The International Artist Course pushed my skills to a competition standard. I now take freelance bridal bookings charging ₹3,000+ per client.',
    type: 'student',
    verified: true
  },
  {
    id: 't4',
    name: 'Anjali Sharma',
    location: 'Basic to Diploma Alumni',
    roleKey: 'Studio Owner, Mumbai',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    reviewKey: 'The Basic to Diploma course covered everything from technique to business setup. Within 2 months of graduating, I launched my own nail studio.',
    type: 'student',
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
    category: 'admission',
    question: 'What is the fee and duration for the Basic to Advance Nail Course?',
    answer: 'The flagship Basic to Advance course runs for 30 Days and costs ₹30,000. It includes nail art, extensions, gel polish, acrylics, hygiene, client handling, a government authorised certificate, EMI facility, placement guidance, and a starter kit.'
  },
  {
    category: 'admission',
    question: 'Which course should I choose if I am a complete beginner?',
    answer: 'Start with the 12-day Beginner Level course to build foundational skills. If you want a full career-ready program, the 30-day Basic to Advance or the 60-day Basic to Diploma course is the better fit.'
  },
  {
    category: 'admission',
    question: 'Is EMI available for academy course fees?',
    answer: 'Yes, flexible EMI facilities and easy installment options are available for all students so they can start learning without financial stress.'
  },
  {
    category: 'course',
    question: 'Is NSSA Government Authorised?',
    answer: 'Yes, NSSA is a Government Authorised Training Centre with internationally certified trainers led by Founder Uma Goswami.'
  },
  {
    category: 'course',
    question: 'Do I get a professional toolkit with the course?',
    answer: 'Yes, every enrolled student receives a professional starter toolkit as part of their course, so you can start practicing and taking clients right away.'
  },
  {
    category: 'course',
    question: 'What kind of career or income can I expect after certification?',
    answer: 'Graduates typically earn ₹30,000 to ₹80,000+ per month as employed artists, or ₹1,000 to ₹3,500+ per client and ₹1 to ₹3 Lakh+ monthly revenue running their own nail business. Earnings vary based on skills, pricing, location & clientele.'
  }
];
