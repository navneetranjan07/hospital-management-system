import DepartmentLayout from "./DepartmentLayout";

export default function PainAndPalliativeMedicine() {
  return (
    <DepartmentLayout
      title="Pain & Palliative Medicine"
      specialization="Pain & Palliative Medicine"
      intro="The Pain & Palliative Medicine department focuses on relieving pain, improving comfort, and enhancing quality of life for patients with chronic, serious, and life-limiting illnesses through compassionate and multidisciplinary care."

      conditions={[
        "Chronic Cancer Pain",
        "Neuropathic Pain",
        "Musculoskeletal Pain",
        "End-of-Life Care Needs",
        "Advanced Organ Failure",
        "Post-Surgical Chronic Pain",
      ]}

      services={[
        "Comprehensive Pain Management",
        "Cancer Pain Relief Programs",
        "Palliative Care Consultation",
        "Symptom Control & Supportive Care",
        "Psychological & Emotional Support",
        "Home-Based Palliative Care",
      ]}

      technologies={[
        "Ultrasound-Guided Pain Interventions",
        "Nerve Block Procedures",
        "Patient-Controlled Analgesia (PCA)",
        "Advanced Pain Monitoring Tools",
        "Multidisciplinary Care Platforms",
      ]}
    />
  );
}
