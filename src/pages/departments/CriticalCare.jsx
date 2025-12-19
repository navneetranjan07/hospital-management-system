import DepartmentLayout from "./DepartmentLayout";

export default function CriticalCare() {
  return (
    <DepartmentLayout
      title="Critical Care"
      specialization="Critical Care"
      intro="The Critical Care department provides 24/7 life-saving treatment for critically ill patients with advanced intensive care facilities and highly trained specialists."

      conditions={[
        "Sepsis",
        "Multi-Organ Failure",
        "Acute Respiratory Distress Syndrome (ARDS)",
        "Severe Infections",
        "Post-operative Critical Care",
      ]}

      services={[
        "24/7 Intensive Care Unit (ICU)",
        "Ventilator Support",
        "Advanced Cardiac & Hemodynamic Monitoring",
        "Emergency Resuscitation",
        "Post-Surgical Intensive Care",
      ]}

      technologies={[
        "Advanced Multi-Parameter Monitors",
        "Mechanical Ventilators",
        "Bedside Ultrasound",
        "ECMO Support",
        "Automated Infusion Pumps",
      ]}
    />
  );
}
