import DepartmentLayout from "./DepartmentLayout";

export default function InfertilityMedicine() {
  return (
    <DepartmentLayout
      title="Infertility Medicine"
      intro="Our Infertility Medicine department offers advanced reproductive care with ethical, personalized treatment plans for couples."

      conditions={[
        "Male Infertility",
        "Female Infertility",
        "PCOS",
        "Endometriosis",
        "Unexplained Infertility",
      ]}

      services={[
        "IVF & ICSI",
        "IUI",
        "Fertility Preservation",
        "Recurrent Pregnancy Loss Treatment",
      ]}

      technologies={[
        "Advanced IVF Labs",
        "Laser Assisted Hatching",
        "Time-lapse Embryo Monitoring",
      ]}

      doctors={[
        {
          name: "Dr. Neelam Bhardwaj",
          designation: "Senior IVF Specialist",
          experience: "20+ years experience",
        },
      ]}
    />
  );
}
