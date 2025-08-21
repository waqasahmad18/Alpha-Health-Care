import { NextRequest, NextResponse } from 'next/server';
import { AppointmentStorage } from '@/lib/storage';

export async function GET() {
  try {
    // Get all appointments from storage
    const appointments = AppointmentStorage.getAll();
    
    // Sort by creation date (newest first)
    const sortedAppointments = appointments.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    return NextResponse.json(sortedAppointments);
  } catch (error) {
    console.error('Get appointments error:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.doctorId || !body.patientName || !body.appointmentDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new appointment
    const newAppointment = {
      _id: `apt_${Date.now()}`,
      doctorId: body.doctorId,
      doctorName: body.doctorName || 'Unknown Doctor',
      patientName: body.patientName,
      patientEmail: body.patientEmail || '',
      patientPhone: body.patientPhone || '',
      patientAge: body.patientAge || 0,
      appointmentDate: body.appointmentDate,
      appointmentTime: body.appointmentTime || '10:00 AM',
      appointmentType: body.appointmentType || 'In-Person',
      symptoms: body.symptoms || '',
      reason: body.reason || '',
      paymentMethod: body.paymentMethod || 'Cash',
      status: 'pending',
      fee: body.fee || 2000,
      createdAt: new Date().toISOString()
    };
    
    // Add to storage
    AppointmentStorage.add(newAppointment);
    
    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    console.error('Create appointment error:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
} 