import DepartmentLayout from "./DepartmentLayout";

export default function Pulmonology() {
  return (
    <DepartmentLayout
      title="Pulmonology"
      specialization="Pulmonology"
      intro="Diagnosis and treatment of lung and respiratory disorders."

      services={[
        "Bronchoscopy",
        "Sleep Studies",
        "Asthma & COPD Management",
      ]}
    />
  );
}
