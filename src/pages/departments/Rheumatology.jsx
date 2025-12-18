import DepartmentLayout from "./DepartmentLayout";

export default function Rheumatology() {
  return (
    <DepartmentLayout
      title="Rheumatology"
      intro="Rheumatology focuses on the diagnosis and management of autoimmune and musculoskeletal disorders affecting joints, muscles, and connective tissues."

      conditions={[
        "Rheumatoid Arthritis",
        "Osteoarthritis",
        "Lupus (SLE)",
        "Ankylosing Spondylitis",
        "Gout",
      ]}

      services={[
        "Autoimmune Disease Management",
        "Joint Injection Therapy",
        "Biologic Therapy",
        "Pain & Mobility Clinics",
      ]}

      technologies={[
        "Advanced Immunology Labs",
        "Ultrasound Guided Joint Procedures",
      ]}

      doctors={[
        {
          name: "Dr. Ramnath Misra",
          designation: "Senior Rheumatologist",
          experience: "28+ years experience",
        },
      ]}
    />
  );
}
