// Medicine data structure
export interface Medicine {
  id: number;
  name: string;
  genericName?: string;
  brand: string;
  category: string;
  subcategory?: string;
  price: number;
  discountedPrice?: number;
  discount?: number;
  description: string;
  composition: string;
  dosage: string;
  packSize: string;
  manufacturer: string;
  prescriptionRequired: boolean;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviews: number;
  image: string;
  uses: string[];
  sideEffects: string[];
  directions: string;
  warnings: string[];
  storage: string;
  expiryMonths: number;
  isPopular: boolean;
  tags: string[];
  waitTime?: string;
}

export interface MedicineCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  medicineCount: number;
}

export const medicineCategories: MedicineCategory[] = [
  {
    id: 'pain-relief',
    name: 'Pain Relief',
    description: 'Medicines for pain management and inflammation',
    image: 'https://cdn-icons-png.flaticon.com/128/3649/3649491.png',
    medicineCount: 8
  },
  {
    id: 'antibiotics',
    name: 'Antibiotics',
    description: 'Prescription antibiotics for infections',
    image: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
    medicineCount: 10
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Supplements',
    description: 'Health supplements and vitamins',
    image: 'https://cdn-icons-png.flaticon.com/128/3588/3588435.png',
    medicineCount: 12
  },
  {
    id: 'diabetes',
    name: 'Diabetes Care',
    description: 'Medicines and supplies for diabetes management',
    image: 'https://cdn-icons-png.flaticon.com/128/2966/2966334.png',
    medicineCount: 6
  },
  {
    id: 'heart',
    name: 'Heart & Blood Pressure',
    description: 'Cardiovascular medications',
    image: 'https://cdn-icons-png.flaticon.com/128/1076/1076758.png',
    medicineCount: 8
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    description: 'Medicines for respiratory conditions',
    image: 'https://cdn-icons-png.flaticon.com/128/2966/2966370.png',
    medicineCount: 7
  },
  {
    id: 'digestive',
    name: 'Digestive Health',
    description: 'Medicines for digestive issues',
    image: 'https://cdn-icons-png.flaticon.com/128/2966/2966365.png',
    medicineCount: 9
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    description: 'Topical medicines and skin treatments',
    image: 'https://cdn-icons-png.flaticon.com/128/3209/3209073.png',
    medicineCount: 5
  }
];

