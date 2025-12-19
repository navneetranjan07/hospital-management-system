import DepartmentLayout from "./DepartmentLayout";

export default function Orthopaedics() {
  return (
    <DepartmentLayout
      title="Orthopaedics"
      specialization="Orthopaedics"
      intro="Comprehensive care for bones, joints, and musculoskeletal system."

      conditions={[
        "Arthritis",
        "Sports Injuries",
        "Fractures",
        "Spine Disorders",
      ]}

      services={[
        "Joint Replacement",
        "Arthroscopy",
        "Trauma Surgery",
      ]}

      technologies={[
        "Robotic Joint Replacement",
        "Minimally Invasive Surgery",
      ]}
    />
  );
}
