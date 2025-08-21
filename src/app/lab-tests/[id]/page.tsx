'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  TestTube,
  Clock,
  Home,
  Building,
  Star,
  Heart,
  Eye,
  Brain,
  Droplets,
  Activity,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

interface LabTest {
  id: number;
  name: string;
  category: string;
  description: string;
  detailedDescription: string;
  price: number;
  originalPrice: number;
  discount: number;
  sampleType: string;
  reportTime: string;
  homeCollection: boolean;
  labName: string;
  labAddress: string;
  labPhone: string;
  labEmail: string;
  rating: number;
  reviews: number;
  preparation: string;
  whatIsTested: string[];
  whyGetTested: string[];
  normalRange: string;
  turnaroundTime: string;
  fastingRequired: boolean;
  fastingDuration?: string;
  specialInstructions?: string[];
  includedTests?: string[];
  relatedTests?: string[];
}

export default function LabTestDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [test, setTest] = useState<LabTest | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock data - in real app this would come from API
  const labTestsData: LabTest[] = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      category: 'blood',
      description: 'Comprehensive blood analysis including RBC, WBC, platelets, and hemoglobin levels',
      detailedDescription: 'A Complete Blood Count (CBC) is a comprehensive blood test that provides detailed information about the cells in your blood. This test measures several components and features of your blood, including red blood cells (RBCs), white blood cells (WBCs), and platelets. The CBC is one of the most commonly ordered blood tests and can help diagnose a wide range of conditions, from anemia to infection to cancer.',
      price: 800,
      originalPrice: 1000,
      discount: 20,
      sampleType: 'Blood',
      reportTime: '6 hours',
      homeCollection: true,
      labName: 'Chughtai Lab',
      labAddress: '123 Main Street, Gulberg III, Lahore',
      labPhone: '+92-42-1234567',
      labEmail: 'info@chughtailab.com',
      rating: 4.8,
      reviews: 1245,
      preparation: 'No fasting required',
      whatIsTested: [
        'Red Blood Cell Count (RBC)',
        'White Blood Cell Count (WBC)',
        'Hemoglobin (Hb)',
        'Hematocrit (Hct)',
        'Platelet Count',
        'Mean Corpuscular Volume (MCV)',
        'Mean Corpuscular Hemoglobin (MCH)',
        'Mean Corpuscular Hemoglobin Concentration (MCHC)',
        'Red Cell Distribution Width (RDW)',
        'White Blood Cell Differential'
      ],
      whyGetTested: [
        'To check your general health status',
        'To screen for a variety of disorders',
        'To diagnose medical conditions',
        'To monitor medical conditions',
        'To monitor treatment for medical conditions'
      ],
      normalRange: 'Varies by age, sex, and other factors',
      turnaroundTime: '6-8 hours',
      fastingRequired: false,
      specialInstructions: [
        'No special preparation needed',
        'Can be done at any time of day',
        'Results available same day'
      ],
      includedTests: [
        'Complete Blood Count',
        'Differential White Blood Cell Count',
        'Red Blood Cell Indices',
        'Platelet Count and Morphology'
      ],
      relatedTests: [
        'Hemoglobin A1c',
        'Iron Studies',
        'Vitamin B12 and Folate',
        'Reticulocyte Count'
      ]
    },
    {
      id: 2,
      name: 'Lipid Profile',
      category: 'heart',
      description: 'Cholesterol and triglyceride levels to assess cardiovascular risk',
      detailedDescription: 'A Lipid Profile is a group of tests that measures different types of cholesterol and fats in your blood. This test is crucial for assessing your risk of developing cardiovascular disease. The lipid profile typically includes measurements of total cholesterol, HDL cholesterol (good cholesterol), LDL cholesterol (bad cholesterol), and triglycerides. Understanding these levels helps healthcare providers develop strategies to reduce your risk of heart disease and stroke.',
      price: 1200,
      originalPrice: 1500,
      discount: 20,
      sampleType: 'Blood',
      reportTime: '12 hours',
      homeCollection: true,
      labName: 'Aga Khan Laboratory',
      labAddress: '456 Model Town, Lahore',
      labPhone: '+92-42-2345678',
      labEmail: 'info@agakhanlab.com',
      rating: 4.9,
      reviews: 987,
      preparation: '12 hours fasting required',
      whatIsTested: [
        'Total Cholesterol',
        'High-Density Lipoprotein (HDL)',
        'Low-Density Lipoprotein (LDL)',
        'Triglycerides',
        'Very Low-Density Lipoprotein (VLDL)',
        'Cholesterol/HDL Ratio'
      ],
      whyGetTested: [
        'To assess cardiovascular risk',
        'To monitor cholesterol-lowering treatment',
        'To screen for lipid disorders',
        'As part of routine health checkup',
        'If you have risk factors for heart disease'
      ],
      normalRange: 'Total Cholesterol: <200 mg/dL, HDL: >40 mg/dL, LDL: <100 mg/dL, Triglycerides: <150 mg/dL',
      turnaroundTime: '12-24 hours',
      fastingRequired: true,
      fastingDuration: '12-14 hours',
      specialInstructions: [
        'Fast for 12-14 hours before the test',
        'Only water is allowed during fasting',
        'Avoid alcohol for 24 hours before test',
        'Avoid strenuous exercise 24 hours before test'
      ],
      includedTests: [
        'Total Cholesterol',
        'HDL Cholesterol',
        'LDL Cholesterol',
        'Triglycerides',
        'Cholesterol Ratios'
      ],
      relatedTests: [
        'High-Sensitivity C-Reactive Protein (hs-CRP)',
        'Apolipoprotein B',
        'Lipoprotein(a)',
        'Cardiac Risk Assessment'
      ]
    },
    {
      id: 7,
      name: 'Eye Examination & Vision Test',
      category: 'eye',
      description: 'Comprehensive eye examination including visual acuity, eye pressure, and retinal imaging',
      detailedDescription: 'A comprehensive eye examination is a series of tests performed by an ophthalmologist or optometrist to evaluate your vision and check for eye diseases. This examination includes tests for visual acuity, eye pressure measurement, retinal imaging, and various other diagnostic procedures to ensure your eyes are healthy and functioning properly.',
      price: 1500,
      originalPrice: 2000,
      discount: 25,
      sampleType: 'Non-invasive',
      reportTime: 'Immediate',
      homeCollection: false,
      labName: 'Al-Shifa Eye Hospital',
      labAddress: '789 Eye Care Street, Gulberg II, Lahore',
      labPhone: '+92-42-3456789',
      labEmail: 'info@alshifaeye.com',
      rating: 4.7,
      reviews: 432,
      preparation: 'No special preparation needed',
      whatIsTested: [
        'Visual Acuity (Distance and Near Vision)',
        'Eye Pressure (Intraocular Pressure)',
        'Retinal Imaging and Photography',
        'Color Vision Testing',
        'Depth Perception',
        'Eye Movement and Coordination',
        'Pupil Response and Dilation',
        'Corneal Topography'
      ],
      whyGetTested: [
        'To check vision and update prescription',
        'To detect early signs of eye diseases',
        'To monitor existing eye conditions',
        'As part of routine health checkup',
        'If experiencing vision problems'
      ],
      normalRange: 'Varies by age and individual factors',
      turnaroundTime: 'Immediate results',
      fastingRequired: false,
      specialInstructions: [
        'Bring current glasses/contacts if applicable',
        'Avoid wearing contact lenses 24 hours before',
        'Dilation may affect vision temporarily'
      ],
      includedTests: [
        'Comprehensive Eye Examination',
        'Visual Acuity Testing',
        'Eye Pressure Measurement',
        'Retinal Imaging'
      ],
      relatedTests: [
        'Glaucoma Screening',
        'Diabetic Retinopathy Test',
        'Macular Degeneration Test',
        'Corneal Thickness Measurement'
      ]
    },
    {
      id: 8,
      name: 'Brain MRI Scan',
      category: 'brain',
      description: 'Detailed brain imaging using magnetic resonance to detect abnormalities and conditions',
      detailedDescription: 'A Brain MRI (Magnetic Resonance Imaging) scan is a non-invasive imaging technique that uses powerful magnets and radio waves to create detailed images of the brain and surrounding structures. This advanced imaging technology provides exceptional detail of brain tissue, blood vessels, and other structures, making it invaluable for diagnosing various neurological conditions.',
      price: 8000,
      originalPrice: 10000,
      discount: 20,
      sampleType: 'Imaging',
      reportTime: '24 hours',
      homeCollection: false,
      labName: 'Shaukat Khanum Memorial Hospital',
      labAddress: 'Block R3, Johar Town, Lahore',
      labPhone: '+92-42-4567890',
      labEmail: 'info@skmh.org.pk',
      rating: 4.9,
      reviews: 298,
      preparation: 'No food 4 hours before scan',
      whatIsTested: [
        'Brain Tissue Structure',
        'Blood Vessels and Circulation',
        'Cerebrospinal Fluid Spaces',
        'Brain Tumors and Lesions',
        'Inflammatory Conditions',
        'Developmental Abnormalities',
        'Trauma and Hemorrhage',
        'Neurological Disorders'
      ],
      whyGetTested: [
        'To investigate neurological symptoms',
        'To diagnose brain tumors or lesions',
        'To assess brain injury or trauma',
        'To monitor treatment progress',
        'As part of neurological evaluation'
      ],
      normalRange: 'Normal brain structure and appearance',
      turnaroundTime: '24-48 hours',
      fastingRequired: true,
      fastingDuration: '4 hours',
      specialInstructions: [
        'No food or drink 4 hours before scan',
        'Remove all metal objects and jewelry',
        'Inform staff of any implants or devices',
        'May require contrast dye injection'
      ],
      includedTests: [
        'Brain MRI Scan',
        '3D Brain Imaging',
        'Detailed Brain Analysis',
        'Radiologist Report'
      ],
      relatedTests: [
        'Spine MRI',
        'CT Scan of Brain',
        'EEG (Electroencephalogram)',
        'Neurological Consultation'
      ]
    }
  ];

  useEffect(() => {
    const testId = parseInt(params.id as string);
    const foundTest = labTestsData.find(t => t.id === testId);
    
    if (foundTest) {
      setTest(foundTest);
    } else {
      router.push('/lab-tests');
    }
    setLoading(false);
  }, [params.id, router]);

  const handleCallForInquiry = () => {
    if (test) {
      // Open phone dialer with lab contact number
      window.open(`tel:+923001234567`, '_self');
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blood': return Droplets;
      case 'heart': return Heart;
      case 'eye': return Eye;
      case 'brain': return Brain;
      case 'general': return Activity;
      default: return TestTube;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading test details...</p>
        </div>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Test not found</p>
          <Link href="/lab-tests" className="text-blue-600 hover:underline mt-2 block">
            Back to Lab Tests
          </Link>
        </div>
      </div>
    );
  }

  const CategoryIcon = getCategoryIcon(test.category);

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavbar showBackButton={true} backHref="/lab-tests" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/lab-tests" className="hover:text-blue-600">Lab Tests</Link>
          <span>/</span>
          <span className="text-gray-900">{test.name}</span>
        </nav>

        {/* Main Test Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Test Details */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <CategoryIcon className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {test.category.charAt(0).toUpperCase() + test.category.slice(1)} Test
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{test.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{test.detailedDescription}</p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <TestTube className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sample Type</p>
                    <p className="text-sm text-gray-600">{test.sampleType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Report Time</p>
                    <p className="text-sm text-gray-600">{test.reportTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Home className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Collection</p>
                    <p className="text-sm text-gray-600">{test.homeCollection ? 'Home Collection' : 'Lab Visit'}</p>
                  </div>
                </div>
              </div>

              {/* Preparation Instructions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation Instructions</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">{test.preparation}</p>
                      {test.fastingRequired && (
                        <p className="text-sm text-yellow-700 mt-1">
                          Fasting required: {test.fastingDuration}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing and Actions */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">Rs. {test.price}</span>
                    <span className="text-lg text-gray-500 line-through">Rs. {test.originalPrice}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {test.discount}% OFF
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Sample Collection</span>
                    <span className="font-medium">{test.homeCollection ? 'Home Collection' : 'Lab Visit'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Report Time</span>
                    <span className="font-medium">{test.reportTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Turnaround Time</span>
                    <span className="font-medium">{test.turnaroundTime}</span>
                  </div>
                </div>

                <button
                  onClick={handleCallForInquiry}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call for Inquiry</span>
                </button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Free cancellation up to 24 hours before appointment
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-green-800">
                      <Home className="h-4 w-4" />
                      <span className="text-xs font-medium">Home Collection Available</span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">
                      Our team will come to your home to collect samples
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What is Tested */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                What is Tested
              </h3>
              <ul className="space-y-2">
                {test.whatIsTested.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Get Tested */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Info className="h-5 w-5 text-blue-600 mr-2" />
                Why Get Tested
              </h3>
              <ul className="space-y-2">
                {test.whyGetTested.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Normal Range and Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Normal Range</h3>
              <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{test.normalRange}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Included Tests</h3>
              <div className="bg-gray-50 p-3 rounded-lg">
                {test.includedTests && test.includedTests.map((item, index) => (
                  <span key={index} className="inline-block bg-white px-2 py-1 rounded text-sm text-gray-700 mr-2 mb-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Laboratory Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">{test.labName}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{test.labAddress}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{test.labPhone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{test.labEmail}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">{test.rating}</span>
                <span className="text-gray-600">({test.reviews} reviews)</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Special Instructions</h3>
              {test.specialInstructions ? (
                <ul className="space-y-2">
                  {test.specialInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No special instructions required.</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Tests */}
        {test.relatedTests && test.relatedTests.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {test.relatedTests.map((relatedTest, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-2">{relatedTest}</h3>
                  <Link 
                    href={`/lab-tests/search?q=${encodeURIComponent(relatedTest)}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Test →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
