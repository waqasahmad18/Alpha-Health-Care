import { NextRequest, NextResponse } from 'next/server';
import { AppointmentStorage } from '@/lib/storage';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { id } = await params;
    
    // Update appointment status
    const updatedAppointment = AppointmentStorage.updateById(id, {
      status: body.status,
      updatedAt: new Date().toISOString()
    });
    
    if (!updatedAppointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedAppointment);
  } catch (error) {
    console.error('Update appointment error:', error);
    return NextResponse.json(
      { error: 'Failed to update appointment' },
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
    
    // Get all appointments
    const appointments = AppointmentStorage.getAll();
    
    // Filter out the appointment to delete
    const filteredAppointments = appointments.filter(apt => apt._id !== id);
    
    // Write back to storage
    const fs = require('fs');
    const path = require('path');
    const storageFile = path.join(process.cwd(), 'appointments.json');
    fs.writeFileSync(storageFile, JSON.stringify(filteredAppointments, null, 2));
    
    return NextResponse.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Delete appointment error:', error);
    return NextResponse.json(
      { error: 'Failed to delete appointment' },
      { status: 500 }
    );
  }
} 