export const medicines: Medicine[] = [
  {
    id: 1,
    name: 'Panadol Extra',
    genericName: 'Paracetamol + Caffeine',
    brand: 'GSK',
    category: 'pain-relief',
    subcategory: 'Headache & Fever',
    price: 85,
    discountedPrice: 75,
    discount: 12,
    description: 'Fast-acting pain relief for headaches, body aches, and fever',
    composition: 'Paracetamol 500mg + Caffeine 65mg',
    dosage: '1-2 tablets every 4-6 hours',
    packSize: '20 tablets',
    manufacturer: 'GlaxoSmithKline Pakistan',
    prescriptionRequired: false,
    inStock: true,
    stockQuantity: 150,
    rating: 4.6,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    uses: ['Headache', 'Fever', 'Body aches', 'Dental pain', 'Period pain'],
    sideEffects: ['Nausea', 'Stomach upset', 'Allergic reactions (rare)'],
    directions: 'Take with water. Do not exceed 8 tablets in 24 hours.',
    warnings: ['Do not use with other paracetamol products', 'Consult doctor if pregnant'],
    storage: 'Store below 30°C in dry place',
    expiryMonths: 36,
    isPopular: true,
    tags: ['fast-acting', 'fever', 'headache', 'otc']
  },
  {
    id: 2,
    name: 'Augmentin 625mg',
    genericName: 'Amoxicillin + Clavulanic Acid',
    brand: 'GSK',
    category: 'antibiotics',
    subcategory: 'Broad Spectrum',
    price: 450,
    description: 'Broad spectrum antibiotic for bacterial infections',
    composition: 'Amoxicillin 500mg + Clavulanic Acid 125mg',
    dosage: '1 tablet twice daily',
    packSize: '14 tablets',
    manufacturer: 'GlaxoSmithKline Pakistan',
    prescriptionRequired: true,
    inStock: true,
    stockQuantity: 75,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    uses: ['Respiratory tract infections', 'Urinary tract infections', 'Skin infections', 'Dental infections'],
    sideEffects: ['Diarrhea', 'Nausea', 'Skin rash', 'Stomach upset'],
    directions: 'Take with food. Complete full course as prescribed.',
    warnings: ['Prescription required', 'Complete full course', 'May cause diarrhea'],
    storage: 'Store in cool, dry place below 25°C',
    expiryMonths: 24,
    isPopular: true,
    tags: ['prescription', 'antibiotic', 'infection']
  },
  {
    id: 3,
    name: 'Centrum Multivitamin',
    genericName: 'Multivitamin & Mineral',
    brand: 'Pfizer',
    category: 'vitamins',
    subcategory: 'Daily Supplements',
    price: 1200,
    discountedPrice: 1050,
    discount: 13,
    description: 'Complete multivitamin and mineral supplement for daily health',
    composition: 'Vitamins A, C, D, E, B-complex, Iron, Calcium, Zinc',
    dosage: '1 tablet daily with breakfast',
    packSize: '30 tablets',
    manufacturer: 'Pfizer Pakistan',
    prescriptionRequired: false,
    inStock: true,
    stockQuantity: 200,
    rating: 4.5,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop&crop=center',
    uses: ['Daily nutrition', 'Energy support', 'Immune system', 'Bone health'],
    sideEffects: ['Stomach upset if taken empty stomach', 'Iron may cause constipation'],
    directions: 'Take with breakfast and plenty of water.',
    warnings: ['Keep away from children', 'Do not exceed recommended dose'],
    storage: 'Store in cool, dry place',
    expiryMonths: 36,
    isPopular: true,
    tags: ['vitamin', 'daily', 'nutrition', 'supplement']
  },
  {
    id: 4,
    name: 'Glucophage 500mg',
    genericName: 'Metformin HCl',
    brand: 'Merck',
    category: 'diabetes',
    subcategory: 'Blood Sugar Control',
    price: 280,
    description: 'First-line treatment for type 2 diabetes',
    composition: 'Metformin Hydrochloride 500mg',
    dosage: '1-2 tablets twice daily with meals',
    packSize: '50 tablets',
    manufacturer: 'Merck Pakistan',
    prescriptionRequired: true,
    inStock: true,
    stockQuantity: 120,
    rating: 4.7,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    uses: ['Type 2 diabetes', 'Blood sugar control', 'Insulin resistance'],
    sideEffects: ['Nausea', 'Diarrhea', 'Stomach upset', 'Metallic taste'],
    directions: 'Take with meals to reduce stomach upset.',
    warnings: ['Prescription required', 'Regular blood sugar monitoring needed'],
    storage: 'Store below 30°C',
    expiryMonths: 36,
    isPopular: true,
    tags: ['diabetes', 'prescription', 'blood-sugar']
  },
  {
    id: 5,
    name: 'Concor 5mg',
    genericName: 'Bisoprolol',
    brand: 'Merck',
    category: 'heart',
    subcategory: 'Blood Pressure',
    price: 520,
    description: 'Beta-blocker for high blood pressure and heart conditions',
    composition: 'Bisoprolol Fumarate 5mg',
    dosage: '1 tablet once daily',
    packSize: '30 tablets',
    manufacturer: 'Merck Pakistan',
    prescriptionRequired: true,
    inStock: true,
    stockQuantity: 85,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop&crop=center',
    uses: ['High blood pressure', 'Heart failure', 'Angina'],
    sideEffects: ['Fatigue', 'Dizziness', 'Cold hands/feet', 'Slow heart rate'],
    directions: 'Take at same time each day, preferably morning.',
    warnings: ['Do not stop suddenly', 'Regular blood pressure monitoring'],
    storage: 'Store below 25°C',
    expiryMonths: 36,
    isPopular: false,
    tags: ['heart', 'blood-pressure', 'prescription']
  },
  {
    id: 6,
    name: 'Ventolin Inhaler',
    genericName: 'Salbutamol',
    brand: 'GSK',
    category: 'respiratory',
    subcategory: 'Asthma Relief',
    price: 850,
    description: 'Fast-acting bronchodilator for asthma and breathing problems',
    composition: 'Salbutamol 100mcg per actuation',
    dosage: '1-2 puffs as needed',
    packSize: '200 doses',
    manufacturer: 'GlaxoSmithKline Pakistan',
    prescriptionRequired: true,
    inStock: true,
    stockQuantity: 45,
    rating: 4.9,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=400&fit=crop&crop=center',
    uses: ['Asthma attacks', 'Breathing difficulties', 'Exercise-induced asthma'],
    sideEffects: ['Trembling', 'Increased heart rate', 'Headache'],
    directions: 'Shake well before use. Rinse mouth after use.',
    warnings: ['Do not exceed 8 puffs in 24 hours', 'Seek medical help if not effective'],
    storage: 'Store below 30°C, protect from frost',
    expiryMonths: 24,
    isPopular: true,
    tags: ['inhaler', 'asthma', 'breathing', 'emergency']
  },
  {
    id: 7,
    name: 'Motilium 10mg',
    genericName: 'Domperidone',
    brand: 'Janssen',
    category: 'digestive',
    subcategory: 'Nausea & Vomiting',
    price: 180,
    description: 'Anti-nausea medication for digestive issues',
    composition: 'Domperidone 10mg',
    dosage: '1 tablet 3 times daily before meals',
    packSize: '30 tablets',
    manufacturer: 'Janssen Pakistan',
    prescriptionRequired: false,
    inStock: true,
    stockQuantity: 95,
    rating: 4.4,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop&crop=center',
    uses: ['Nausea', 'Vomiting', 'Stomach discomfort', 'Bloating'],
    sideEffects: ['Dry mouth', 'Headache', 'Diarrhea (rare)'],
    directions: 'Take 15-30 minutes before meals.',
    warnings: ['Do not use for more than 7 days without consulting doctor'],
    storage: 'Store below 30°C',
    expiryMonths: 36,
    isPopular: false,
    tags: ['nausea', 'digestive', 'stomach']
  },
  {
    id: 8,
    name: 'Betnovate Cream',
    genericName: 'Betamethasone',
    brand: 'GSK',
    category: 'skin-care',
    subcategory: 'Anti-inflammatory',
    price: 320,
    description: 'Topical corticosteroid for skin inflammation',
    composition: 'Betamethasone Valerate 0.1%',
    dosage: 'Apply thin layer 2-3 times daily',
    packSize: '30g tube',
    manufacturer: 'GlaxoSmithKline Pakistan',
    prescriptionRequired: false,
    inStock: true,
    stockQuantity: 110,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
    uses: ['Eczema', 'Dermatitis', 'Skin inflammation', 'Allergic reactions'],
    sideEffects: ['Skin thinning (with prolonged use)', 'Burning sensation'],
    directions: 'Apply to affected area only. Wash hands after use.',
    warnings: ['Do not use on face for more than 5 days', 'Avoid contact with eyes'],
    storage: 'Store below 25°C',
    expiryMonths: 36,
    isPopular: false,
    tags: ['cream', 'skin', 'inflammation', 'topical']
  },
  // Additional Pain Relief Medicines
  {
    id: 9,
    name: 'Brufen 400mg',
    genericName: 'Ibuprofen',
    brand: 'Abbott',
    category: 'pain-relief',
    subcategory: 'Anti-inflammatory',
    price: 120,
    discountedPrice: 105,
    discount: 13,
    description: 'Non-steroidal anti-inflammatory drug for pain and inflammation',
    composition: 'Ibuprofen 400mg',
    dosage: '1 tablet 3 times daily after meals',
    packSize: '20 tablets',
    manufacturer: 'Abbott Pakistan',
    prescriptionRequired: false,
    inStock: true,
    stockQuantity: 200,
    rating: 4.5,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    uses: ['Pain relief', 'Inflammation', 'Fever', 'Headache', 'Muscle pain'],
    sideEffects: ['Stomach upset', 'Nausea', 'Dizziness'],
    directions: 'Take with food to avoid stomach upset.',
    warnings: ['Do not exceed recommended dose', 'Consult doctor if pregnant'],
    storage: 'Store below 30°C',
    expiryMonths: 36,
    isPopular: true,
    tags: ['pain-relief', 'anti-inflammatory', 'fever'],
    waitTime: '10 minutes'
  },
  {
    id: 10,
    name: 'Aspirin 300mg',
    genericName: 'Acetylsalicylic Acid',
    brand: 'Bayer',
    category: 'pain-relief',
    subcategory: 'Blood Thinner',
    price: 95,
    description: 'Low-dose aspirin for pain relief and blood thinning',
    composition: 'Acetylsalicylic Acid 300mg',
    dosage: '1 tablet daily with food',
    packSize: '30 tablets',
    manufacturer: 'Bayer Pakistan',
    prescriptionRequired: false,
    inStock: true,
    stockQuantity: 150,
    rating: 4.3,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    uses: ['Pain relief', 'Blood clot prevention', 'Heart protection', 'Stroke prevention'],
    sideEffects: ['Stomach irritation', 'Bleeding risk', 'Nausea'],
    directions: 'Take with food or milk to reduce stomach irritation.',
    warnings: ['Not for children under 16', 'Consult doctor before use'],
    storage: 'Store in cool, dry place',
    expiryMonths: 48,
    isPopular: false,
    tags: ['pain-relief', 'blood-thinner', 'heart'],
    waitTime: '5 minutes'
  },
  // Additional Antibiotics
  {
    id: 11,
    name: 'Azithromycin 500mg',
    genericName: 'Azithromycin',
    brand: 'Pfizer',
    category: 'antibiotics',
    subcategory: 'Macrolide',
    price: 380,
    description: 'Broad-spectrum antibiotic for bacterial infections',
    composition: 'Azithromycin 500mg',
    dosage: '1 tablet once daily for 3 days',
    packSize: '3 tablets',
    manufacturer: 'Pfizer Pakistan',
    prescriptionRequired: true,
    inStock: true,
    stockQuantity: 80,
    rating: 4.7,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop&crop=center',
    uses: ['Respiratory infections', 'Skin infections', 'Ear infections', 'STDs'],
    sideEffects: ['Nausea', 'Diarrhea', 'Abdominal pain'],
    directions: 'Take on empty stomach, 1 hour before or 2 hours after meals.',
    warnings: ['Complete full course', 'May cause liver problems'],
    storage: 'Store below 25°C',
    expiryMonths: 24,
    isPopular: true,
    tags: ['antibiotic', 'prescription', 'broad-spectrum'],
    waitTime: '15 minutes'
  },
  {
    id: 12,
    name: 'Ciprofloxacin 500mg',
    genericName: 'Ciprofloxacin',
    brand: 'Bayer',
    category: 'antibiotics',
    subcategory: 'Fluoroquinolone',
    price: 420,
    description: 'Fluoroquinolone antibiotic for serious bacterial infections',
    composition: 'Ciprofloxacin HCl 500mg',
    dosage: '1 tablet twice daily',
    packSize: '10 tablets',
    manufacturer: 'Bayer Pakistan',
    prescriptionRequired: true,
    inStock: true,
    stockQuantity: 65,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop&crop=center',
    uses: ['UTI', 'Respiratory infections', 'Bone infections', 'Joint infections'],
    sideEffects: ['Nausea', 'Diarrhea', 'Dizziness', 'Headache'],
    directions: 'Take with plenty of water. Avoid dairy products.',
    warnings: ['May cause tendon problems', 'Avoid sunlight exposure'],
    storage: 'Store below 30°C',
    expiryMonths: 36,
    isPopular: false,
    tags: ['antibiotic', 'prescription', 'uti'],
    waitTime: '20 minutes'
  }
];

// Helper functions
export function getAllMedicines(): Medicine[] {
  return medicines;
}

export function getMedicineById(id: number): Medicine | undefined {
  return medicines.find(medicine => medicine.id === id);
}

export function getMedicinesByCategory(category: string): Medicine[] {
  return medicines.filter(medicine => medicine.category === category);
}

export function getPopularMedicines(): Medicine[] {
  return medicines.filter(medicine => medicine.isPopular);
}

export function searchMedicines(query: string): Medicine[] {
  const lowercaseQuery = query.toLowerCase();
  return medicines.filter(medicine => 
    medicine.name.toLowerCase().includes(lowercaseQuery) ||
    medicine.genericName?.toLowerCase().includes(lowercaseQuery) ||
    medicine.brand.toLowerCase().includes(lowercaseQuery) ||
    medicine.uses.some(use => use.toLowerCase().includes(lowercaseQuery)) ||
    medicine.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}