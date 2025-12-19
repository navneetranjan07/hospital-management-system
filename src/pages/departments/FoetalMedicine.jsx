import DepartmentLayout from "./DepartmentLayout";

export default function FoetalMedicine() {
  return (
    <DepartmentLayout
      title="Foetal Medicine"
      specialization="Foetal Medicine"
      intro="The Foetal Medicine department focuses on the health of the unborn baby, offering advanced prenatal diagnostics, monitoring, and interventions to ensure the best outcomes for both mother and child."

      conditions={[
        "High-Risk Pregnancy",
        "Foetal Growth Restriction (IUGR)",
        "Congenital Anomalies",
        "Genetic & Chromosomal Disorders",
        "Multiple Pregnancies",
        "Maternal Medical Disorders Affecting Pregnancy",
      ]}

      services={[
        "Advanced Foetal Ultrasound & Doppler",
        "Prenatal Genetic Screening & Counselling",
        "Foetal Echocardiography",
        "Amniocentesis & CVS",
        "High-Risk Pregnancy Monitoring",
      ]}

      technologies={[
        "4D & Level-II Ultrasound",
        "Advanced Foetal Monitoring Systems",
        "Prenatal Genetic Testing Labs",
        "Multidisciplinary Foetal Care Units",
      ]}
    />
  );
}
