import DepartmentLayout from "./DepartmentLayout";

export default function PainAndPalliativeMedicine() {
  return (
    <DepartmentLayout
      title="Pain & Palliative Medicine"
      intro="Focused on improving quality of life through pain relief, symptom management, and emotional support."

      conditions={[
        "Cancer Pain",
        "Chronic Back Pain",
        "Neuropathic Pain",
        "End-of-Life Care Needs",
      ]}

      services={[
        "Pain Management Clinics",
        "Nerve Blocks",
        "Palliative Care Support",
        "Home-Based Care",
      ]}

      technologies={[
        "Ultrasound Guided Pain Procedures",
        "Multidisciplinary Palliative Teams",
      ]}

      doctors={[
        {
          name: "Dr. Anil Kumar",
          designation: "Pain & Palliative Care Specialist",
          experience: "18+ years experience",
        },
      ]}
    />
  );
}
