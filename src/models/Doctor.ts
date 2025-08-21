import mongoose, { Schema, Document } from 'mongoose';

export interface IDoctor extends Document {
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  rating: number;
  reviews: number;
  fee: number;
  videoFee: number;
  city: string;
  hospital: string;
  address: string;
  nextAvailable: string;
  consultationTypes: string[];
  gender: 'Male' | 'Female';
  languages: string[];
  image: string;
  about: string;
  education: string[];
  specializations: string[];
  awards: string[];
  services: string[];
  waitTime: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const DoctorSchema = new Schema<IDoctor>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialty: {
    type: String,
    required: true,
    trim: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  fee: {
    type: Number,
    required: true,
    min: 0,
  },
  videoFee: {
    type: Number,
    required: true,
    min: 0,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  hospital: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  nextAvailable: {
    type: String,
    required: true,
  },
  consultationTypes: [{
    type: String,
    required: true,
  }],
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  languages: [{
    type: String,
    required: true,
  }],
  image: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  education: [{
    type: String,
    required: true,
  }],
  specializations: [{
    type: String,
  }],
  awards: [{
    type: String,
  }],
  services: [{
    type: String,
  }],
  waitTime: {
    type: String,
    default: '30 minutes',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Doctor || mongoose.model<IDoctor>('Doctor', DoctorSchema);