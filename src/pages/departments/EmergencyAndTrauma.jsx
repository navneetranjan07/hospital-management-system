import DepartmentLayout from "./DepartmentLayout";

export default function EmergencyAndTrauma() {
  return (
    <DepartmentLayout
      title="Emergency & Trauma"
      intro="Emergency & Trauma services operate 24x7 to provide immediate and life-saving care for accidents and medical emergencies."

      conditions={[
        "Road Traffic Accidents",
        "Cardiac Emergencies",
        "Stroke",
        "Poisoning",
        "Polytrauma",
      ]}

      services={[
        "24x7 Emergency Services",
        "Advanced Trauma Life Support",
        "Emergency Surgeries",
      ]}

      technologies={[
        "Fully Equipped Trauma Bays",
        "Rapid Imaging Support",
      ]}

      doctors={[
        {
          name: "Dr. Rakesh Gupta",
          designation: "Emergency Medicine Specialist",
          experience: "18+ years experience",
        },
      ]}
    />
  );
}
