import fs from 'fs';
import path from 'path';

// Shared file-based storage for appointments
const STORAGE_FILE = path.join(process.cwd(), 'appointments.json');

// Debug: Log the actual path being used
console.log('Storage file path:', STORAGE_FILE);
console.log('Current working directory:', process.cwd());
console.log('File exists check:', fs.existsSync(STORAGE_FILE));

export interface AppointmentData {
  _id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientAge: number;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  symptoms: string;
  reason: string;
  paymentMethod: string;
  status: string;
  fee: number;
  createdAt: string;
  updatedAt?: string;
}

// Helper functions for file operations
function readAppointments(): AppointmentData[] {
  try {
    console.log('readAppointments() called');
    console.log('STORAGE_FILE:', STORAGE_FILE);
    console.log('File exists:', fs.existsSync(STORAGE_FILE));
    
    if (fs.existsSync(STORAGE_FILE)) {
      const data = fs.readFileSync(STORAGE_FILE, 'utf8');
      console.log('Raw file data length:', data.length);
      console.log('Raw file data:', data.substring(0, 200));
      
      const parsed = JSON.parse(data);
      console.log('Parsed appointments:', parsed);
      console.log('Parsed appointments length:', parsed.length);
      
      return parsed;
    }
    console.log('File does not exist');
    return [];
  } catch (error) {
    console.error('Error reading appointments file:', error);
    return [];
  }
}

function writeAppointments(appointments: AppointmentData[]): void {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(appointments, null, 2));
  } catch (error) {
    console.error('Error writing appointments file:', error);
  }
}

export const AppointmentStorage = {
  // Get all appointments
  getAll(): AppointmentData[] {
    const appointments = readAppointments();
    console.log('AppointmentStorage.getAll() called, file path:', STORAGE_FILE);
    console.log('File exists:', fs.existsSync(STORAGE_FILE));
    console.log('Total appointments read:', appointments.length);
    console.log('Appointments data:', appointments);
    
    // Always return appointments from file, don't use hardcoded data
    return appointments;
  },

  // Add new appointment
  add(appointment: AppointmentData): void {
    const appointments = readAppointments();
    appointments.push(appointment);
    writeAppointments(appointments);
    console.log('Appointment added to file storage:', appointment.patientName);
    console.log('Total appointments in file storage:', appointments.length);
  },

  // Update appointment by ID
  updateById(id: string, updates: Partial<AppointmentData>): AppointmentData | null {
    const appointments = readAppointments();
    const index = appointments.findIndex(apt => apt._id === id);
    if (index !== -1) {
      appointments[index] = { ...appointments[index], ...updates };
      writeAppointments(appointments);
      return appointments[index];
    }
    return null;
  },

  // Get appointment by ID
  getById(id: string): AppointmentData | null {
    const appointments = readAppointments();
    return appointments.find(apt => apt._id === id) || null;
  },

  // Get appointments by status
  getByStatus(status: string): AppointmentData[] {
    const appointments = readAppointments();
    return appointments.filter(apt => apt.status === status);
  },

  // Get total count
  getCount(): number {
    return readAppointments().length;
  },

  // Clear all appointments (for testing)
  clear(): void {
    writeAppointments([]);
  },

  // Initialize with mock data
  initializeMockData(): void {
    const appointments = readAppointments();
    if (appointments.length === 0) {
      const mockAppointments: AppointmentData[] = [
        {
          _id: 'mock1',
          doctorId: '1',
          doctorName: 'Dr. Ahmad Ali',
          patientName: 'Muhammad Hassan',
          patientEmail: 'hassan@example.com',
          patientPhone: '03001234567',
          patientAge: 35,
          appointmentDate: 'Today',
          appointmentTime: '2:00 PM',
          appointmentType: 'In-Person',
          symptoms: 'Chest pain and shortness of breath',
          reason: 'Regular checkup for heart condition',
          paymentMethod: 'Cash',
          status: 'pending',
          fee: 2000,
          createdAt: new Date().toISOString()
        },
        {
          _id: 'mock2',
          doctorId: '3',
          doctorName: 'Dr. Fatima Khan',
          patientName: 'Ayesha Ahmed',
          patientEmail: 'ayesha@example.com',
          patientPhone: '03001234568',
          patientAge: 28,
          appointmentDate: 'Tomorrow',
          appointmentTime: '10:00 AM',
          appointmentType: 'Video',
          symptoms: 'Monthly checkup',
          reason: 'Routine gynecological examination',
          paymentMethod: 'Pay Online',
          status: 'confirmed',
          fee: 1800,
          createdAt: new Date(Date.now() - 86400000).toISOString()
        }
      ];

      writeAppointments(mockAppointments);
      console.log('Mock data initialized with', mockAppointments.length, 'appointments');
    }
  }
};