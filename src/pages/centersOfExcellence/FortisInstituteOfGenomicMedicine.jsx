import React from 'react';

const FortisInstituteOfGenomicMedicine = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Fortis Institute of Genomic Medicine</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Fortis Institute of Genomic Medicine focuses on genomic research and personalized medicine, utilizing genetic information to tailor treatments for better patient outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Areas</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Genomic sequencing</li>
            <li>Personalized medicine</li>
            <li>Genetic counseling</li>
            <li>Research and development</li>
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

export default FortisInstituteOfGenomicMedicine;
