import DepartmentLayout from "./DepartmentLayout";

export default function PalliativeMedicine() {
  return (
    <DepartmentLayout
      title="Palliative Medicine"
      intro="The Palliative Medicine department focuses on improving quality of life for patients with serious or life-limiting illnesses through comprehensive symptom management and emotional support."

      conditions={[
        "Advanced Cancer",
        "Chronic Organ Failure",
        "Severe Neurological Conditions",
        "End-of-Life Care Needs",
      ]}

      services={[
        "Pain & Symptom Management",
        "Psychological & Emotional Support",
        "Home-Based Palliative Care",
        "Family Counseling",
      ]}

      technologies={[
        "Multidisciplinary Care Teams",
        "Advanced Pain Management Protocols",
      ]}

      doctors={[
        {
          name: "Dr. Anil Kumar",
          designation: "Palliative Care Specialist",
          experience: "20+ years experience",
        },
      ]}
    />
  );
}
