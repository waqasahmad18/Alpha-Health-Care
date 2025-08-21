// Shared doctor data structure
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  rating: number;
  reviews: number;
  fee: number;
  videoFee?: number;
  city: string;
  hospital: string;
  address?: string;
  nextAvailable: string;
  consultationTypes: string[];
  gender: string;
  languages: string[];
  image: string;
  about?: string;
  education?: string[];
  specializations?: string[];
  awards?: string[];
  waitTime?: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Ahmed Ali Khan',
    specialty: 'Cardiologist',
    qualifications: 'MBBS, FCPS (Cardiology), MD (Internal Medicine)',
    experience: '15 years',
    rating: 4.8,
    reviews: 245,
    fee: 2000,
    videoFee: 1500,
    city: 'Karachi',
    hospital: 'Aga Khan University Hospital',
    address: 'Stadium Road, Karachi, Pakistan',
    nextAvailable: 'Today 3:00 PM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Male',
    languages: ['English', 'Urdu', 'Hindi'],
    image: '/vecteezy_ai-generated-doctor-png-isolated-on-transparent-background_35681213.png',
    about: 'Dr. Ahmed Ali Khan is a renowned cardiologist with over 15 years of experience in treating heart conditions. He specializes in interventional cardiology and has performed over 1000 successful cardiac procedures. He is known for his patient-centered approach and excellent bedside manner.',
    education: [
      'MBBS - Aga Khan University (2008)',
      'FCPS (Cardiology) - College of Physicians and Surgeons Pakistan (2013)',
      'MD (Internal Medicine) - Harvard Medical School (2015)'
    ],
    specializations: [
      'Interventional Cardiology',
      'Cardiac Catheterization',
      'Angioplasty',
      'Pacemaker Implantation',
      'Heart Disease Prevention'
    ],
    awards: [
      'Best Cardiologist Award 2022 - Pakistan Medical Association',
      'Excellence in Patient Care 2021 - Aga Khan University',
      'Research Excellence Award 2020 - Cardiology Society of Pakistan'
    ],
    waitTime: '15 minutes'
  },
  {
    id: 2,
    name: 'Dr. Fatima Nasir',
    specialty: 'Gynecologist',
    qualifications: 'MBBS, FCPS (Gynecology), MD (Women\'s Health)',
    experience: '12 years',
    rating: 4.9,
    reviews: 189,
    fee: 1800,
    videoFee: 1400,
    city: 'Lahore',
    hospital: 'Shaukat Khanum Memorial Hospital',
    address: '7-A Block R-3 M.A. Johar Town, Lahore, Pakistan',
    nextAvailable: 'Tomorrow 10:00 AM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Female',
    languages: ['English', 'Urdu', 'Punjabi'],
    image: '/vecteezy_ai-generated-a-female-doctor-with-a-stethoscope-isolated-on_41409059-removebg-preview.png',
    about: 'Dr. Fatima Nasir is a highly skilled gynecologist with 12 years of experience in women\'s health. She specializes in high-risk pregnancies, minimally invasive surgeries, and reproductive health. She is known for her compassionate care and expertise in handling complex gynecological cases.',
    education: [
      'MBBS - King Edward Medical University (2011)',
      'FCPS (Gynecology) - College of Physicians and Surgeons Pakistan (2016)',
      'MD (Women\'s Health) - Johns Hopkins University (2018)'
    ],
    specializations: [
      'High-Risk Pregnancies',
      'Minimally Invasive Surgery',
      'Reproductive Endocrinology',
      'Gynecological Oncology',
      'Family Planning'
    ],
    awards: [
      'Best Gynecologist Award 2023 - Pakistan Medical Association',
      'Women\'s Health Excellence Award 2022 - Shaukat Khanum Hospital',
      'Research Excellence in Reproductive Health 2021'
    ],
    waitTime: '10 minutes'
  },
  {
    id: 3,
    name: 'Dr. Muhammad Hassan',
    specialty: 'Neurologist',
    qualifications: 'MBBS, FCPS (Neurology), PhD (Neuroscience)',
    experience: '18 years',
    rating: 4.7,
    reviews: 312,
    fee: 2500,
    videoFee: 2000,
    city: 'Islamabad',
    hospital: 'Pakistan Institute of Medical Sciences',
    address: 'Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad, Pakistan',
    nextAvailable: 'Today 5:30 PM',
    consultationTypes: ['In-Person'],
    gender: 'Male',
    languages: ['English', 'Urdu'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Muhammad Hassan is a leading neurologist with 18 years of experience in treating neurological disorders. He specializes in stroke treatment, epilepsy management, and neurodegenerative diseases. He has published numerous research papers and is actively involved in medical education.',
    education: [
      'MBBS - Allama Iqbal Medical College (2005)',
      'FCPS (Neurology) - College of Physicians and Surgeons Pakistan (2010)',
      'PhD (Neuroscience) - University of Cambridge (2013)'
    ],
    specializations: [
      'Stroke Treatment',
      'Epilepsy Management',
      'Movement Disorders',
      'Neurodegenerative Diseases',
      'Headache & Migraine'
    ],
    awards: [
      'Excellence in Neurology Award 2023 - Pakistan Neurological Society',
      'Best Research Paper Award 2022 - International Neurology Conference',
      'Teaching Excellence Award 2021 - PIMS'
    ],
    waitTime: '20 minutes'
  },
  {
    id: 4,
    name: 'Dr. Ayesha Malik',
    specialty: 'Dermatologist',
    qualifications: 'MBBS, FCPS (Dermatology), Diploma in Aesthetic Medicine',
    experience: '10 years',
    rating: 4.6,
    reviews: 156,
    fee: 1500,
    videoFee: 1200,
    city: 'Karachi',
    hospital: 'Ziauddin Hospital',
    address: 'Ziauddin Road, Nazimabad, Karachi, Pakistan',
    nextAvailable: 'Tomorrow 2:00 PM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Female',
    languages: ['English', 'Urdu'],
    image: '/vecteezy_ai-generated-a-female-doctor-with-a-stethoscope-isolated-on_41409047-removebg-preview.png',
    about: 'Dr. Ayesha Malik is a board-certified dermatologist with 10 years of experience in treating various skin conditions. She specializes in medical dermatology, cosmetic procedures, and dermatopathology. She is known for her expertise in treating acne, psoriasis, and skin cancer.',
    education: [
      'MBBS - Dow University of Health Sciences (2013)',
      'FCPS (Dermatology) - College of Physicians and Surgeons Pakistan (2018)',
      'Diploma in Aesthetic Medicine - American Academy of Aesthetic Medicine (2020)'
    ],
    specializations: [
      'Medical Dermatology',
      'Cosmetic Dermatology',
      'Dermatopathology',
      'Laser Treatments',
      'Anti-Aging Treatments'
    ],
    awards: [
      'Best Dermatologist Award 2023 - Karachi Medical Association',
      'Excellence in Cosmetic Dermatology 2022',
      'Patient Choice Award 2021 - Ziauddin Hospital'
    ],
    waitTime: '12 minutes'
  },
  {
    id: 5,
    name: 'Dr. Ali Raza',
    specialty: 'Orthopedic Surgeon',
    qualifications: 'MBBS, FCPS (Orthopedics), Fellowship in Joint Replacement',
    experience: '14 years',
    rating: 4.5,
    reviews: 198,
    fee: 2200,
    videoFee: 1800,
    city: 'Lahore',
    hospital: 'Mayo Hospital',
    address: 'King Edward Medical University, Lahore, Pakistan',
    nextAvailable: 'Today 4:00 PM',
    consultationTypes: ['In-Person'],
    gender: 'Male',
    languages: ['English', 'Urdu', 'Punjabi'],
    image: '/images (16).jpeg',
    about: 'Dr. Ali Raza is an experienced orthopedic surgeon with 14 years of practice in treating bone and joint disorders. He specializes in joint replacement surgeries, sports injuries, and spine surgery. He has performed over 2000 successful orthopedic procedures.',
    education: [
      'MBBS - King Edward Medical University (2009)',
      'FCPS (Orthopedics) - College of Physicians and Surgeons Pakistan (2014)',
      'Fellowship in Joint Replacement - Mayo Clinic, USA (2016)'
    ],
    specializations: [
      'Joint Replacement Surgery',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Surgery',
      'Arthroscopic Surgery'
    ],
    awards: [
      'Best Orthopedic Surgeon Award 2023 - Punjab Medical Association',
      'Excellence in Joint Replacement 2022 - Mayo Hospital',
      'Innovation in Surgery Award 2021'
    ],
    waitTime: '18 minutes'
  },
  {
    id: 6,
    name: 'Dr. Zara Khan',
    specialty: 'Pediatrician',
    qualifications: 'MBBS, FCPS (Pediatrics), Diploma in Child Development',
    experience: '8 years',
    rating: 4.8,
    reviews: 134,
    fee: 1600,
    videoFee: 1300,
    city: 'Islamabad',
    hospital: 'Children Hospital',
    address: 'Pakistan Institute of Medical Sciences, Islamabad, Pakistan',
    nextAvailable: 'Tomorrow 11:00 AM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Female',
    languages: ['English', 'Urdu'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Zara Khan is a dedicated pediatrician with 8 years of experience in child healthcare. She specializes in newborn care, childhood immunizations, and developmental pediatrics. She is known for her gentle approach with children and excellent communication with parents.',
    education: [
      'MBBS - Rawalpindi Medical University (2015)',
      'FCPS (Pediatrics) - College of Physicians and Surgeons Pakistan (2020)',
      'Diploma in Child Development - Royal College of Pediatrics, UK (2022)'
    ],
    specializations: [
      'Newborn Care',
      'Childhood Immunizations',
      'Developmental Pediatrics',
      'Pediatric Nutrition',
      'Behavioral Pediatrics'
    ],
    awards: [
      'Best Pediatrician Award 2023 - Children Hospital Islamabad',
      'Excellence in Child Care 2022 - Pakistan Pediatric Association',
      'Compassionate Care Award 2021'
    ],
    waitTime: '8 minutes'
  },
  {
    id: 7,
    name: 'Dr. Tariq Ahmed',
    specialty: 'Urologist',
    qualifications: 'MBBS, FCPS (Urology)',
    experience: '16 years',
    rating: 4.7,
    reviews: 178,
    fee: 2300,
    videoFee: 1900,
    city: 'Karachi',
    hospital: 'Aga Khan University Hospital',
    address: 'Stadium Road, Karachi, Pakistan',
    nextAvailable: 'Tomorrow 9:00 AM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Male',
    languages: ['English', 'Urdu'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Tariq Ahmed is a leading urologist with 16 years of experience in treating urological conditions. He specializes in kidney stone treatment, prostate surgery, and minimally invasive procedures.',
    education: [
      'MBBS - Dow University of Health Sciences (2007)',
      'FCPS (Urology) - College of Physicians and Surgeons Pakistan (2012)',
      'Fellowship in Endourology - Singapore General Hospital (2014)'
    ],
    specializations: [
      'Kidney Stone Treatment',
      'Prostate Surgery',
      'Minimally Invasive Urology',
      'Bladder Cancer Treatment',
      'Male Infertility'
    ],
    awards: [
      'Best Urologist Award 2023 - Pakistan Medical Association',
      'Excellence in Minimally Invasive Surgery 2022'
    ],
    waitTime: '12 minutes'
  },
  {
    id: 8,
    name: 'Dr. Saima Qureshi',
    specialty: 'Psychiatrist',
    qualifications: 'MBBS, FCPS (Psychiatry)',
    experience: '11 years',
    rating: 4.8,
    reviews: 267,
    fee: 2000,
    videoFee: 1600,
    city: 'Lahore',
    hospital: 'Services Hospital',
    address: 'Ghaus-e-Azam Road, Lahore, Pakistan',
    nextAvailable: 'Today 4:00 PM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Female',
    languages: ['English', 'Urdu', 'Punjabi'],
    image: '/Saima Gilani.jpg',
    about: 'Dr. Saima Qureshi is a compassionate psychiatrist with 11 years of experience in mental health. She specializes in anxiety disorders, depression, and cognitive behavioral therapy.',
    education: [
      'MBBS - King Edward Medical University (2012)',
      'FCPS (Psychiatry) - College of Physicians and Surgeons Pakistan (2017)',
      'Diploma in CBT - Beck Institute, USA (2019)'
    ],
    specializations: [
      'Anxiety Disorders',
      'Depression Treatment',
      'Cognitive Behavioral Therapy',
      'Bipolar Disorder',
      'PTSD Treatment'
    ],
    awards: [
      'Mental Health Advocate Award 2023',
      'Excellence in Patient Care 2022 - Services Hospital'
    ],
    waitTime: '15 minutes'
  },
  {
    id: 9,
    name: 'Dr. Imran Shah',
    specialty: 'Gastroenterologist',
    qualifications: 'MBBS, FCPS (Gastroenterology)',
    experience: '13 years',
    rating: 4.6,
    reviews: 145,
    fee: 2200,
    videoFee: 1800,
    city: 'Islamabad',
    hospital: 'Shifa International Hospital',
    address: 'H-8/4, Islamabad, Pakistan',
    nextAvailable: 'Tomorrow 11:30 AM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Male',
    languages: ['English', 'Urdu'],
    image: '/Dr.-Imran-Sikandar.jpg',
    about: 'Dr. Imran Shah is an experienced gastroenterologist specializing in digestive disorders, liver diseases, and endoscopic procedures with 13 years of clinical experience.',
    education: [
      'MBBS - Rawalpindi Medical University (2010)',
      'FCPS (Gastroenterology) - College of Physicians and Surgeons Pakistan (2015)',
      'Fellowship in Hepatology - King\'s College London (2017)'
    ],
    specializations: [
      'Liver Diseases',
      'Inflammatory Bowel Disease',
      'Endoscopic Procedures',
      'Pancreatic Disorders',
      'GI Cancer Screening'
    ],
    awards: [
      'Best Gastroenterologist 2023 - Islamabad Medical Association',
      'Excellence in Endoscopy 2022'
    ],
    waitTime: '18 minutes'
  },
  {
    id: 10,
    name: 'Dr. Nadia Malik',
    specialty: 'Rheumatologist',
    qualifications: 'MBBS, FCPS (Rheumatology)',
    experience: '9 years',
    rating: 4.5,
    reviews: 98,
    fee: 1900,
    videoFee: 1500,
    city: 'Karachi',
    hospital: 'Liaquat National Hospital',
    address: 'Stadium Road, Karachi, Pakistan',
    nextAvailable: 'Today 6:00 PM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Female',
    languages: ['English', 'Urdu'],
    image: '/vecteezy_ai-generated-a-female-doctor-with-a-stethoscope-isolated-on_41409059-removebg-preview.png',
    about: 'Dr. Nadia Malik is a skilled rheumatologist with expertise in autoimmune diseases, arthritis, and joint disorders. She focuses on providing comprehensive care for chronic conditions.',
    education: [
      'MBBS - Aga Khan University (2014)',
      'FCPS (Rheumatology) - College of Physicians and Surgeons Pakistan (2019)',
      'Fellowship in Autoimmune Diseases - Johns Hopkins (2021)'
    ],
    specializations: [
      'Rheumatoid Arthritis',
      'Lupus Treatment',
      'Osteoarthritis',
      'Autoimmune Diseases',
      'Joint Injections'
    ],
    awards: [
      'Young Rheumatologist Award 2023',
      'Patient Care Excellence 2022 - Liaquat National Hospital'
    ],
    waitTime: '10 minutes'
  },
  {
    id: 11,
    name: 'Dr. Tania Shaikh',
    specialty: 'Cardiologist',
    qualifications: 'MBBS, FCPS (Cardiology), MD (Interventional Cardiology)',
    experience: '14 years',
    rating: 4.8,
    reviews: 156,
    fee: 2200,
    videoFee: 1800,
    city: 'Karachi',
    hospital: 'Liaquat National Hospital',
    address: 'Stadium Road, Karachi, Pakistan',
    nextAvailable: 'Today 4:00 PM',
    consultationTypes: ['In-Person', 'Video'],
    gender: 'Female',
    languages: ['English', 'Urdu', 'Sindhi'],
    image: '/Dr.Tania-Shaikh.jpg',
    about: 'Dr. Tania Shaikh is a renowned cardiologist with 14 years of experience specializing in interventional cardiology and heart disease prevention. She has expertise in cardiac catheterization, angioplasty, and non-invasive cardiac procedures. Dr. Shaikh is known for her patient-centered approach and excellence in treating complex cardiac conditions.',
    education: [
      'MBBS - Dow University of Health Sciences (2009)',
      'FCPS (Cardiology) - College of Physicians and Surgeons Pakistan (2014)',
      'MD (Interventional Cardiology) - Harvard Medical School (2017)'
    ],
    specializations: [
      'Interventional Cardiology',
      'Cardiac Catheterization',
      'Angioplasty',
      'Heart Disease Prevention',
      'Non-invasive Cardiology',
      'Hypertension Management'
    ],
    awards: [
      'Best Cardiologist Award 2023 - Liaquat National Hospital',
      'Excellence in Patient Care 2022 - Pakistan Cardiac Society',
      'Research Excellence Award 2021 - International Cardiology Conference'
    ],
    waitTime: '15 minutes'
  }
];

// Helper function to get doctor by ID
export function getDoctorById(id: number): Doctor | undefined {
  return doctors.find(doctor => doctor.id === id);
}

// Helper function to get all doctors
export function getAllDoctors(): Doctor[] {
  return doctors;
}