import { getAllDoctors } from '@/data/doctors';

export interface SearchSuggestion {
  value: string;
  type: 'doctor' | 'specialty' | 'hospital';
  label: string;
}

export function getSearchSuggestions(query: string): SearchSuggestion[] {
  if (!query || query.length < 1) return [];
  
  try {
    const doctors = getAllDoctors();
    const suggestions: SearchSuggestion[] = [];
    const lowerQuery = query.toLowerCase();
    
    console.log('Available doctors:', doctors.length);
  
  // Get unique specialties
  const specialties = Array.from(new Set(doctors.map(d => d.specialty.toLowerCase())));
  
  // Get unique hospitals
  const hospitals = Array.from(new Set(doctors.map(d => d.hospital.toLowerCase())));
  
  // Add doctor name suggestions
  doctors.forEach(doctor => {
    if (doctor.name.toLowerCase().includes(lowerQuery)) {
      suggestions.push({
        value: doctor.name,
        type: 'doctor',
        label: `Dr. ${doctor.name} - ${doctor.specialty}`
      });
    }
  });
  
  // Add specialty suggestions
  specialties.forEach(specialty => {
    if (specialty.includes(lowerQuery)) {
      const count = doctors.filter(d => d.specialty.toLowerCase() === specialty).length;
      suggestions.push({
        value: specialty,
        type: 'specialty',
        label: `${specialty.charAt(0).toUpperCase() + specialty.slice(1)} (${count} doctors)`
      });
    }
  });
  
  // Add hospital suggestions
  hospitals.forEach(hospital => {
    if (hospital.includes(lowerQuery)) {
      const count = doctors.filter(d => d.hospital.toLowerCase() === hospital).length;
      suggestions.push({
        value: hospital,
        type: 'hospital',
        label: `${hospital.charAt(0).toUpperCase() + hospital.slice(1)} (${count} doctors)`
      });
    }
  });
  
    // Limit to 8 suggestions and sort by type priority
    return suggestions
      .slice(0, 8)
      .sort((a, b) => {
        const typeOrder = { doctor: 1, specialty: 2, hospital: 3 };
        return typeOrder[a.type] - typeOrder[b.type];
      });
  } catch (error) {
    console.error('Error getting search suggestions:', error);
    return [];
  }
}

export function getCitySuggestions(): string[] {
  const doctors = getAllDoctors();
  return Array.from(new Set(doctors.map(d => d.city)));
}