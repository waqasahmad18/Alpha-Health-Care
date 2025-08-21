import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Appointment from '@/models/Appointment';
import Doctor from '@/models/Doctor';
import { AppointmentStorage } from '@/lib/storage';

export async function POST(request: NextRequest) {
  try {
    const appointmentData = await request.json();
    
    let savedAppointment;
    
    try {
      // Try to save to MongoDB
      await connectDB();
      savedAppointment = await Appointment.create(appointmentData);
    } catch (error) {
      console.log('MongoDB not available, using shared storage');
      
      // Fallback: Store in shared storage
      savedAppointment = {
        _id: Date.now().toString(),
        ...appointmentData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      AppointmentStorage.add(savedAppointment);
    }

    return NextResponse.json(savedAppointment, { status: 201 });
  } catch (error) {
    console.error('Create appointment error:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    let appointments;
    
    try {
      // Try to get from MongoDB
      await connectDB();
      appointments = await Appointment.find({}).sort({ createdAt: -1 });
    } catch (error) {
      console.log('MongoDB not available, using shared storage');
      
      // Fallback: Get from shared storage
      appointments = AppointmentStorage.getAll();
    }

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Get appointments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}