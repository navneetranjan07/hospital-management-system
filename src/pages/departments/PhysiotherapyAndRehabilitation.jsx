import DepartmentLayout from "./DepartmentLayout";

export default function PhysiotherapyAndRehabilitation() {
  return (
    <DepartmentLayout
      title="Physiotherapy & Rehabilitation"
      specialization="Physiotherapy & Rehabilitation"
      intro="The Physiotherapy & Rehabilitation department focuses on restoring movement, strength, and functional independence through personalized therapy programs, modern equipment, and expert rehabilitation specialists."

      conditions={[
        "Post-Surgical Rehabilitation",
        "Stroke Rehabilitation",
        "Sports Injuries",
        "Chronic Back & Neck Pain",
        "Joint Replacement Recovery",
        "Neurological Rehabilitation",
      ]}

      services={[
        "Orthopaedic Physiotherapy",
        "Neurological Rehabilitation",
        "Sports Injury Rehabilitation",
        "Post-Fracture Recovery",
        "Pain Management Therapy",
        "Geriatric Rehabilitation",
      ]}

      technologies={[
        "Electrotherapy & Ultrasound Therapy",
        "Robotic-Assisted Rehabilitation",
        "Gait Training Systems",
        "Advanced Exercise & Strength Equipment",
        "Functional Movement Assessment Tools",
      ]}
    />
  );
}
