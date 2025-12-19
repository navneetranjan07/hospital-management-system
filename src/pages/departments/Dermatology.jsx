import DepartmentLayout from "./DepartmentLayout";

export default function Dermatology() {
  return (
    <DepartmentLayout
      title="Dermatology"
      specialization="Dermatology"
      intro="The Dermatology department offers comprehensive care for skin, hair, and nail disorders with advanced medical and cosmetic dermatology services."

      conditions={[
        "Acne & Acne Scars",
        "Psoriasis",
        "Eczema & Dermatitis",
        "Vitiligo",
        "Skin Infections",
        "Hair Fall & Alopecia",
        "Skin Allergies",
      ]}

      services={[
        "Medical Dermatology",
        "Cosmetic Dermatology",
        "Laser Skin Treatments",
        "Chemical Peels",
        "Skin Biopsy",
        "Hair & Scalp Treatments",
      ]}

      technologies={[
        "Advanced Laser Therapy",
        "Dermatoscopy",
        "Phototherapy (UV Therapy)",
        "Cryotherapy",
        "Radiofrequency Skin Tightening",
      ]}
    />
  );
}
