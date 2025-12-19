import DepartmentLayout from "./DepartmentLayout";

export default function Cardiology() {
  return (
    <DepartmentLayout
      title="Cardiology"
      specialization="Cardiology"
      intro="Advanced cardiology services focused on heart health."

      conditions={[
        "Hypertension",
        "Heart Attacks",
        "Arrhythmias",
      ]}

      services={[
        "ECG & Echo",
        "Angioplasty",
        "Preventive Cardiology",
      ]}

      technologies={[
        "Digital Cath Lab",
        "Cardiac MRI",
      ]}
    />
  );
}
