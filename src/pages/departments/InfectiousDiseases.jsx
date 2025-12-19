import DepartmentLayout from "./DepartmentLayout";

export default function FoetalMedicine() {
  return (
    <DepartmentLayout
      title="Foetal Medicine"
      specialization="Foetal Medicine"
      intro="The Foetal Medicine department focuses on advanced prenatal diagnosis, monitoring, and management of high-risk pregnancies to ensure the best outcomes for both mother and baby."

      conditions={[
        "High-Risk Pregnancy",
        "Foetal Growth Restriction",
        "Congenital Anomalies",
        "Multiple Pregnancies",
        "Gestational Diabetes Complications",
        "Foetal Genetic Disorders",
      ]}

      services={[
        "Advanced Foetal Ultrasound & Doppler",
        "Prenatal Genetic Counseling",
        "Invasive Prenatal Procedures (Amniocentesis, CVS)",
        "High-Risk Pregnancy Monitoring",
        "Foetal Wellbeing Assessment",
      ]}

      technologies={[
        "4D & Level II Ultrasound",
        "Foetal Doppler Studies",
        "Prenatal Diagnostic Labs",
        "Foetal Monitoring Systems",
      ]}
    />
  );
}
