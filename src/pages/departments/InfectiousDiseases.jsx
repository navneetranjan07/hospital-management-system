import DepartmentLayout from "./DepartmentLayout";

export default function FoetalMedicine() {
  return (
    <DepartmentLayout
      title="Foetal Medicine"
      intro="Foetal Medicine focuses on monitoring, diagnosing, and managing high-risk pregnancies and foetal abnormalities with advanced prenatal care."

      conditions={[
        "High-Risk Pregnancy",
        "Foetal Growth Restriction",
        "Congenital Foetal Anomalies",
        "Multiple Pregnancies",
      ]}

      services={[
        "Detailed Anomaly Scan",
        "Foetal Echocardiography",
        "Prenatal Genetic Screening",
        "Invasive Foetal Procedures",
      ]}

      technologies={[
        "High-Resolution Ultrasound",
        "3D / 4D Foetal Imaging",
        "Advanced Prenatal Diagnostic Labs",
      ]}

      doctors={[
        {
          name: "Dr. Sangeeta Gomes",
          designation: "Foetal Medicine Specialist",
          experience: "18+ years experience",
        },
      ]}
    />
  );
}
