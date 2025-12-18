import DepartmentLayout from "./DepartmentLayout";

export default function PlasticAndReconstructiveSurgery() {
  return (
    <DepartmentLayout
      title="Plastic & Reconstructive Surgery"
      intro="This department provides reconstructive and cosmetic surgery services to restore function, appearance, and confidence."

      conditions={[
        "Burn Injuries",
        "Congenital Deformities",
        "Post-Trauma Reconstruction",
        "Cosmetic Concerns",
      ]}

      services={[
        "Reconstructive Surgery",
        "Cosmetic Surgery",
        "Microsurgery",
      ]}

      technologies={[
        "Advanced Microsurgical Tools",
        "Laser Cosmetic Equipment",
      ]}

      doctors={[
        {
          name: "Dr. Mukund Jagannathan",
          designation: "Plastic Surgeon",
          experience: "20+ years experience",
        },
      ]}
    />
  );
}
