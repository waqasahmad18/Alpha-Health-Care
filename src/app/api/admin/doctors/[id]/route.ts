import { NextRequest, NextResponse } from 'next/server';
import { adminDoctors } from '../route';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { id } = await params;
    
    // Validate required fields
    if (!body.name || !body.specialty || !body.hospital || !body.city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Find and update doctor in the list
    const doctorIndex = adminDoctors.findIndex(doctor => doctor._id === id);
    if (doctorIndex === -1) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }
    
    // Update the doctor
    adminDoctors[doctorIndex] = {
      ...adminDoctors[doctorIndex],
      name: body.name,
      specialty: body.specialty,
      hospital: body.hospital,
      city: body.city,
      rating: body.rating || adminDoctors[doctorIndex].rating,
      image: body.image || adminDoctors[doctorIndex].image,
      experience: body.experience || adminDoctors[doctorIndex].experience,
      consultationFee: body.consultationFee || adminDoctors[doctorIndex].consultationFee,
      availableDays: body.availableDays || adminDoctors[doctorIndex].availableDays,
      availableTime: body.availableTime || adminDoctors[doctorIndex].availableTime
    };
    
    return NextResponse.json(adminDoctors[doctorIndex]);
  } catch (error) {
    console.error('Update doctor error:', error);
    return NextResponse.json(
      { error: 'Failed to update doctor' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Find doctor index in the list
    const doctorIndex = adminDoctors.findIndex(doctor => doctor._id === id);
    if (doctorIndex === -1) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }
    
    // Remove doctor from the list
    adminDoctors.splice(doctorIndex, 1);
    
    return NextResponse.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Delete doctor error:', error);
    return NextResponse.json(
      { error: 'Failed to delete doctor' },
      { status: 500 }
    );
  }
} 