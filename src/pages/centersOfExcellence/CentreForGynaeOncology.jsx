import React from 'react';

const CentreForGynaeOncology = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Centre for Gynae Oncology</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Centre for Gynae Oncology specializes in the diagnosis and treatment of gynecological cancers, providing comprehensive care with a focus on women's health.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Cancer screening and diagnosis</li>
            <li>Surgical interventions</li>
            <li>Chemotherapy and radiation</li>
            <li>Supportive care and counseling</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600">For more details, please contact our center directly.</p>
        </div>
      </div>
    </div>
  );
};

export default CentreForGynaeOncology;
