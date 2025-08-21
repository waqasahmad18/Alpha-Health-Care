import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  doctorId: mongoose.Types.ObjectId;
  doctorName: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientAge: number;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: 'In-Person' | 'Video';
  symptoms: string;
  reason: string;
  paymentMethod: 'Cash' | 'Pay Online';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  fee: number;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  patientEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  patientPhone: {
    type: String,
    required: true,
    trim: true,
  },
  patientAge: {
    type: Number,
    required: true,
    min: 1,
    max: 120,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  appointmentType: {
    type: String,
    enum: ['In-Person', 'Video'],
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Pay Online'],
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  fee: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);