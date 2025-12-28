import React from 'react';

const FortisCancerInstitute = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Fortis Cancer Institute</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Fortis Cancer Institute is dedicated to providing world-class cancer care, from prevention and early detection to advanced treatment and rehabilitation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Specializations</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Oncology treatments</li>
            <li>Radiation therapy</li>
            <li>Chemotherapy</li>
            <li>Supportive oncology</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600">For more details, please contact our institute directly.</p>
        </div>
      </div>
    </div>
  );
};

export default FortisCancerInstitute;
