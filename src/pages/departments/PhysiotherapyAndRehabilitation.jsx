import DepartmentLayout from "./DepartmentLayout";

export default function PhysiotherapyAndRehabilitation() {
  return (
    <DepartmentLayout
      title="Physiotherapy & Rehabilitation"
      intro="This department focuses on restoring mobility, function, and independence through personalized rehabilitation programs."

      conditions={[
        "Post-Surgical Rehabilitation",
        "Stroke Recovery",
        "Sports Injuries",
        "Chronic Pain & Disability",
      ]}

      services={[
        "Physiotherapy",
        "Occupational Therapy",
        "Neurological Rehabilitation",
        "Sports Rehabilitation",
      ]}

      technologies={[
        "Electrotherapy Units",
        "Robotic Rehabilitation Systems",
      ]}

      doctors={[
        {
          name: "Dr. Rohit Batra",
          designation: "Rehabilitation Specialist",
          experience: "15+ years experience",
        },
      ]}
    />
  );
}
