import { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav & Header
    'announcement.ticker': '🔥 MUMBAI & GUWAHATI MASTER BATCH: 4 SEATS LEFT! GET FLAT ₹5,000 EARLY BIRD DISCOUNT',
    'nav.brand_tagline': 'Luxury Salon & Govt. Recognized Academy',
    'nav.salon_services': 'Salon Services',
    'nav.academy_courses': 'Nail Academy',
    'nav.real_gallery': 'Client Results',
    'nav.studio_tour': 'Studio Tour',
    'nav.trainers': 'Master Trainers',
    'nav.franchise': 'Franchise',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.book_salon': 'Book Salon',
    'nav.join_academy': 'Join Academy',

    // Hero Section
    'hero.badge': 'Govt. Authorised & ISO 9001:2015 Certified',
    'hero.title_p1': 'The Art of Haute Couture',
    'hero.title_p2': 'Nail Extensions & Master Academy',
    'hero.subtitle': 'Experience Dior-standard luxury salon services in Mumbai & Guwahati or launch a high-earning career as a certified Master Nail Artist.',
    'hero.cta_book': 'Book VIP Salon Appointment',
    'hero.cta_academy': 'Explore Certified Courses',
    'hero.google_reviews': '4.9★ Google Rating (2,500+ Verified Client Reviews)',
    'hero.stat_clients': '15,000+',
    'hero.stat_clients_label': 'Luxury Clients Served',
    'hero.stat_graduates': '4,200+',
    'hero.stat_graduates_label': 'Certified Graduates',
    'hero.stat_placement': '98%',
    'hero.stat_placement_label': 'Job Placement Rate',
    'hero.stat_studios': '4',
    'hero.stat_studios_label': 'Luxury Studios in Mumbai & Guwahati',

    // Trust Badges
    'trust.govt_authorised': 'Govt. Skill India Aligned',
    'trust.iso_certified': 'ISO 9001:2015 Certified',
    'trust.practical_training': '100% Hands-On Practical Training',
    'trust.placement_support': '100% Job & Salon Launch Support',
    'trust.toolkit_included': 'Free ₹15,000 Professional Toolkit',

    // Authentic Showcase
    'showcase.title': 'Real Salon Results & Student Transformations',
    'showcase.subtitle': 'No generic stock photos. See authentic client transformations, student practical sessions, and our luxury studio interiors in Mumbai and Guwahati.',
    'showcase.tab_salon': 'Real Client Results',
    'showcase.tab_students': 'Student Classes',
    'showcase.tab_studios': 'Luxury Interiors',
    'showcase.tab_before_after': 'Before & After',
    'showcase.before': 'BEFORE',
    'showcase.after': 'AFTER',

    // Services Section
    'services.badge': 'Haute Couture Salon Menu',
    'services.title': 'Unmatched Elegance & Precision Nail Artistry',
    'services.subtitle': 'Handcrafted gel extensions, 3D bridal artistry, and therapeutic nail care using premium imported non-toxic products.',
    'services.cat_all': 'All Services',
    'services.cat_extensions': 'Nail Extensions',
    'services.cat_art': 'Nail Art',
    'services.cat_gel': 'Gel Polish',
    'services.cat_bridal': 'Bridal Special',
    'services.cat_spa': 'Nail Spa & Care',
    'services.book_now': 'Book Appointment',
    'services.popular': 'MOST REQUESTED',

    // Service Titles & Descriptions
    'service.gel_ext_title': 'Signature Gel Extensions',
    'service.gel_ext_desc': 'Lightweight, ultra-durable gel extensions tailored to your natural nail bed with a glass-like glossy finish.',
    'service.acrylic_ext_title': 'High-Fashion Acrylic Sculpting',
    'service.acrylic_ext_desc': 'Custom hand-sculpted acrylics for maximum length, perfect apex curve, and chip-resistant strength.',
    'service.3d_bridal_title': 'Royal 3D Bridal Nail Couture',
    'service.3d_bridal_desc': 'Hand-crafted 3D flowers, genuine Swarovski crystals, pearl accents, and 24K gold foil detailing for your big day.',
    'service.chrome_ombre_title': 'Mirror Chrome & Velvet Ombre Art',
    'service.chrome_ombre_desc': 'Ultra-modern metallic chrome luster, aura airbrush blends, and magnetic cat-eye dimensional effects.',
    'service.gel_overlay_title': 'BIAB Hard Gel Structure Overlay',
    'service.gel_overlay_desc': 'Strengthening builder gel over natural nails to repair damage, prevent breakage, and promote healthy growth.',
    'service.spa_detox_title': 'Rose & Champagne Luxury Nail Spa',
    'service.spa_detox_desc': 'Organic botanical exfoliation, warm essential oil soak, hydrating cuticle therapy, and deep pressure hand massage.',

    // Courses Section
    'courses.badge': 'Government Authorised Academy',
    'courses.title': 'Master Nail Artistry. Build a High-Income Career.',
    'courses.subtitle': 'Learn directly from celebrity nail technicians with 100% practical hands-on training, professional kit included, and guaranteed placement.',
    'courses.fee_label': 'Course Fee:',
    'courses.discount_badge': 'SAVE ₹10,000 TODAY',
    'courses.batch_label': 'Next Batch Starts:',
    'courses.seats_label': 'Seats Remaining:',
    'courses.kit_label': 'Included Professional Toolkit:',
    'courses.enroll_now': 'Enroll Now',
    'courses.download_syllabus': 'Download Syllabus',

    // Course Titles & Descriptions
    'course.master_diploma_title': 'International Master Nail Artist Diploma',
    'course.master_diploma_badge': 'FLAGSHIP CAREER PROGRAM',
    'course.master_diploma_cert': 'Govt. & International Accredited Diploma',
    'course.master_diploma_desc': 'Comprehensive 30-day intensive program covering Gel, Acrylic, Polygel, 3D Art, Airbrushing, Chrome, E-file, & Salon Management.',

    'course.adv_extensions_title': 'Advanced Extensions & Sculpting Masterclass',
    'course.adv_extensions_badge': 'POPULAR FOR BEAUTICIANS',
    'course.adv_extensions_cert': 'Certified Extension Specialist Certificate',
    'course.adv_extensions_desc': '15-day focused module mastering apex building, form fitting, C-curve sculpting, refill techniques, and safe removal.',

    'course.bridal_art_title': 'Royal Bridal & 3D Art Specialization',
    'course.bridal_art_badge': 'CREATIVE ADVANCED LEVEL',
    'course.bridal_art_cert': 'Bridal Nail Couture Master Certificate',
    'course.bridal_art_desc': '7-day creative workshop on 3D gel flowers, encapsulation, liquid glitter, lace art, and wedding season trend styling.',

    // Course Journey
    'journey.title': 'Your 5-Step Path to Becoming a Successful Nail Artist',
    'journey.step1_title': 'Step 1: Enrollment & Toolkit Handover',
    'journey.step1_desc': 'Receive your complete ₹15,000 international nail kit containing UV/LED lamps, E-file drills, gel pots, acrylic monomers, and tools.',
    'journey.step2_title': 'Step 2: 100% Practical Live Classes',
    'journey.step2_desc': 'Daily hands-on practice under master instructors. No theoretical boredom—you work on practice hands and live models.',
    'journey.step3_title': 'Step 3: Client Simulation & Speed Building',
    'journey.step3_desc': 'Learn real-world salon timing, client communication, hygiene protocols, and troubleshooting extension lifts.',
    'journey.step4_title': 'Step 4: International Examination & Certification',
    'journey.step4_desc': 'Pass practical assessment and receive your Government-recognized & ISO accredited diploma certificate.',
    'journey.step5_title': 'Step 5: Placement or Salon Launch Support',
    'journey.step5_desc': 'Get interviewed by top luxury salons (Lakme, Lookwell, Enrich) or get 1-on-1 mentorship to open your own profitable studio.',

    // Master Trainers
    'trainers.title': 'Learn from Celebrity Master Nail Educators',
    'trainers.subtitle': 'Our trainers bring 10+ years of global experience, having styled Bollywood celebrities, brides, and top fashion models.',
    'trainer1.role': 'Founder & Master Director',
    'trainer1.spec': 'Celebrity Bridal Specialist & International Educator',
    'trainer1.quote': '"Nail artistry is not just beauty—it is precision engineering and self-expression. We train our students to be high-earning artists."',
    'trainer2.role': 'Senior Academy Lead Educator',
    'trainer2.spec': '3D Artistry, Polygel & Airbrush Specialist',
    'trainer2.quote': '"Every student receives personal 1-on-1 attention until their extension apex and cuticle sealing are 100% flawless."',

    // Student Success
    'success.title': 'Where Our Graduates Work',
    'success.subtitle': 'Join over 4,200 successful alumni earning ₹35,000 to ₹1,500,000+ per month across India and abroad.',

    // Franchise
    'franchise.title': 'Own a High-Profit Luxury Nail Style Studio',
    'franchise.subtitle': 'Partner with India’s fastest-growing luxury nail salon & academy brand. High margins, quick ROI, complete operational setup.',
    'franchise.stat_roi': '12 - 15 Months',
    'franchise.stat_roi_label': 'Average Payback Period',
    'franchise.stat_margin': '45%',
    'franchise.stat_margin_label': 'Gross Profit Margin',
    'franchise.cta': 'Apply for Franchise',
    'franchise.calc_title': 'Estimate Your Franchise Earnings',
    'franchise.calc_sqft': 'Studio Size (Sq. Ft.):',
    'franchise.calc_est_monthly': 'Estimated Monthly Revenue:',
    'franchise.calc_est_profit': 'Estimated Monthly Net Profit:',

    // Locations
    'locations.title': 'Visit Our Luxury Studios & Academies',
    'locations.mumbai_andheri': 'Mumbai - Andheri West (Lokhandwala)',
    'locations.mumbai_bandra': 'Mumbai - Bandra West (Turner Road)',
    'locations.guwahati_gsroad': 'Guwahati - G.S. Road (Christian Basti)',
    'locations.guwahati_zooroad': 'Guwahati - Zoo Road (Commerce College)',
    'locations.timing': 'Open 7 Days: 10:00 AM - 8:30 PM',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.cat_salon': 'Salon Appointments',
    'faq.cat_academy': 'Academy & Courses',
    'faq.cat_franchise': 'Franchise Business',

    // Modals
    'modal.book_title': 'Book Luxury Salon Appointment',
    'modal.admission_title': 'Enroll in Nail Academy Batch',
    'modal.franchise_title': 'Franchise Partner Application',
    'modal.brochure_title': 'Download Course Syllabus & Fee Details',
    'modal.submit': 'Confirm & Continue on WhatsApp',
    'modal.success_msg': 'Thank you! Your request has been created. Redirecting to WhatsApp for instant confirmation...',

    // Footer
    'footer.about': 'Nail Style Studio Academy is India’s premier luxury nail salon chain and Govt. recognized nail art academy in Mumbai & Guwahati.',
    'footer.rights': '© 2026 Nail Style Studio Academy. All Rights Reserved. ISO 9001:2015 Certified.'
  },

  hi: {
    // Nav & Header
    'announcement.ticker': '🔥 मुंबई और गुवाहाटी मास्टर बैच: केवल 4 सीटें शेष! फ्लैट ₹5,000 अर्ली बर्ड छूट प्राप्त करें',
    'nav.brand_tagline': 'लक्जरी सैलून और सरकारी मान्यता प्राप्त अकादमी',
    'nav.salon_services': 'सैलून सेवाएं',
    'nav.academy_courses': 'नेल अकादमी',
    'nav.real_gallery': 'क्लाइंट परिणाम',
    'nav.studio_tour': 'स्टूडियो टूर',
    'nav.trainers': 'मास्टर ट्रेनर्स',
    'nav.franchise': 'फ्रेंचाइज',
    'nav.reviews': 'समीक्षाएं',
    'nav.faq': 'सवाल-जवाब',
    'nav.book_salon': 'अपॉइंटमेंट लें',
    'nav.join_academy': 'अकादमी ज्वाइन करें',

    // Hero Section
    'hero.badge': 'सरकारी अधिकृत और ISO 9001:2015 प्रमाणित',
    'hero.title_p1': 'हौते कॉउचर की कला',
    'hero.title_p2': 'नेल एक्सटेंशन एवं मास्टर अकादमी',
    'hero.subtitle': 'मुंबई और गुवाहाटी में डियोर-मानक लक्जरी सैलून सेवाओं का अनुभव करें या प्रमाणित मास्टर नेल आर्टिस्ट के रूप में उच्च-कमाई वाले करियर की शुरुआत करें।',
    'hero.cta_book': 'VIP सैलून अपॉइंटमेंट बुक करें',
    'hero.cta_academy': 'प्रमाणित पाठ्यक्रम देखें',
    'hero.google_reviews': '4.9★ गूगल रेटिंग (2,500+ सत्यापित समीक्षाएं)',
    'hero.stat_clients': '15,000+',
    'hero.stat_clients_label': 'संतुष्ट लक्जरी ग्राहक',
    'hero.stat_graduates': '4,200+',
    'hero.stat_graduates_label': 'प्रमाणित स्नातक',
    'hero.stat_placement': '98%',
    'hero.stat_placement_label': 'जॉब प्लेसमेंट दर',
    'hero.stat_studios': '4',
    'hero.stat_studios_label': 'मुंबई और गुवाहाटी में लक्जरी स्टूडियो',

    // Trust Badges
    'trust.govt_authorised': 'सरकारी स्किल इंडिया अलाइन्ड',
    'trust.iso_certified': 'ISO 9001:2015 प्रमाणित',
    'trust.practical_training': '100% प्रैक्टिकल लाइव ट्रेनिंग',
    'trust.placement_support': '100% जॉब और सैलून सेटअप सपोर्ट',
    'trust.toolkit_included': 'मुफ्त ₹15,000 प्रोफेशनल टूलकिट',

    // Authentic Showcase
    'showcase.title': 'वास्तविक सैलून परिणाम और छात्र परिवर्तन',
    'showcase.subtitle': 'कोई नकली तस्वीरें नहीं। मुंबई और गुवाहाटी में हमारे प्रामाणिक ग्राहक कार्य, व्यावहारिक सत्र और लक्जरी स्टूडियो देखें।',
    'showcase.tab_salon': 'क्लाइंट परिणाम',
    'showcase.tab_students': 'छात्र प्रैक्टिकल',
    'showcase.tab_studios': 'स्टूडियो इंटीरियर',
    'showcase.tab_before_after': 'पहले और बाद में',
    'showcase.before': 'पहले',
    'showcase.after': 'बाद में',

    // Services Section
    'services.badge': 'लक्जरी सैलून मेनू',
    'services.title': 'अतुलनीय भव्यता और सटीक नेल आर्ट',
    'services.subtitle': 'प्रीमियम इम्पोर्टेड नॉन-टॉक्सिक उत्पादों का उपयोग करके तैयार किए गए नेल एक्सटेंशन, 3D ब्राइडल आर्ट और नेल केयर।',
    'services.cat_all': 'सभी सेवाएं',
    'services.cat_extensions': 'नेल एक्सटेंशन',
    'services.cat_art': 'नेल आर्ट',
    'services.cat_gel': 'जेल पॉलिश',
    'services.cat_bridal': 'ब्राइडल स्पेशल',
    'services.cat_spa': 'नेल स्पा',
    'services.book_now': 'अपॉइंटमेंट बुक करें',
    'services.popular': 'सर्वाधिक लोकप्रिय',

    // Service Titles & Descriptions
    'service.gel_ext_title': 'सिग्नेचर जेल एक्सटेंशन',
    'service.gel_ext_desc': 'हल्का, टिकाऊ जेल एक्सटेंशन कांच जैसी चमकदार फिनिश के साथ आपके प्राकृतिक नाखूनों के अनुसार तैयार किया गया।',
    'service.acrylic_ext_title': 'हाई-फैशन एक्रिलिक स्कल्प्टिंग',
    'service.acrylic_ext_desc': 'अधिकतम लंबाई, सही अपेक्स कर्व और टिकाऊ मजबूती के लिए कस्टम एक्रिलिक्स।',
    'service.3d_bridal_title': 'रॉयल 3D ब्राइडल नेल कॉउचर',
    'service.3d_bridal_desc': 'आपकी शादी के विशेष दिन के लिए हाथ से बने 3D फूल, स्वारोवस्की क्रिस्टल और 24K गोल्ड फॉयल डिटेलिंग।',
    'service.chrome_ombre_title': 'मिरर क्रोम और वेलवेट ओम्ब्रे आर्ट',
    'service.chrome_ombre_desc': 'अल्ट्रा-मॉडर्न मैटेलिक क्रोम लस्टर, ऑरा एयरब्रश ब्लेंड्स और 3D कैट-आई इफेक्ट।',
    'service.gel_overlay_title': 'BIAB हार्ड जेल स्ट्रक्चर ओवरले',
    'service.gel_overlay_desc': 'प्राकृतिक नाखूनों को मजबूत करने और टूटने से बचाने के लिए स्ट्रक्चर बिल्डर जेल।',
    'service.spa_detox_title': 'रोज़ और शैंपेन लक्जरी नेल स्पा',
    'service.spa_detox_desc': 'ऑर्गेनिक बॉटनिकल एक्सफ़ोलीएशन, गर्म तेल सोक, क्यूटिकल थेरेपी और हैंड मसाज।',

    // Courses Section
    'courses.badge': 'सरकारी मान्यता प्राप्त अकादमी',
    'courses.title': 'नेल आर्ट में महारत हासिल करें। उच्च आय वाला करियर बनाएं।',
    'courses.subtitle': '100% व्यावहारिक प्रशिक्षण, मुफ्त टूलकिट और 100% जॉब प्लेसमेंट सहायता के साथ सेलिब्रिटी नेल तकनीशियनों से सीखें।',
    'courses.fee_label': 'कोर्स शुल्क:',
    'courses.discount_badge': 'आज ₹10,000 बचाएं',
    'courses.batch_label': 'अगला बैच शुरू:',
    'courses.seats_label': 'शेष सीटें:',
    'courses.kit_label': 'शामिल मुफ़्त टूलकिट:',
    'courses.enroll_now': 'अभी एडमिशन लें',
    'courses.download_syllabus': 'सिलेबस डाउनलोड करें',

    // Course Titles & Descriptions
    'course.master_diploma_title': 'इंटरनेशनल मास्टर नेल आर्टिस्ट डिप्लोमा',
    'course.master_diploma_badge': 'मुख्य करियर प्रोग्राम',
    'course.master_diploma_cert': 'सरकारी और अंतर्राष्ट्रीय मान्यता प्राप्त डिप्लोमा',
    'course.master_diploma_desc': '30 दिनों का गहन कार्यक्रम जिसमें जेल, एक्रिलिक, पॉलिजेल, 3D आर्ट, एयरब्रशिंग, क्रोम और सैलून प्रबंधन शामिल है।',

    'course.adv_extensions_title': 'एडवांस्ड एक्सटेंशन और स्कल्प्टिंग मास्टरक्लास',
    'course.adv_extensions_badge': 'ब्यूटीशियंस के लिए लोकप्रिय',
    'course.adv_extensions_cert': 'प्रमाणित एक्सटेंशन विशेषज्ञ प्रमाणपत्र',
    'course.adv_extensions_desc': '15 दिनों का केंद्रित मॉड्यूल जिसमें अपेक्स बिल्डिंग, फॉर्म फिटिंग, सी-कर्व और सेफ रिमूवल सिखाया जाता है।',

    'course.bridal_art_title': 'रॉयल ब्राइडल और 3D आर्ट विशेषज्ञता',
    'course.bridal_art_badge': 'रचनात्मक उन्नत स्तर',
    'course.bridal_art_cert': 'ब्राइडल नेल कॉउचर मास्टर प्रमाणपत्र',
    'course.bridal_art_desc': '3D जेल फूल, एनकैप्सुलेशन, लिक्विड ग्लिटर और ब्राइडल ट्रेंड्स पर 7 दिनों की वर्कशॉप।',

    // Course Journey
    'journey.title': 'एक सफल नेल आर्टिस्ट बनने के 5 चरण',
    'journey.step1_title': 'चरण 1: नामांकन और टूलकिट हैंडओवर',
    'journey.step1_desc': 'UV/LED लैंप, ई-फाइल ड्रिल, जेल पॉट्स और एक्रिलिक मोनोमर्स वाली ₹15,000 की इंटरनेशनल किट प्राप्त करें।',
    'journey.step2_title': 'चरण 2: 100% प्रैक्टिकल लाइव क्लासेस',
    'journey.step2_desc': 'मास्टर इंस्ट्रक्टर्स के मार्गदर्शन में दैनिक व्यावहारिक अभ्यास। आप प्रैक्टिस हैंड और लाइव मॉडल पर काम करते हैं।',
    'journey.step3_title': 'चरण 3: क्लाइंट सिमुलेशन और स्पीड बिल्डिंग',
    'journey.step3_desc': 'वास्तविक सैलून टाइमिंग, क्लाइंट कम्यूनिकेशन, स्वच्छता प्रोटोकॉल और एक्सटेंशन लिफ्टिंग का समाधान सीखें।',
    'journey.step4_title': 'चरण 4: अंतर्राष्ट्रीय परीक्षा और प्रमाणन',
    'journey.step4_desc': 'व्यावहारिक मूल्यांकन पास करें और अपना सरकारी मान्यता प्राप्त एवं ISO प्रमाणित डिप्लोमा प्रमाणपत्र प्राप्त करें।',
    'journey.step5_title': 'चरण 5: प्लेसमेंट या सैलून लॉन्च सपोर्ट',
    'journey.step5_desc': 'शीर्ष लक्जरी सैलून में इंटरव्यू पाएं या अपना खुद का लाभदायक स्टूडियो खोलने के लिए व्यक्तिगत सलाह लें।',

    // Master Trainers
    'trainers.title': 'सेलिब्रिटी मास्टर नेल एजुकेटर से सीखें',
    'trainers.subtitle': 'हमारे प्रशिक्षकों के पास 10+ वर्षों का वैश्विक अनुभव है, जिन्होंने बॉलीवुड अभिनेत्रियों और शीर्ष मॉडलों के लिए काम किया है।',
    'trainer1.role': 'संस्थापक और मास्टर निदेशक',
    'trainer1.spec': 'सेलिब्रिटी ब्राइडल स्पेशलिस्ट और इंटरनेशनल एजुकेटर',
    'trainer1.quote': '"नेल आर्ट केवल सुंदरता नहीं है—यह परिशुद्धता और अभिव्यक्ति है। हम अपने छात्रों को उच्च कमाई वाले आर्टिस्ट बनाते हैं।"',
    'trainer2.role': 'वरिष्ठ अकादमी मुख्य शिक्षिका',
    'trainer2.spec': '3D आर्टिस्ट्री, पॉलिजेल और एयरब्रश विशेषज्ञ',
    'trainer2.quote': '"हर छात्र को व्यक्तिगत 1-ऑन-1 ध्यान मिलता है जब तक कि उनका एक्सटेंशन 100% सही न हो जाए।"',

    // Student Success
    'success.title': 'हमारे स्नातक कहाँ काम करते हैं',
    'success.subtitle': 'भारत और विदेशों में प्रति माह ₹35,000 से ₹1,50,000+ कमाने वाले 4,200+ सफल पूर्व छात्रों में शामिल हों।',

    // Franchise
    'franchise.title': 'उच्च लाभदायक लक्जरी नेल स्टाइल स्टूडियो के मालिक बनें',
    'franchise.subtitle': 'भारत के सबसे तेजी से बढ़ते लक्जरी नेल सैलून ब्रांड के साथ साझेदारी करें। उच्च मार्जिन, त्वरित ROI और पूर्ण परिचालन सहायता।',
    'franchise.stat_roi': '12 - 15 महीने',
    'franchise.stat_roi_label': 'औसत पेबैक अवधि',
    'franchise.stat_margin': '45%',
    'franchise.stat_margin_label': 'सकल लाभ मार्जिन',
    'franchise.cta': 'फ्रेंचाइज के लिए आवेदन करें',
    'franchise.calc_title': 'अपनी फ्रेंचाइज कमाई का अनुमान लगाएं',
    'franchise.calc_sqft': 'स्टूडियो का आकार (वर्ग फुट):',
    'franchise.calc_est_monthly': 'अनुमानित मासिक राजस्व:',
    'franchise.calc_est_profit': 'अनुमानित मासिक शुद्ध लाभ:',

    // Locations
    'locations.title': 'हमारे लक्जरी स्टूडियो और अकादमियों में आएं',
    'locations.mumbai_andheri': 'मुंबई - अंधेरी वेस्ट (लोखंडवाला)',
    'locations.mumbai_bandra': 'मुंबई - बांद्रा वेस्ट (टर्नर रोड)',
    'locations.guwahati_gsroad': 'गुवाहाटी - जी.एस. रोड (क्रिश्चियन बस्ती)',
    'locations.guwahati_zooroad': 'गुवाहाटी - ज़ू रोड (कॉमर्स कॉलेज)',
    'locations.timing': 'सप्ताह के 7 दिन खुला: सुबह 10:00 - रात 8:30',

    // FAQ
    'faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
    'faq.cat_salon': 'सैलून अपॉइंटमेंट',
    'faq.cat_academy': 'अकादमी और पाठ्यक्रम',
    'faq.cat_franchise': 'फ्रेंचाइज व्यापार',

    // Modals
    'modal.book_title': 'लक्जरी सैलून अपॉइंटमेंट बुक करें',
    'modal.admission_title': 'नेल अकादमी बैच में प्रवेश लें',
    'modal.franchise_title': 'फ्रेंचाइज पार्टनर आवेदन',
    'modal.brochure_title': 'पाठ्यक्रम पाठ्यक्रम विवरण डाउनलोड करें',
    'modal.submit': 'व्हाट्सएप पर पुष्टि करें',
    'modal.success_msg': 'धन्यवाद! आपका अनुरोध प्राप्त हो गया है। व्हाट्सएप पर रीडायरेक्ट किया जा रहा है...',

    // Footer
    'footer.about': 'नेल स्टाइल स्टूडियो अकादमी मुंबई और गुवाहाटी में भारत की प्रमुख लक्जरी नेल सैलून श्रृंखला और सरकारी मान्यता प्राप्त अकादमी है।',
    'footer.rights': '© 2026 नेल स्टाइल स्टूडियो अकादमी। सर्वाधिकार सुरक्षित। ISO 9001:2015 प्रमाणित।'
  },

  mr: {
    // Nav & Header
    'announcement.ticker': '🔥 मुंबई आणि गुवाहाटी मास्टर बॅच: फक्त ४ जागा शिल्लक! ₹५,००० ची सवलत मिळवा',
    'nav.brand_tagline': 'लक्झरी सलून आणि शासनमान्य अकॅडमी',
    'nav.salon_services': 'सलून सेवा',
    'nav.academy_courses': 'नेल अकॅडमी',
    'nav.real_gallery': 'ग्राहकांचे निकाल',
    'nav.studio_tour': 'स्टुडिओ टूर',
    'nav.trainers': 'मास्टर ट्रेनर्स',
    'nav.franchise': 'फ्रँचायझी',
    'nav.reviews': 'परीक्षणे',
    'nav.faq': 'प्रश्न आणि उत्तरे',
    'nav.book_salon': 'अपॉइंटमेंट घ्या',
    'nav.join_academy': 'अकॅडमीमध्ये प्रवेश घ्या',

    // Hero Section
    'hero.badge': 'शासकीय मान्यताप्राप्त आणि ISO 9001:2015 प्रमाणित',
    'hero.title_p1': 'हौते कॉउचर नेल आर्ट',
    'hero.title_p2': 'नेल एक्सटेंशन व मास्टर अकॅडमी',
    'hero.subtitle': 'मुंबई आणि गुवाहाटीमध्ये डिओर-दर्जाच्या लक्झरी सलून सेवांचा अनुभव घ्या किंवा प्रमाणित मास्टर नेल आर्टिस्ट म्हणून उच्च उत्पन्नाची कारकीर्द सुरू करा.',
    'hero.cta_book': 'VIP सलून अपॉइंटमेंट बुक करा',
    'hero.cta_academy': 'प्रमाणित कोर्सेस पहा',
    'hero.google_reviews': '४.९★ गूगल रेटिंग (२,५००+ पुनरावलोकने)',
    'hero.stat_clients': '१५,०००+',
    'hero.stat_clients_label': 'समाधानी लक्झरी ग्राहक',
    'hero.stat_graduates': '४,२००+',
    'hero.stat_graduates_label': 'प्रमाणित पदवीधर',
    'hero.stat_placement': '९८%',
    'hero.stat_placement_label': 'नोकरी प्लेसमेंट दर',
    'hero.stat_studios': '४',
    'hero.stat_studios_label': 'मुंबई आणि गुवाहाटीमधील लक्झरी स्टुडिओ',

    // Trust Badges
    'trust.govt_authorised': 'शासकीय स्किल इंडिया संलग्न',
    'trust.iso_certified': 'ISO 9001:2015 प्रमाणित',
    'trust.practical_training': '१००% प्रत्यक्ष प्रात्यक्षिक प्रशिक्षण',
    'trust.placement_support': '१००% नोकरी आणि सलून सुरू करण्यासाठी मदत',
    'trust.toolkit_included': 'मोफत ₹१५,००० प्रोफेश्नल टूलकिट',

    // Authentic Showcase
    'showcase.title': 'वास्तविक सलून निकाल आणि विद्यार्थ्यांचे यश',
    'showcase.subtitle': 'कोणतेही बनावट फोटो नाहीत. मुंबई आणि गुवाहाटीमधील आमचे प्रत्यक्ष काम, प्रात्यक्षिक वर्ग आणि लक्झरी स्टुडिओ पहा.',
    'showcase.tab_salon': 'ग्राहकांचे निकाल',
    'showcase.tab_students': 'विद्यार्थ्यांचे वर्ग',
    'showcase.tab_studios': 'स्टुडिओ इंटीरियर',
    'showcase.tab_before_after': 'आधी आणि नंतर',
    'showcase.before': 'आधी',
    'showcase.after': 'नंतर',

    // Services Section
    'services.badge': 'लक्झरी सलून मेनू',
    'services.title': 'अतुलनीय सौंदर्य आणि अचूक नेल आर्ट',
    'services.subtitle': 'प्रीमियम उत्पादनांचा वापर करून तयार केलेले नेल एक्सटेंशन, ३D ब्राइडल आर्ट आणि नेल केअर.',
    'services.cat_all': 'सर्व सेवा',
    'services.cat_extensions': 'नेल एक्सटेंशन',
    'services.cat_art': 'नेल आर्ट',
    'services.cat_gel': 'जेल पॉलिश',
    'services.cat_bridal': 'ब्राइडल स्पेशल',
    'services.cat_spa': 'नेल स्पा',
    'services.book_now': 'अपॉइंटमेंट घ्या',
    'services.popular': 'सर्वाधिक मागणी',

    // Service Titles & Descriptions
    'service.gel_ext_title': 'सिग्नेचर जेल एक्सटेंशन',
    'service.gel_ext_desc': 'हलके, टिकाऊ जेल एक्सटेंशन काचेसारख्या चमकणाऱ्या फिनिशसह तुमच्या नखांनुसार.',
    'service.acrylic_ext_title': 'हाय-फॅशन ॲक्रेलिक स्कल्प्टिंग',
    'service.acrylic_ext_desc': 'योग्य आकार आणि मजबूत मजबुतीसाठी खास ॲक्रेलिक एक्सटेंशन.',
    'service.3d_bridal_title': 'रॉयल ३D ब्राइडल नेल कॉउचर',
    'service.3d_bridal_desc': 'लग्नाच्या खास दिवसासाठी हाताने तयार केलेले ३D फुले, क्रिस्टल आणि २४K गोल्ड फॉइल.',
    'service.chrome_ombre_title': 'मिरर क्रोम आणि मखमली ओम्ब्रे आर्ट',
    'service.chrome_ombre_desc': 'अत्यधुनिक मेटॅलिक क्रोम चमक आणि ३D कॅट-आय इफेक्ट.',
    'service.gel_overlay_title': 'BIAB हार्ड जेल स्ट्रक्चर ओव्हरले',
    'service.gel_overlay_desc': 'नैसर्गिक नखे मजबूत करण्यासाठी आणि तुटण्यापासून वाचवण्यासाठी स्ट्रक्चर जेल.',
    'service.spa_detox_title': 'रोज आणि चॅम्पियन लक्झरी नेल स्पा',
    'service.spa_detox_desc': 'ऑरगॅनिक बोटॅनिकल एक्स्फोलिएशन, गरम तेलाची मसाज आणि क्युटिकल केअर.',

    // Courses Section
    'courses.badge': 'शासकीय मान्यताप्राप्त अकॅडमी',
    'courses.title': 'नेल आर्टमध्ये प्राविण्य मिळवा. उत्तम उत्पन्नाची कारकीर्द घडवा.',
    'courses.subtitle': '१००% प्रात्यक्षिक प्रशिक्षण, मोफत टूलकिट आणि १००% नोकरी सहाय्यासह सेलिब्रेटी नेल टेक्निशियनकडून शिका.',
    'courses.fee_label': 'कोर्स फी:',
    'courses.discount_badge': 'आज ₹१०,००० वाचवा',
    'courses.batch_label': 'पुढील बॅच सुरू:',
    'courses.seats_label': 'शिल्लक जागा:',
    'courses.kit_label': 'समाविष्ट मोफत टूलकिट:',
    'courses.enroll_now': 'आत्ताच प्रवेश घ्या',
    'courses.download_syllabus': 'अभ्यासक्रम डाउनलोड करा',

    // Course Titles & Descriptions
    'course.master_diploma_title': 'इंटरनॅशनल मास्टर नेल आर्टिस्ट डिप्लोमा',
    'course.master_diploma_badge': 'प्रमुख करिअर प्रोग्राम',
    'course.master_diploma_cert': 'शासकीय आणि आंतरराष्ट्रीय मान्यताप्राप्त डिप्लोमा',
    'course.master_diploma_desc': '३० दिवसांचा सखोल कार्यक्रम ज्यामध्ये जेल, ॲक्रेलिक, पॉलिजेल, ३D आर्ट आणि सलून व्यवस्थापन समाविष्ट आहे.',

    'course.adv_extensions_title': 'ॲडव्हान्स्ड एक्सटेंशन मास्टरक्लास',
    'course.adv_extensions_badge': 'ब्युटीशियन्ससाठी लोकप्रिय',
    'course.adv_extensions_cert': 'प्रमाणित एक्सटेंशन तज्ञ प्रमाणपत्र',
    'course.adv_extensions_desc': '१५ दिवसांचे केंद्रित मॉड्यूल ज्यामध्ये अपेक्स बिल्डिंग, सी-कर्व्ह आणि सुरक्षित रिमूव्हल शिकवले जाते.',

    'course.bridal_art_title': 'रॉयल ब्राइडल आणि ३D आर्ट स्पेशलायझेशन',
    'course.bridal_art_badge': 'प्रगत कलात्मक स्तर',
    'course.bridal_art_cert': 'ब्राइडल नेल मास्टर प्रमाणपत्र',
    'course.bridal_art_desc': '३D जेल फुले, एन्कॅप्स्युलेशन आणि ब्राइडल ट्रेंडवर ७ दिवसांची कार्यशाळा.',

    // Course Journey
    'journey.title': 'यशस्वी नेल आर्टिस्ट होण्याचे ५ टप्पे',
    'journey.step1_title': 'टप्पा १: प्रवेश आणि टूलकिट वितरण',
    'journey.step1_desc': 'UV/LED लॅम्प, ई-फाईल आणि ॲक्रेलिक साहित्यासह ₹१५,००० ची मोफत इंटरनॅशनल किट मिळवा.',
    'journey.step2_title': 'टप्पा २: १००% प्रात्यक्षिक लाईव्ह क्लासेस',
    'journey.step2_desc': 'मास्टर शिक्षकांच्या मार्गदर्शनाखाली दररोज प्रत्यक्ष सराव. तुम्ही प्रत्यक्ष मॉडेलवर काम करता.',
    'journey.step3_title': 'टप्पा ३: क्लायंट सिमुलेशन आणि स्पीड बिल्डिंग',
    'journey.step3_desc': 'सलूनची वेळ, ग्राहकांशी संवाद, स्वच्छता आणि एक्सटेंशन लिफ्टिंगचे निराकरण शिका.',
    'journey.step4_title': 'टप्पा ४: आंतरराष्ट्रीय परीक्षा आणि प्रमाणपत्र',
    'journey.step4_desc': 'प्रात्यक्षिक परीक्षा उत्तीर्ण व्हा आणि तुमचे शासकीय मान्यताप्राप्त व ISO प्रमाणित डिप्लोमा प्रमाणपत्र मिळवा.',
    'journey.step5_title': 'टप्पा ५: नोकरी प्लेसमेंट किंवा सलून सुरू करण्यास मदत',
    'journey.step5_desc': 'मोठ्या लक्झरी सलूनमध्ये मुलाखत मिळवा किंवा स्वतःचे सलून सुरू करण्यासाठी व्यक्तिगत मार्गदर्शन मिळवा.',

    // Master Trainers
    'trainers.title': 'सेलिब्रेटी मास्टर नेल ट्रेनर्सकडून शिका',
    'trainers.subtitle': 'आमच्या शिक्षकांना १०+ वर्षांचा जागतिक अनुभव आहे, ज्यांनी बॉलीवूड अभिनेत्री आणि मॉडेल्ससाठी काम केले आहे.',
    'trainer1.role': 'संस्थापक आणि मास्टर डायरेक्टर',
    'trainer1.spec': 'सेलिब्रेटी ब्राइडल तज्ञ आणि आंतरराष्ट्रीय ट्रेनर',
    'trainer1.quote': '"नेल आर्ट केवळ सौंदर्य नाही—हे अचूक कौशल्य आहे. आम्ही आमच्या विद्यार्थ्यांना यशस्वी आर्टिस्ट बनवतो."',
    'trainer2.role': 'वरिष्ठ अकॅडमी मुख्य शिक्षिका',
    'trainer2.spec': '३D आर्ट, पॉलिजेल आणि एअरब्रश तज्ञ',
    'trainer2.quote': '"प्रत्येक विद्यार्थ्याला एक्सटेंशन पूर्णपणे अचूक होईपर्यंत वैयक्तिक १-ऑन-१ लक्ष दिले जाते."',

    // Student Success
    'success.title': 'आमचे पदवीधर कुठे काम करतात',
    'success.subtitle': 'भारतात आणि परदेशात दरमहा ₹३५,००० ते ₹१,५०,०००+ कमावणाऱ्या ४,२००+ यशस्वी विद्यार्थ्यांमध्ये सामील व्हा.',

    // Franchise
    'franchise.title': 'लक्झरी नेल स्टाइल स्टुडिओचे मालक बना',
    'franchise.subtitle': 'भारतातील सर्वात वेगाने वाढणाऱ्या लक्झरी नेल सलून ब्रँडशी भागीदारी करा. उत्तम नफा आणि संपूर्ण मदत.',
    'franchise.stat_roi': '१२ - १५ महिने',
    'franchise.stat_roi_label': 'सरासरी परतावा कालावधी',
    'franchise.stat_margin': '४५%',
    'franchise.stat_margin_label': 'एकूण नफा मार्जिन',
    'franchise.cta': 'फ्रँचायझीसाठी अर्ज करा',
    'franchise.calc_title': 'तुमच्या फ्रँचायझी उत्पन्नाचा अंदाज लावा',
    'franchise.calc_sqft': 'स्टुडिओचे क्षेत्रफळ (चौ. फूट):',
    'franchise.calc_est_monthly': 'अंदाजे मासिक महसूल:',
    'franchise.calc_est_profit': 'अंदाजे मासिक निव्वळ नफा:',

    // Locations
    'locations.title': 'आमच्या लक्झरी स्टुडिओ व अकॅडमीला भेट द्या',
    'locations.mumbai_andheri': 'मुंबई - अंधेरी वेस्ट (लोखंडवाला)',
    'locations.mumbai_bandra': 'मुंबई - वांद्रे वेस्ट (टर्नर रोड)',
    'locations.guwahati_gsroad': 'गुवाहाटी - जी.एस. रोड (ख्रिश्चन बस्ती)',
    'locations.guwahati_zooroad': 'गुवाहाटी - झू रोड (कॉमर्स कॉलेज)',
    'locations.timing': 'आवडते ७ दिवस उघडे: सकाळी १०:०० ते रात्री ८:३०',

    // FAQ
    'faq.title': 'सतत विचारले जाणारे प्रश्न',
    'faq.cat_salon': 'सलून अपॉइंटमेंट',
    'faq.cat_academy': 'अकॅडमी आणि कोर्सेस',
    'faq.cat_franchise': 'फ्रँचायझी व्यवसाय',

    // Modals
    'modal.book_title': 'लक्झरी सलून अपॉइंटमेंट बुक करा',
    'modal.admission_title': 'नेल अकॅडमी बॅचमध्ये प्रवेश घ्या',
    'modal.franchise_title': 'फ्रँचायझी भागीदार अर्ज',
    'modal.brochure_title': 'अभ्यासक्रम आणि फी तपशील डाउनलोड करा',
    'modal.submit': 'व्हॉट्सॲपवर पुष्टी करा',
    'modal.success_msg': 'धन्यवाद! तुमची विनंती प्राप्त झाली आहे. व्हॉट्सॲपवर पाठवले जात आहे...',

    // Footer
    'footer.about': 'नेल स्टाइल स्टुडिओ अकॅडमी ही मुंबई आणि गुवाहाटीमधील भारतातील प्रमुख लक्झरी नेल सलून साखळी आणि शासकीय मान्यताप्राप्त अकॅडमी आहे.',
    'footer.rights': '© २०२६ नेल स्टाइल स्टुडिओ अकॅडमी. सर्व हक्क राखीव. ISO 9001:2015 प्रमाणित.'
  },

  as: {
    // Nav & Header
    'announcement.ticker': '🔥 গুৱাহাটী আৰু মুম্বাই মাষ্টাৰ বেচ: মাত্ৰ ৪ টা আসন বাকী! ৫,০০০ টকাৰ বিশেষ ৰেহাই পাওক',
    'nav.brand_tagline': 'লাক্সাৰী চেলুন আৰু চৰকাৰী স্বীকৃত একাডেমী',
    'nav.salon_services': 'চেলুন সেৱাসমূহ',
    'nav.academy_courses': 'নেল একাডেমী',
    'nav.real_gallery': 'গ্ৰাহকৰ ফলাফল',
    'nav.studio_tour': 'ষ্টুডিঅ’ টুৰ',
    'nav.trainers': 'মাষ্টাৰ প্ৰশিক্ষক',
    'nav.franchise': 'ফ্ৰেনচাইজী',
    'nav.reviews': 'মতামত',
    'nav.faq': 'প্ৰশ্নোত্তৰ',
    'nav.book_salon': 'বুক কৰক',
    'nav.join_academy': 'ভৰ্তি হওক',

    // Hero Section
    'hero.badge': 'চৰকাৰী স্বীকৃত আৰু ISO 9001:2015 প্ৰমাণিত',
    'hero.title_p1': 'অভিজাত নেল আৰ্টৰ শিল্প',
    'hero.title_p2': 'নেল এক্সটেনচন আৰু মাষ্টাৰ একাডেমী',
    'hero.subtitle': 'গুৱাহাটী আৰু মুম্বাইত ডিঅ’ৰ-মানসম্পন্ন লাক্সাৰী চেলুন সেৱাৰ অভিজ্ঞতা লওক বা এজন প্ৰমাণিত মাষ্টাৰ নেল আৰ্টিষ্ট হিচাপে সফলতাৰে কেৰিয়াৰ গঢ়ক।',
    'hero.cta_book': 'VIP চেলুন বুকিং কৰক',
    'hero.cta_academy': 'প্ৰমাণিত পাঠ্যক্ৰম চাওক',
    'hero.google_reviews': '৪.৯★ গুগ’ল ৰেটিং (২,৫০০+ সত্যপ্ৰতিয়মান মতামত)',
    'hero.stat_clients': '১৫,০০০+',
    'hero.stat_clients_label': 'সন্তুষ্ট লাক্সাৰী গ্ৰাহক',
    'hero.stat_graduates': '৪,২০০+',
    'hero.stat_graduates_label': 'প্ৰমাণিত স্নাতক',
    'hero.stat_placement': '৯৮%',
    'hero.stat_placement_label': 'চাকৰি সংস্থাপনৰ হাৰ',
    'hero.stat_studios': '৪',
    'hero.stat_studios_label': 'গুৱাহাটী আৰু মুম্বাইৰ লাক্সাৰী ষ্টুডিঅ’',

    // Trust Badges
    'trust.govt_authorised': 'চৰকাৰী স্কিল ইণ্ডিয়া অনুমোদিত',
    'trust.iso_certified': 'ISO 9001:2015 প্ৰমাণিত',
    'trust.practical_training': '১০০% প্ৰেক্টিকেল লাইভ প্ৰশিক্ষণ',
    'trust.placement_support': '১০০% চাকৰি আৰু চেলুন আৰম্ভণিৰ সহায়',
    'trust.toolkit_included': 'বিনামূলীয়া ১৫,০০০ টকাৰ প্ৰফেচনেল তুলকিট',

    // Authentic Showcase
    'showcase.title': 'প্ৰকৃত চেলুনৰ ফলাফল আৰু শিক্ষাৰ্থীৰ বিকাশ',
    'showcase.subtitle': 'কোনো ভুৱা ছবি নহয়। গুৱাহাটী আৰু মুম্বাইত আমাৰ প্ৰকৃত গ্ৰাহকৰ কাম, প্ৰেক্টিকেল ক্লাছ আৰু লাক্সাৰী ষ্টুডিঅ’ চাওক।',
    'showcase.tab_salon': 'গ্ৰাহকৰ ফলাফল',
    'showcase.tab_students': 'শিক্ষাৰ্থীৰ প্ৰেক্টিকেল',
    'showcase.tab_studios': 'ষ্টুডিঅ’ ইন্টেৰিয়ৰ',
    'showcase.tab_before_after': 'পূৰ্বে আৰু পাছত',
    'showcase.before': 'পূৰ্বে',
    'showcase.after': 'পাছত',

    // Services Section
    'services.badge': 'লাক্সাৰী চেলুন মেনু',
    'services.title': 'অনুপম সৌন্দৰ্য্য আৰু সূক্ষ্ম নেল আৰ্ট',
    'services.subtitle': 'প্ৰিমিয়াম ইমপৰ্টেড সামগ্ৰী ব্যৱহাৰ কৰি প্ৰস্তুত কৰা নেল এক্সটেনচন, ৩D ব্ৰাইডেল আৰ্ট আৰু নেল কেয়াৰ।',
    'services.cat_all': 'সকলো সেৱা',
    'services.cat_extensions': 'নেল এক্সটেনচন',
    'services.cat_art': 'নেল আৰ্ট',
    'services.cat_gel': 'জেল পলিচ',
    'services.cat_bridal': 'ব্ৰাইডেল স্পেচিয়েল',
    'services.cat_spa': 'নেল স্পা',
    'services.book_now': 'বুকিং কৰক',
    'services.popular': 'অধিক জনপ্ৰিয়',

    // Service Titles & Descriptions
    'service.gel_ext_title': 'চিগনেচাৰ জেল এক্সটেনচন',
    'service.gel_ext_desc': 'পাতল, দীৰ্ঘস্থায়ী জেল এক্সটেনচন গ্লাছৰ দৰে উজ্জ্বলতাৰ সৈতে আপোনাৰ নখৰ জোখত।',
    'service.acrylic_ext_title': 'হাই-ফেচন এক্ৰিলিক স্কাল্পটিং',
    'service.acrylic_ext_desc': 'সঠিক শেপ আৰু অধিক মজবুতিৰ বাবে হস্তনিৰ্মিত এক্ৰিলিক এক্সটেনচন।',
    'service.3d_bridal_title': 'ৰয়েল ৩D ব্ৰাইডেল নেল ক’চাৰ',
    'service.3d_bridal_desc': 'বিয়াৰ বিশেষ দিনটোৰ বাবে বিশেষভাৱে তৈয়াৰী ৩D ফুল, ক্ৰিষ্টেল আৰু ২৪K গ’ল্ড ফয়েল।',
    'service.chrome_ombre_title': 'মিৰৰ ক্ৰোম আৰু ভেলভেট অমব্ৰে আৰ্ট',
    'service.chrome_ombre_desc': 'আধুনিক মেটেলিক ক্ৰোম ৰূপ আৰু ৩D কেট-আই এফেক্ট।',
    'service.gel_overlay_title': 'BIAB হাৰ্ড জেল ষ্ট্ৰাকচাৰ ওভাৰলে’',
    'service.gel_overlay_desc': 'প্ৰাকৃতিক নখ মজবুত কৰিবলৈ আৰু ভাঙি যোৱাৰ পৰা ৰক্ষা কৰিবলৈ বিশেষ জেল।',
    'service.spa_detox_title': 'ৰোজ আৰু চেম্পেইন লাক্সাৰী নেল স্পা',
    'service.spa_detox_desc': 'অৰ্গেনিক এক্সফ’লিয়েচন, গৰম তেলৰ মাছাজ আৰু কিউটিকেল কেয়াৰ।',

    // Courses Section
    'courses.badge': 'চৰকাৰী স্বীকৃত একাডেমী',
    'courses.title': 'নেল আৰ্ট শিকক। এক উচ্চ উপাৰ্জনৰ কেৰিয়াৰ গঢ়ক।',
    'courses.subtitle': '১০০% প্ৰেক্টিকেল প্ৰশিক্ষণ, বিনামূলীয়া তুলকিট আৰু ১০০% চাকৰি সংস্থাপনৰ সহায়ৰ সৈতে অভিজ্ঞ প্ৰশিক্ষকৰ পৰা শিকক।',
    'courses.fee_label': 'কোৰ্চ ফী:',
    'courses.discount_badge': 'আজিয়েই ১০,০০০ টকা বচাওক',
    'courses.batch_label': 'পৰৱৰ্তী বেচ আৰম্ভণি:',
    'courses.seats_label': 'বাকী থকা আসন:',
    'courses.kit_label': 'অন্তৰ্ভুক্ত বিনামূলীয়া তুলকিট:',
    'courses.enroll_now': 'এতিয়াই ভৰ্তি হওক',
    'courses.download_syllabus': 'চিলেবাছ ডাউনলোড কৰক',

    // Course Titles & Descriptions
    'course.master_diploma_title': 'ইণ্টাৰনেচনেল মাষ্টাৰ নেল আৰ্টিষ্ট ডিপ্লমা',
    'course.master_diploma_badge': 'মুখ্য কেৰিয়াৰ প্ৰগ্ৰাম',
    'course.master_diploma_cert': 'চৰকাৰী আৰু আন্তঃৰাষ্ট্ৰীয় স্বীকৃত ডিপ্লমা',
    'course.master_diploma_desc': '৩০ দিনীয়া বিশেষ প্ৰগ্ৰাম য’ত জেল, এক্ৰিলিক, পলিগ’ল, ৩D আৰ্ট আৰু চেলুন মেনেজমেন্ট অন্তৰ্ভুক্ত।',

    'course.adv_extensions_title': 'এডভাঞ্চড এক্সটেনচন মাষ্টাৰক্লাছ',
    'course.adv_extensions_badge': 'বিউটিচিয়ানসকলৰ বাবে জনপ্ৰিয়',
    'course.adv_extensions_cert': 'প্ৰমাণিত এক্সটেনচন বিশেষজ্ঞ প্ৰমাণপত্ৰ',
    'course.adv_extensions_desc': '১৫ দিনীয়া বিশেষ মডিউল য’ত এপেক্স বিল্ডিং, ফৰ্ম ফিটিং আৰু চেফ ৰিমুভেল শিকোৱা হয়।',

    'course.bridal_art_title': 'ৰয়েল ব্ৰাইডেল আৰু ৩D আৰ্ট বিশেষজ্ঞতা',
    'course.bridal_art_badge': 'উন্নত সৃজনশীল স্তৰ',
    'course.bridal_art_cert': 'ব্ৰাইডেল নেল মাষ্টাৰ প্ৰমাণপত্ৰ',
    'course.bridal_art_desc': '৩D জেল ফুল, এনকেপচুলেচন আৰু ব্ৰাইডেল ট্ৰেণ্ডৰ ওপৰত ৭ দিনীয়া কৰ্মশালা।',

    // Course Journey
    'journey.title': 'সফল নেল আৰ্টিষ্ট হোৱাৰ ৫ টা পৰ্যায়',
    'journey.step1_title': 'পৰ্যায় ১: ভৰ্তি আৰু তুলকিট প্ৰদান',
    'journey.step1_desc': 'UV/LED লেম্প, ই-ফাইল আৰু এক্ৰিলিক সামগ্ৰীসহ ১৫,০০০ টকাৰ বিনামূলীয়া ইণ্টাৰনেচনেল কিট পাওক।',
    'journey.step2_title': 'পৰ্যায় ২: ১০০% প্ৰেক্টিকেল লাইভ ক্লাছ',
    'journey.step2_desc': 'অভিজ্ঞ প্ৰশিক্ষকৰ তত্ত্বাৱধানত দৈনিক প্ৰেক্টিকেল অনুশীলন। আপুনি লাইভ মডেলত কাম কৰিব পাৰিব।',
    'journey.step3_title': 'পৰ্যায় ৩: ক্লায়েন্ট চিমিউলেচন আৰু স্পীড বিল্ডিং',
    'journey.step3_desc': 'প্ৰকৃত চেলুনৰ সময়, গ্ৰাহকৰ সৈতে কথা-বাৰ্তা আৰু পৰিষ্কাৰ-পৰিচ্ছন্নতাৰ নিয়ম শিকক।',
    'journey.step4_title': 'পৰ্যায় ৪: আন্তঃৰাষ্ট্ৰীয় পৰীক্ষা আৰু প্ৰমাণপত্ৰ',
    'journey.step4_desc': 'প্ৰেক্টিকেল পৰীক্ষাত উত্তীৰ্ণ হওক আৰু আপোনাৰ চৰকাৰী স্বীকৃত ডিপ্লমা প্ৰমাণপত্ৰ পাওক।',
    'journey.step5_title': 'পৰ্যায় ৫: চাকৰি সংস্থাপন বা চেলুন আৰম্ভণিৰ সহায়',
    'journey.step5_desc': 'শীৰ্ষ চেলুনত চাকৰিৰ সুবিধা পাওক বা নিজৰ চেলুন আৰম্ভ কৰিবলৈ ব্যক্তিগত পৰামৰ্শ পাওক।',

    // Master Trainers
    'trainers.title': 'অভিজ্ঞ মাষ্টাৰ প্ৰশিক্ষকসকলৰ পৰা শিকক',
    'trainers.subtitle': 'আমাৰ প্ৰশিক্ষকসকলৰ ১০+ বছৰৰ অভিজ্ঞতা আছে, যিসকলে বহু প্ৰখ্যাত মডেল আৰু অভিনেত্ৰীৰ সৈতে কাম কৰিছে।',
    'trainer1.role': 'প্ৰতিষ্ঠাপক আৰু মাষ্টাৰ ডাইৰেক্টৰ',
    'trainer1.spec': 'ব্ৰাইডেল বিশেষজ্ঞ আৰু আন্তঃৰাষ্ট্ৰীয় প্ৰশিক্ষক',
    'trainer1.quote': '"নেল আৰ্ট কেৱল সৌন্দৰ্য্য নহয়—ই এক সূক্ষ্ম কলা। আমি শিক্ষাৰ্থীসকলক আত্মনিৰ্ভৰশীল কৰোঁ।"',
    'trainer2.role': 'জ্যেষ্ঠ একাডেমী প্ৰধান প্ৰশিক্ষক',
    'trainer2.spec': '৩D আৰ্ট আৰু এয়াৰব্ৰাছ বিশেষজ্ঞ',
    'trainer2.quote': '"প্ৰত্যেক শিক্ষাৰ্থীক ব্যক্তিগতভাৱে মনোযোগ দিয়া হয় যাতে তেওঁলোকৰ এক্সটেনচন সঠিক হয়।"',

    // Student Success
    'success.title': 'আমাৰ প্ৰাক্তন শিক্ষাৰ্থীসকল ক’ত কৰ্মৰত',
    'success.subtitle': 'ভাৰত আৰু বিদেশত মাহে ৩৫,০০০ ৰ পৰা ১,৫০,০০০+ টকা উপাৰ্জন কৰা ৪,২০০+ সফল শিক্ষাৰ্থীৰ সৈতে যোগ দিয়ক।',

    // Franchise
    'franchise.title': 'লাক্সাৰী নেল ষ্টাইল ষ্টুডিঅ’ৰ গৰাকী হওক',
    'franchise.subtitle': 'ভাৰতৰ দ্ৰুতগতিত বৃদ্ধি পোৱা নেল চেলুন ব্ৰেণ্ডৰ সৈতে অংশীদাৰ হওক। অধিক লাভ আৰু সম্পূৰ্ণ সহায়।',
    'franchise.stat_roi': '১২ - ১৫ মাহ',
    'franchise.stat_roi_label': 'গড় বিনিয়োগ ঘূৰাই পোৱাৰ সময়',
    'franchise.stat_margin': '৪৫%',
    'franchise.stat_margin_label': 'মোট লাভৰ শতাংশ',
    'franchise.cta': 'ফ্ৰেনচাইজীৰ বাবে আবেদন কৰক',
    'franchise.calc_title': 'আপোনাৰ ফ্ৰেনচাইজী উপাৰ্জন অনুমান কৰক',
    'franchise.calc_sqft': 'ষ্টুডিঅ’ৰ কালি (বৰ্গ ফুট):',
    'franchise.calc_est_monthly': 'আনুমানিক মাহেকীয়া উপাৰ্জন:',
    'franchise.calc_est_profit': 'আনুমানিক মাহেকীয়া নিট লাভ:',

    // Locations
    'locations.title': 'আমাৰ লাক্সাৰী ষ্টুডিঅ’ আৰু একাডেমীসমূহ',
    'locations.mumbai_andheri': 'মুম্বাই - আন্ধেৰী ৱেষ্ট (লোখণ্ডৱালা)',
    'locations.mumbai_bandra': 'মুম্বাই - বান্দ্ৰা ৱেষ্ট (টাৰ্নাৰ ৰোড)',
    'locations.guwahati_gsroad': 'গুৱাহাটী - জি.এছ. ৰোড (ক্ৰিশ্চিয়ান বস্তি)',
    'locations.guwahati_zooroad': 'গুৱাহাটী - জু ৰোড (কমাৰ্চ কলেজৰ সমীপত)',
    'locations.timing': 'সপ্তাহৰ ৭ দিনেই খোলা: ৰাতিপুৱা ১০:০০ - ৰাতি ৮:৩০',

    // FAQ
    'faq.title': 'সঘনাই সোধা প্ৰশ্নসমূহ',
    'faq.cat_salon': 'চেলুন বুকিং',
    'faq.cat_academy': 'একাডেমী আৰু পাঠ্যক্ৰম',
    'faq.cat_franchise': 'ফ্ৰেনচাইজী ব্যৱসায়',

    // Modals
    'modal.book_title': 'লাক্সাৰী চেলুন বুকিং কৰক',
    'modal.admission_title': 'নেল একাডেমীত ভৰ্তি হওক',
    'modal.franchise_title': 'ফ্ৰেনচাইজী পাৰ্টনাৰ আবেদন',
    'modal.brochure_title': 'পাঠ্যক্ৰম আৰু ফীৰ সবিশেষ ডাউনলোড কৰক',
    'modal.submit': 'হোৱাটছএপত নিশ্চিত কৰক',
    'modal.success_msg': 'ধন্যবাদ! আপোনাৰ অনুৰোধ গ্ৰহণ কৰা হৈছে। হোৱাটছএপলৈ প্ৰেৰণ কৰা হৈছে...',

    // Footer
    'footer.about': 'নেল ষ্টাইল ষ্টুডিঅ’ একাডেমী গুৱাহাটী আৰু মুম্বাইৰ ভাৰতৰ অন্যতম প্ৰধান লাক্সাৰী নেল চেলুন আৰু চৰকাৰী স্বীকৃত একাডেমী।',
    'footer.rights': '© ২০২৬ নেল ষ্টাইল ষ্টুডিঅ’ একাডেমী। সর্বস্বত্ব সংৰক্ষিত। ISO 9001:2015 প্ৰমাণিত।'
  }
};
