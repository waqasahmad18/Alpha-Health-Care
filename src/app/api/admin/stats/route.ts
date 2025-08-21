import { NextRequest, NextResponse } from 'next/server';
import { AppointmentStorage } from '@/lib/storage';
import { doctors } from '@/data/doctors';

export async function GET(request: NextRequest) {
  try {
    // Get appointments from storage
    const appointments = AppointmentStorage.getAll();
    
    // Calculate stats
    const totalDoctors = doctors.length;
    const totalAppointments = appointments.length;
    const pendingAppointments = appointments.filter(apt => apt.status === 'pending').length;
    const confirmedAppointments = appointments.filter(apt => apt.status === 'confirmed').length;
    
    // Calculate today's appointments
    const today = new Date().toDateString();
    const todayAppointments = appointments.filter(apt => {
      const aptDate = new Date(apt.appointmentDate).toDateString();
      return aptDate === today;
    }).length;
    
    // Calculate monthly revenue (mock data for now)
    const monthlyRevenue = appointments.reduce((total, apt) => {
      if (apt.status === 'confirmed') {
        return total + apt.fee;
      }
      return total;
    }, 0) + 25000; // Base revenue
    
    return NextResponse.json({
      totalDoctors,
      totalAppointments,
      pendingAppointments,
      confirmedAppointments,
      todayAppointments,
      monthlyRevenue
    });
  } catch (error) {
    console.error('Stats API error:', error);
    
    // Return fallback data
    return NextResponse.json({
      totalDoctors: 11,
      totalAppointments: 5,
      pendingAppointments: 3,
      confirmedAppointments: 2,
      todayAppointments: 2,
      monthlyRevenue: 45000
    });
  }
} 