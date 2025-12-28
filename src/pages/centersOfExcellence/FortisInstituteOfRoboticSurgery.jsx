import React from 'react';

const FortisInstituteOfRoboticSurgery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Fortis Institute of Robotic Surgery</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to the Fortis Institute of Robotic Surgery. This institute specializes in advanced robotic surgical procedures, offering minimally invasive treatments with precision and care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Expertise</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Robotic-assisted surgeries</li>
            <li>Minimally invasive procedures</li>
            <li>Advanced surgical technologies</li>
            <li>Patient-centered care</li>
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

export default FortisInstituteOfRoboticSurgery;
