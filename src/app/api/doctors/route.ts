import { NextResponse } from 'next/server';
import { getAllDoctors } from '@/data/doctors';

export async function GET() {
  try {
    // First try to get from admin API (which has the latest data)
    try {
      const adminResponse = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/admin/doctors`);
      if (adminResponse.ok) {
        const adminData = await adminResponse.json();
        if (adminData.mainDoctors && adminData.mainDoctors.length > 0) {
          return NextResponse.json(adminData.mainDoctors);
        }
      }
    } catch (error) {
      console.log('Admin API not available, using static data');
    }

    // Fallback to static data
    const doctors = getAllDoctors();
    return NextResponse.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctors' },
      { status: 500 }
    );
  }
}
