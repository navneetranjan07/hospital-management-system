import DepartmentLayout from "./DepartmentLayout";

export default function Orthopaedics() {
  return (
    <DepartmentLayout
      title="Orthopaedics"
      intro="Orthopaedics provides advanced care for bone, joint, spine, and musculoskeletal disorders using modern surgical and non-surgical techniques."

      conditions={[
        "Arthritis",
        "Joint Injuries",
        "Spine Disorders",
        "Sports Injuries",
        "Fractures & Trauma",
      ]}

      services={[
        "Joint Replacement Surgery",
        "Arthroscopic Surgery",
        "Spine Surgery",
        "Sports Injury Management",
      ]}

      technologies={[
        "Robotic Joint Replacement",
        "Advanced Arthroscopy Systems",
      ]}

      doctors={[
        {
          name: "Dr. Ashok Rajgopal",
          designation: "Senior Orthopaedic Surgeon",
          experience: "35+ years experience",
        },
      ]}
    />
  );
}
