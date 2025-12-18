import DepartmentLayout from "./DepartmentLayout";

export default function Dermatology() {
  return (
    <DepartmentLayout
      title="Dermatology"
      intro="Dermatology department offers medical, surgical, and cosmetic treatments for skin, hair, and nail disorders."

      conditions={[
        "Acne & Scarring",
        "Psoriasis",
        "Eczema",
        "Hair Loss",
        "Skin Infections",
        "Pigmentation Disorders",
      ]}

      services={[
        "Medical Dermatology",
        "Laser Treatments",
        "Cosmetic Dermatology",
        "Hair Transplantation",
      ]}

      technologies={[
        "Laser Therapy Systems",
        "Digital Dermoscopy",
        "Advanced Cosmetic Equipment",
      ]}

      doctors={[
        {
          name: "Dr. Rashmi Shetty",
          designation: "Senior Dermatologist",
          experience: "20+ years experience",
        },
      ]}
    />
  );
}
