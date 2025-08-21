'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  CreditCard,
  Check,
  Star
} from 'lucide-react';
import { getDoctorById } from '@/data/doctors';

function AppointmentBookingContent() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [doctor, setDoctor] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // Form data
  const [formData, setFormData] = useState({
    doctorId: '',
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    patientAge: '',
    patientGender: '',
    appointmentDate: '',
    appointmentTime: '',
    consultationType: 'in-person',
    symptoms: '',
    reason: '',
    paymentMethod: 'cash'
  });

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      // Store the current URL to redirect back after login (only on client)
      if (typeof window !== 'undefined') {
        const currentUrl = window.location.href;
        localStorage.setItem('redirectAfterLogin', currentUrl);
      }
      router.push('/login');
      return;
    }

    const doctorId = searchParams.get('doctorId');
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const type = searchParams.get('type');

    if (doctorId) {
      const foundDoctor = getDoctorById(parseInt(doctorId));
      setDoctor(foundDoctor);
      setFormData(prev => ({
        ...prev,
        doctorId,
        appointmentDate: date || '',
        appointmentTime: time || '',
        consultationType: type || 'in-person'
      }));
    }
    
    setLoading(false);
  }, [searchParams, session, status, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission - Save appointment
      setLoading(true);
      
      try {
        const appointmentData = {
          doctorId: doctor._id || doctor.id,
          doctorName: doctor.name,
          patientName: formData.patientName,
          patientEmail: formData.patientEmail,
          patientPhone: formData.patientPhone,
          patientAge: parseInt(formData.patientAge),
          appointmentDate: formData.appointmentDate,
          appointmentTime: formData.appointmentTime,
          appointmentType: formData.consultationType === 'video' ? 'Video' : 'In-Person',
          symptoms: formData.symptoms,
          reason: formData.reason || 'General consultation',
          paymentMethod: formData.paymentMethod === 'cash' ? 'Cash' : 'Pay Online',
          status: 'pending',
          fee: formData.consultationType === 'video' ? doctor.videoFee : doctor.fee,
        };

        const response = await fetch('/api/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appointmentData),
        });

        if (response.ok) {
          console.log('Appointment successfully saved!');
          setStep(4); // Success step
        } else {
          console.error('Failed to save appointment');
          alert('Failed to book appointment. Please try again.');
        }
      } catch (error) {
        console.error('Error booking appointment:', error);
        alert('Error booking appointment. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  if (status === 'loading' || loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
    </div>;
  }

  if (!session) {
    return null; // Will redirect to login
  }

  if (!doctor) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Doctor not found</h2>
        <Link href="/doctors" className="text-indigo-600 hover:text-indigo-500">
          Browse Doctors
        </Link>
      </div>
    </div>;
  }

  const fee = formData.consultationType === 'video' ? doctor.videoFee : doctor.fee;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-bold text-blue-600">Alpha Health Care</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                {step > 1 ? <Check className="h-4 w-4" /> : '1'}
              </div>
              <span className="ml-2 text-sm font-medium">Patient Info</span>
            </div>
            <div className="flex-1 mx-4 h-1 bg-gray-300 rounded">
              <div className={`h-full bg-blue-600 rounded transition-all duration-300 ${step >= 2 ? 'w-1/2' : 'w-0'}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                {step > 2 ? <Check className="h-4 w-4" /> : '2'}
              </div>
              <span className="ml-2 text-sm font-medium">Symptoms</span>
            </div>
            <div className="flex-1 mx-4 h-1 bg-gray-300 rounded">
              <div className={`h-full bg-blue-600 rounded transition-all duration-300 ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                {step > 3 ? <Check className="h-4 w-4" /> : '3'}
              </div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Patient Information</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="patientPhone"
                          value={formData.patientPhone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="patientEmail"
                        value={formData.patientEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Age *
                        </label>
                        <input
                          type="number"
                          name="patientAge"
                          value={formData.patientAge}
                          onChange={handleInputChange}
                          required
                          min="1"
                          max="120"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gender *
                        </label>
                        <select
                          name="patientGender"
                          value={formData.patientGender}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Next: Symptoms
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Symptoms & Reason for Visit</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Describe your symptoms or reason for visit *
                      </label>
                      <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Please describe your symptoms, medical concerns, or reason for visiting the doctor..."
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Next: Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-lg mr-3">
                            <CreditCard className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Pay at Hospital</div>
                            <div className="text-sm text-gray-500">Pay when you visit the doctor</div>
                          </div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">Pay Online</div>
                            <div className="text-sm text-gray-500">Bank transfer with screenshot verification</div>
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Online Payment Details */}
                    {formData.paymentMethod === 'online' && (
                      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">Online Payment Details</h4>
                        <div className="space-y-3 text-sm">
                          <div className="bg-white p-3 rounded border">
                            <div className="font-medium text-gray-900 mb-1">Bank Account Details:</div>
                            <div className="text-gray-700">
                              <div><strong>Account Title:</strong> Alpha Health Care</div>
                              <div><strong>Account Number:</strong> 01570081002547</div>
                              <div><strong>Bank:</strong> Meezan Bank Limited</div>
                              <div><strong>Branch Code:</strong> 1570</div>
                              <div><strong>IBAN:</strong> PK36MEZN0001570081002547</div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded border">
                            <div className="font-medium text-gray-900 mb-1">Payment Instructions:</div>
                            <div className="text-gray-700">
                              <div>1. Transfer the consultation fee to the above account</div>
                              <div>2. Take a screenshot of the payment</div>
                              <div>3. Send the screenshot to our WhatsApp: <strong>03001234567</strong></div>
                              <div>4. Include your appointment details in the message</div>
                            </div>
                          </div>

                          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                            <div className="text-yellow-800 text-sm">
                              <strong>Important:</strong> Your appointment will be confirmed once payment is verified. Please keep your payment receipt for reference.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Appointment Confirmed!</h2>
                  <p className="text-gray-600 mb-6">Your appointment has been successfully booked.</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <h3 className="font-semibold mb-2">Appointment Details:</h3>
                    <p><strong>Doctor:</strong> {doctor.name}</p>
                    <p><strong>Date:</strong> {formData.appointmentDate}</p>
                    <p><strong>Time:</strong> {formData.appointmentTime}</p>
                    <p><strong>Type:</strong> {formData.consultationType === 'video' ? 'Video Consultation' : 'In-Person Visit'}</p>
                    <p><strong>Fee:</strong> Rs. {fee}</p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/doctors"
                      className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                    >
                      Book Another Appointment
                    </Link>
                    <Link
                      href="/"
                      className="w-full bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-block"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Summary</h3>
              
              {/* Doctor Info */}
              <div className="flex items-center mb-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">{doctor.name}</h4>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-3 mb-4">
                {formData.appointmentDate && (
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{formData.appointmentDate}</span>
                  </div>
                )}
                {formData.appointmentTime && (
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{formData.appointmentTime}</span>
                  </div>
                )}
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span>{formData.consultationType === 'video' ? 'Video Consultation' : doctor.hospital}</span>
                </div>
              </div>

              {/* Fee */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Consultation Fee</span>
                  <span className="font-semibold text-blue-600">Rs. {fee}</span>
                </div>
                {formData.consultationType === 'video' && (
                  <p className="text-xs text-gray-500 mt-1">Video consultation fee</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppointmentBooking() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AppointmentBookingContent />
    </Suspense>
  );
}