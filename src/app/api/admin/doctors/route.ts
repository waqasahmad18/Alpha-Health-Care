import { NextRequest, NextResponse } from 'next/server';
import { doctors } from '@/data/doctors';

// Mutable list of doctors for admin management - start with all doctors from data
let adminDoctors = doctors.map((doctor, index) => ({
  _id: (index + 1).toString(),
  name: doctor.name,
  specialty: doctor.specialty,
  hospital: doctor.hospital,
  city: doctor.city,
  rating: doctor.rating,
  image: doctor.image,
  isActive: true,
  experience: doctor.experience,
  consultationFee: doctor.fee,
  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  availableTime: '9:00 AM - 5:00 PM'
}));

// Function to convert admin doctor format to main doctor format
function convertToMainDoctorFormat(adminDoctor: any) {
  return {
    id: parseInt(adminDoctor._id),
    name: adminDoctor.name,
    specialty: adminDoctor.specialty,
    qualifications: adminDoctor.qualifications || 'MBBS, FCPS',
    experience: adminDoctor.experience,
    rating: adminDoctor.rating,
    reviews: Math.floor(Math.random() * 200) + 50,
    fee: adminDoctor.consultationFee,
    videoFee: Math.floor(adminDoctor.consultationFee * 0.8),
    city: adminDoctor.city,
    hospital: adminDoctor.hospital,
    address: `${adminDoctor.hospital}, ${adminDoctor.city}`,
    nextAvailable: 'Today 3:00 PM',
    consultationTypes: ['In-Person', 'Video'],
    gender: adminDoctor.gender || 'Male',
    languages: ['English', 'Urdu'],
    image: adminDoctor.image,
    about: `Dr. ${adminDoctor.name} is a ${adminDoctor.specialty} with ${adminDoctor.experience} of experience.`,
    education: ['MBBS', 'FCPS'],
    specializations: [adminDoctor.specialty],
    awards: [],
    waitTime: '15 minutes'
  };
}

export async function GET() {
  try {
    // Return both admin format and main format
    const mainFormatDoctors = adminDoctors.map(convertToMainDoctorFormat);
    return NextResponse.json({
      adminDoctors,
      mainDoctors: mainFormatDoctors
    });
  } catch (error) {
    console.error('Get doctors error:', error);
    return NextResponse.json({ adminDoctors: [], mainDoctors: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.specialty || !body.hospital || !body.city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new doctor object
    const newDoctor = {
      _id: (adminDoctors.length + 1).toString(),
      name: body.name,
      specialty: body.specialty,
      hospital: body.hospital,
      city: body.city,
      rating: body.rating || 4.5,
      image: body.image || '/default-doctor.jpg',
      isActive: true,
      experience: body.experience || '5+ years',
      consultationFee: body.consultationFee || 2000,
      availableDays: body.availableDays || ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      availableTime: body.availableTime || '9:00 AM - 5:00 PM'
    };
    
    // Add to admin doctors list
    adminDoctors.push(newDoctor);
    
    return NextResponse.json(newDoctor, { status: 201 });
  } catch (error) {
    console.error('Create doctor error:', error);
    return NextResponse.json(
      { error: 'Failed to create doctor' },
      { status: 500 }
    );
  }
}

// Export the mutable list for use in other routes
export { adminDoctors }; 