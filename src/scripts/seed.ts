import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/User';
import Doctor from '../models/Doctor';
import { doctors } from '../data/doctors';

// MongoDB connection directly in seed script
const MONGODB_URI = 'mongodb+srv://vickyksr2218:waqasahmad18@cluster0.wiv0r84.mongodb.net/admin-dashboard?retryWrites=true&w=majority';

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

async function seed() {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Doctor.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@alphahealth.com',
      password: adminPassword,
      role: 'admin',
    });
    console.log('Created admin user:', admin.email);

    // Create regular user
    const userPassword = await bcrypt.hash('user123', 12);
    const user = await User.create({
      name: 'John Doe',
      email: 'user@alphahealth.com',
      password: userPassword,
      role: 'user',
    });
    console.log('Created regular user:', user.email);

    // Migrate doctors data
    const doctorsData = doctors.map(doctor => ({
      ...doctor,
      _id: undefined, // Remove the id field as MongoDB will generate _id
      isActive: true,
    }));

    const createdDoctors = await Doctor.insertMany(doctorsData);
    console.log(`Created ${createdDoctors.length} doctors`);

    console.log('Seed completed successfully!');
    console.log('\nLogin Credentials:');
    console.log('Admin: admin@alphahealth.com / admin123');
    console.log('User: user@alphahealth.com / user123');
    
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();