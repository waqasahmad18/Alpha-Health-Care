import { NextRequest, NextResponse } from 'next/server';
import { AppointmentStorage } from '@/lib/storage';

export async function POST(request: NextRequest) {
  try {
    // Create test appointment
    const testAppointment = {
      _id: Date.now().toString(),
      doctorId: '2',
      doctorName: 'Dr. Zara Khan',
      patientName: 'Test Patient',
      patientEmail: 'test@example.com',
      patientPhone: '03001234567',
      patientAge: 30,
      appointmentDate: 'Today',
      appointmentTime: '2:00 PM',
      appointmentType: 'In-Person',
      symptoms: 'Test symptoms for dashboard testing',
      reason: 'Dashboard testing',
      paymentMethod: 'Cash',
      status: 'pending',
      fee: 1500,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    AppointmentStorage.add(testAppointment);

    return NextResponse.json({ 
      success: true, 
      appointment: testAppointment,
      totalAppointments: AppointmentStorage.getCount()
    });
  } catch (error) {
    console.error('Test appointment creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create test appointment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = AppointmentStorage.getAll();

    return NextResponse.json({
      success: true,
      totalAppointments: appointments.length,
      appointments: appointments.map(apt => ({
        id: apt._id,
        patient: apt.patientName,
        doctor: apt.doctorName,
        status: apt.status,
        date: apt.appointmentDate,
        time: apt.appointmentTime
      }))
    });
  } catch (error) {
    console.error('Test get appointments error:', error);
    return NextResponse.json(
      { error: 'Failed to get test appointments' },
      { status: 500 }
    );
  }
}