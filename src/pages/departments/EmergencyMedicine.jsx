import DepartmentLayout from "./DepartmentLayout";

export default function EmergencyMedicine() {
  return (
    <DepartmentLayout
      title="Emergency Medicine"
      specialization="Emergency Medicine"
      intro="The Emergency Medicine department provides rapid, round-the-clock care for acute illnesses, injuries, and life-threatening conditions with a highly trained emergency response team."

      conditions={[
        "Trauma & Road Traffic Accidents",
        "Heart Attacks & Chest Pain",
        "Stroke & Neurological Emergencies",
        "Respiratory Distress",
        "Severe Infections & Sepsis",
        "Poisoning & Overdose",
        "Burn Injuries",
      ]}

      services={[
        "24x7 Emergency Care",
        "Advanced Trauma Life Support (ATLS)",
        "Cardiac & Stroke Emergency Response",
        "Emergency Airway Management",
        "Emergency Imaging & Diagnostics",
        "Rapid Triage & Stabilization",
      ]}

      technologies={[
        "Advanced Emergency Monitoring Systems",
        "Portable X-Ray & Ultrasound",
        "Point-of-Care Diagnostics",
        "Fully Equipped Resuscitation Bays",
        "High-Dependency Emergency Units",
      ]}
    />
  );
}
