import DepartmentLayout from "./DepartmentLayout";

export default function Pulmonology() {
  return (
    <DepartmentLayout
      title="Pulmonology"
      intro="Pulmonology provides comprehensive care for lung and respiratory disorders using advanced diagnostics."

      conditions={[
        "Asthma",
        "COPD",
        "Tuberculosis",
        "Sleep Apnea",
        "Interstitial Lung Disease",
      ]}

      services={[
        "Pulmonary Function Testing",
        "Bronchoscopy",
        "Sleep Studies",
        "Respiratory ICU Care",
      ]}

      technologies={[
        "Advanced Bronchoscopy Suites",
        "Sleep Labs",
        "Ventilatory Support Systems",
      ]}

      doctors={[
        {
          name: "Dr. Rajesh Chawla",
          designation: "Senior Pulmonologist",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
