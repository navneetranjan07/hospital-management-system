import DepartmentLayout from "./DepartmentLayout";

export default function Ophthalmology() {
  return (
    <DepartmentLayout
      title="Ophthalmology"
      intro="Comprehensive eye care services covering medical, surgical, and preventive ophthalmology."

      conditions={[
        "Cataract",
        "Glaucoma",
        "Diabetic Retinopathy",
        "Macular Degeneration",
        "Refractive Errors",
      ]}

      services={[
        "Cataract Surgery (Phaco)",
        "LASIK & Refractive Surgery",
        "Retinal Treatments",
        "Pediatric Ophthalmology",
      ]}

      technologies={[
        "Optical Coherence Tomography (OCT)",
        "Femto Laser Surgery",
        "Digital Fundus Imaging",
      ]}

      doctors={[
        {
          name: "Dr. Namrata Sharma",
          designation: "Senior Ophthalmologist",
          experience: "25+ years experience",
        },
      ]}
    />
  );
}
