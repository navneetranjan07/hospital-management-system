import DepartmentLayout from "./DepartmentLayout";

export default function CriticalCare() {
  return (
    <DepartmentLayout
      title="Critical Care"
      intro="The Critical Care department provides round-the-clock intensive care for critically ill patients using advanced monitoring and life-support systems."

      conditions={[
        "Sepsis",
        "Respiratory Failure",
        "Multi-Organ Failure",
        "Post-Surgical Critical Care",
      ]}

      services={[
        "24x7 Intensive Care Units",
        "Ventilator Support",
        "Advanced Life Support",
      ]}

      technologies={[
        "High-End ICU Monitoring",
        "Advanced Ventilation Systems",
      ]}

      doctors={[
        {
          name: "Dr. Pradeep Rangappa",
          designation: "Critical Care Specialist",
          experience: "20+ years experience",
        },
      ]}
    />
  );
}
