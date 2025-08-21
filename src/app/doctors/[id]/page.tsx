'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Video, 
  Clock, 
  Phone,
  MessageSquare,
  Award,
  GraduationCap,
  Users,
  ArrowLeft,
  Heart,
  Shield,
  CheckCircle
} from 'lucide-react';
import { getDoctorById } from '@/data/doctors';

export default function DoctorProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('in-person');
  const [doctor, setDoctor] = useState<any>(null);

  useEffect(() => {
    // Get doctor data based on the ID parameter
    const doctorId = parseInt(resolvedParams.id);
    const foundDoctor = getDoctorById(doctorId);
    setDoctor(foundDoctor);
    
    // If doctor not found, show 404
    if (!foundDoctor) {
      notFound();
    }
  }, [resolvedParams.id]);

  if (!doctor) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const availableSlots = {
    'Today': ['2:00 PM', '3:30 PM', '5:00 PM'],
    'Tomorrow': ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'],
    'Day After': ['9:00 AM', '10:30 AM', '2:00 PM', '4:00 PM']
  };

  const generateReviews = (doctor: any) => {
    // Gender-appropriate patient names
    const maleNames = ['Muhammad Ali', 'Hassan Khan', 'Omar Malik', 'Ahmed Sheikh', 'Ali Ahmad', 'Waqas Khan'];
    const femaleNames = ['Fatima Sheikh', 'Ayesha Ahmed', 'Sara Khan', 'Mariam Ali', 'Zainab Hassan', 'Rabia Omar'];
    const allNames = [...maleNames, ...femaleNames];
    
    // Pronouns based on doctor's gender
    const pronouns = doctor.gender === 'Female' 
      ? { pronoun: 'She', possessive: 'her', object: 'her' } 
      : { pronoun: 'He', possessive: 'his', object: 'him' };
    
    // Get doctor's last name
    const lastName = doctor.name.split(' ').slice(-1)[0];
    
    // Different comment templates based on specialty
    const getSpecialtyComments = (specialty: string) => {
      const baseComments = {
        'Cardiologist': [
          `Dr. ${lastName} provided excellent cardiac care. ${pronouns.pronoun} explained my heart condition clearly and prescribed effective treatment.`,
          `Very satisfied with my cardiac consultation. ${pronouns.pronoun} is knowledgeable about heart diseases and has a caring approach.`,
          `My heart check-up went very well. Dr. ${lastName} thoroughly examined me and gave detailed advice about cardiac health.`
        ],
        'Neurologist': [
          `Dr. ${lastName} is an exceptional neurologist. ${pronouns.pronoun} diagnosed my condition accurately and provided effective treatment.`,
          `Great experience with Dr. ${lastName}. ${pronouns.pronoun} is very knowledgeable about neurological disorders and explains everything clearly.`,
          `Excellent consultation for my neurological issues. ${pronouns.pronoun} was patient and thorough in ${pronouns.possessive} examination.`
        ],
        'Pediatrician': [
          `Dr. ${lastName} is wonderful with children. My child was comfortable throughout the examination and ${pronouns.pronoun} explained everything patiently.`,
          `Excellent pediatrician! ${pronouns.pronoun} has a gentle approach with kids and provides comprehensive care.`,
          `Very happy with Dr. ${lastName}'s treatment of my child. ${pronouns.pronoun} is experienced and caring with young patients.`
        ],
        'Dermatologist': [
          `Dr. ${lastName} effectively treated my skin condition. ${pronouns.pronoun} provided clear instructions and the results were excellent.`,
          `Great dermatologist! ${pronouns.pronoun} diagnosed my skin problem correctly and prescribed the right treatment.`,
          `Very satisfied with my skin consultation. Dr. ${lastName} is knowledgeable and ${pronouns.possessive} treatment approach is effective.`
        ],
        'Orthopedic': [
          `Dr. ${lastName} successfully treated my bone injury. ${pronouns.pronoun} is skilled in orthopedic procedures and very professional.`,
          `Excellent orthopedic surgeon! ${pronouns.pronoun} explained my condition well and the treatment was very effective.`,
          `Very good experience with Dr. ${lastName}. ${pronouns.pronoun} is experienced in treating bone and joint problems.`
        ],
        'Gynecologist': [
          `Dr. ${lastName} provides excellent women's healthcare. ${pronouns.pronoun} is very professional and makes patients comfortable.`,
          `Great gynecologist! ${pronouns.pronoun} is knowledgeable and handles women's health issues with care and expertise.`,
          `Very satisfied with my consultation. Dr. ${lastName} is experienced and provides comprehensive women's health services.`
        ]
      };
      
      return (baseComments as any)[specialty] || [
        `Dr. ${lastName} is an excellent doctor. ${pronouns.pronoun} provided thorough examination and effective treatment.`,
        `Very professional and knowledgeable doctor. ${pronouns.pronoun} explained my condition clearly and answered all questions.`,
        `Great experience with Dr. ${lastName}. ${pronouns.pronoun} is skilled and has a caring approach towards patients.`
      ];
    };
    
    // Gender-appropriate patient selection for female doctors
    const getAppropriatePatients = (doctorGender: string, specialty: string) => {
      if (doctorGender === 'Female' && specialty === 'Gynecologist') {
        // For female gynecologists, use only female patient names
        return femaleNames;
      } else if (doctorGender === 'Female' && specialty === 'Pediatrician') {
        // For female pediatricians, mix of male and female names (parents)
        return allNames;
      } else if (doctorGender === 'Female') {
        // For other female doctors, prefer female patients but can have some male patients
        return [...femaleNames, ...maleNames.slice(0, 2)];
      } else {
        // For male doctors, mix of all patients
        return allNames;
      }
    };
    
    const appropriatePatients = getAppropriatePatients(doctor.gender, doctor.specialty);
    const specialtyComments = getSpecialtyComments(doctor.specialty);
    
    // Generate unique reviews based on doctor ID to ensure different reviews for each doctor
    const seedRandom = (seed: number) => {
      let x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    const doctorSeed = doctor.id * 123; // Use doctor ID as seed
    
    return [
    {
      id: 1,
        patientName: appropriatePatients[Math.floor(seedRandom(doctorSeed + 1) * appropriatePatients.length)],
      rating: 5,
        date: '3 days ago',
        comment: specialtyComments[0],
      verified: true
    },
    {
      id: 2,
        patientName: appropriatePatients[Math.floor(seedRandom(doctorSeed + 2) * appropriatePatients.length)],
      rating: 5,
      date: '1 week ago',
        comment: specialtyComments[1],
      verified: true
    },
    {
      id: 3,
        patientName: appropriatePatients[Math.floor(seedRandom(doctorSeed + 3) * appropriatePatients.length)],
      rating: 4,
      date: '2 weeks ago',
        comment: specialtyComments[2],
      verified: true
    }
  ];
  };

  const reviews = generateReviews(doctor);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/doctors" className="flex items-center mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Alpha Health Care</h1>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/doctors" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">Find Doctors</Link>
                <Link href="/lab-tests" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Lab Tests</Link>
                <Link href="/medicines" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Medicines</Link>
                <Link href="/health-blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Health Blog</Link>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-6">
                <div className="w-32 h-32 rounded-full flex-shrink-0 overflow-hidden bg-gray-200">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                      <p className="text-xl text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                      <p className="text-gray-600 mb-3">{doctor.qualifications}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          <span>{doctor.experience} experience</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{doctor.city}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{doctor.reviews} patients</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 mr-1" />
                          <span className="font-semibold">{doctor.rating}</span>
                          <span className="text-gray-600 ml-1">({doctor.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">PMC Verified</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        {doctor.consultationTypes.map((type: string) => (
                          <span key={type} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {type === 'Video' && <Video className="h-3 w-3 mr-1" />}
                            {type === 'In-Person' && <Calendar className="h-3 w-3 mr-1" />}
                            {type}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Usually responds in {doctor.waitTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About Dr. {doctor.name.split(' ')[1]}</h2>
              <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            </div>

            {/* Education & Experience */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Education & Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Education
                  </h3>
                  <ul className="space-y-1">
                    {doctor.education.map((edu: string, index: number) => (
                      <li key={index} className="text-gray-600 ml-7">{edu}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2 ml-7">
                    {doctor.specializations.map((spec: string, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h2>
              <ul className="space-y-2">
                {doctor.awards.map((award: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">{review.patientName}</span>
                        {review.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                        )}
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Book Appointment</h2>
              
              {/* Consultation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Type</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consultationType"
                      value="in-person"
                      checked={consultationType === 'in-person'}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>In-Person Visit</span>
                      </div>
                      <span className="font-semibold">Rs. {doctor.fee}</span>
                    </div>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consultationType"
                      value="video"
                      checked={consultationType === 'video'}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        <span>Video Consultation</span>
                      </div>
                      <span className="font-semibold">Rs. {doctor.videoFee}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Date</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.keys(availableSlots).map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-md border text-left ${
                        selectedDate === date
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-medium">{date}</div>
                      <div className="text-sm text-gray-600">{(availableSlots as any)[date].length} slots available</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(availableSlots as any)[selectedDate].map((time: string) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-md border text-sm ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Book Button */}
              {!selectedDate || !selectedTime ? (
              <button
                  disabled
                  className="w-full py-3 rounded-md font-medium mb-4 text-center bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                  Select Date & Time to Book - Rs. {consultationType === 'video' ? doctor.videoFee : doctor.fee}
                </button>
              ) : (
                <Link
                  href={`/appointment?doctorId=${doctor.id}&date=${selectedDate}&time=${selectedTime}&type=${consultationType}`}
                  className="w-full py-3 rounded-md font-medium mb-4 text-center block bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Book Appointment - Rs. {consultationType === 'video' ? doctor.videoFee : doctor.fee}
                </Link>
              )}



              {/* Hospital Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Hospital Information</h3>
                <p className="text-sm text-gray-600 mb-1">{doctor.hospital}</p>
                <p className="text-sm text-gray-600">{doctor.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}