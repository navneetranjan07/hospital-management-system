import DepartmentLayout from "./DepartmentLayout";

export default function PlasticAndReconstructiveSurgery() {
  return (
    <DepartmentLayout
      title="Plastic & Reconstructive Surgery"
      specialization="Plastic & Reconstructive Surgery"
      intro="The Plastic & Reconstructive Surgery department offers advanced cosmetic and reconstructive procedures to restore form, function, and confidence using modern surgical techniques and personalized care."

      conditions={[
        "Congenital Deformities",
        "Burn Injuries & Scars",
        "Facial Trauma",
        "Post-Cancer Reconstruction",
        "Hand & Microsurgery Conditions",
        "Skin & Soft Tissue Defects",
      ]}

      services={[
        "Reconstructive Surgery",
        "Cosmetic & Aesthetic Procedures",
        "Burn Reconstruction",
        "Hand & Microsurgery",
        "Scar Revision & Skin Grafting",
        "Post-Oncology Reconstruction",
      ]}

      technologies={[
        "Microsurgical Operating Systems",
        "Laser & Aesthetic Technology",
        "Advanced Burn Care Units",
        "3D Surgical Planning",
        "Minimally Invasive Cosmetic Tools",
      ]}
    />
  );
}
