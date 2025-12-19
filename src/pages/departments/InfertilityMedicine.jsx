import DepartmentLayout from "./DepartmentLayout";

export default function InfertilityMedicine() {
  return (
    <DepartmentLayout
      title="Infertility Medicine"
      specialization="Infertility Medicine"
      intro="The Infertility Medicine department provides comprehensive evaluation and advanced treatments for couples facing fertility challenges, combining medical expertise with compassionate care."

      conditions={[
        "Male Infertility",
        "Female Infertility",
        "Polycystic Ovary Syndrome (PCOS)",
        "Endometriosis",
        "Ovulation Disorders",
        "Unexplained Infertility",
      ]}

      services={[
        "Fertility Assessment & Counseling",
        "IVF & ICSI Treatments",
        "IUI (Intrauterine Insemination)",
        "Ovulation Induction Therapy",
        "Fertility Preservation",
      ]}

      technologies={[
        "Advanced IVF Labs",
        "Embryo Freezing & Cryopreservation",
        "Ultrasound-Guided Procedures",
        "Hormonal & Genetic Testing",
      ]}
    />
  );
}
