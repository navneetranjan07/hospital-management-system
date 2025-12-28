import React from 'react';

const HealthCheckup = () => {
  const packages = [
    {
      id: 1,
      title: "Executive Health Checkup",
      description: "A comprehensive health screening package designed for busy professionals to monitor overall health and detect potential issues early.",
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Thyroid Profile",
        "ECG",
        "Chest X-Ray",
        "Ultrasound Abdomen",
        "PSA (for men) / Pap Smear (for women)",
        "Consultation with Physician"
      ],
      price: "₹5,999",
      duration: "1 Day"
    },
    {
      id: 2,
      title: "Whole Body Health Checkup",
      description: "An extensive evaluation covering all major organ systems for a thorough assessment of your health status.",
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Thyroid Profile",
        "ECG",
        "Chest X-Ray",
        "Ultrasound Abdomen & Pelvis",
        "Mammography (for women)",
        "DEXA Scan (Bone Density)",
        "Cardiac Stress Test",
        "Consultation with Specialist"
      ],
      price: "₹12,499",
      duration: "2 Days"
    },
    {
      id: 3,
      title: "Well Woman Health Checkup",
      description: "Tailored for women, this package focuses on gynecological health, hormonal balance, and preventive screening for common women's health issues.",
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Thyroid Profile",
        "Pap Smear",
        "Mammography",
        "Ultrasound Pelvis",
        "Hormone Profile (FSH, LH, Estrogen, Progesterone)",
        "Bone Density (DEXA)",
        "Gynecologist Consultation"
      ],
      price: "₹8,999",
      duration: "1 Day"
    },
    {
      id: 4,
      title: "Well Man Health Checkup",
      description: "Comprehensive screening for men, emphasizing cardiac health, prostate screening, and overall vitality.",
      tests: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Thyroid Profile",
        "PSA Test",
        "ECG",
        "Chest X-Ray",
        "Ultrasound Abdomen",
        "Testosterone Levels",
        "Urologist Consultation"
      ],
      price: "₹7,499",
      duration: "1 Day"
    },
    {
      id: 5,
      title: "Diabetic Health Checkup",
      description: "Specialized package for diabetes management and monitoring complications.",
      tests: [
        "HbA1c",
        "Fasting & Post Prandial Blood Sugar",
        "Lipid Profile",
        "Kidney Function Test (KFT)",
        "Urine Routine & Microalbumin",
        "Eye Examination (Fundus)",
        "Foot Examination",
        "ECG",
        "Consultation with Diabetologist"
      ],
      price: "₹4,499",
      duration: "Half Day"
    },
    {
      id: 6,
      title: "Heart Health Checkup",
      description: "Focused on cardiovascular risk assessment and early detection of heart diseases.",
      tests: [
        "Lipid Profile",
        "ECG",
        "Stress Test (TMT)",
        "Echocardiogram",
        "Chest X-Ray",
        "Blood Sugar",
        "Kidney Function Test",
        "HsCRP (Inflammation Marker)",
        "Cardiologist Consultation"
      ],
      price: "₹6,999",
      duration: "1 Day"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Checkup Packages</h1>
          <p className="text-xl text-gray-600">
            Invest in your health with our comprehensive preventive health screening packages. 
            Early detection is key to a healthier life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  {pkg.tests.slice(0, 5).map((test, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {test}
                    </li>
                  ))}
                  {pkg.tests.length > 5 && (
                    <li className="text-blue-600 font-medium">... and {pkg.tests.length - 5} more tests</li>
                  )}
                </ul>
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-sm text-gray-500">{pkg.duration}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Health Checkups?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Screening</h3>
              <p className="text-gray-600">State-of-the-art tests covering all major health parameters.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
              <p className="text-gray-600">Personalized reports and recommendations from top specialists.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Convenient Booking</h3>
              <p className="text-gray-600">Easy online booking with flexible appointment slots.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Ready to Take Control of Your Health?</h2>
          <p className="text-gray-600 text-center mb-6">Book your health checkup today and get peace of mind.</p>
          <div className="text-center">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold">
              Book Health Checkup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckup;
