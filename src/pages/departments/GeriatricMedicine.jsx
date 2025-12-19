import DepartmentLayout from "./DepartmentLayout";

export default function GeriatricMedicine() {
  return (
    <DepartmentLayout
      title="Geriatric Medicine"
      specialization="Geriatric Medicine"
      intro="The Geriatric Medicine department focuses on comprehensive healthcare for elderly patients, addressing age-related medical conditions with a holistic, compassionate, and multidisciplinary approach to improve quality of life and functional independence."

      conditions={[
        "Age-Related Chronic Diseases",
        "Dementia & Alzheimer's Disease",
        "Osteoporosis",
        "Arthritis & Joint Disorders",
        "Falls & Balance Disorders",
        "Multiple Co-morbidities",
      ]}

      services={[
        "Comprehensive Geriatric Assessment",
        "Chronic Disease Management",
        "Memory & Cognitive Care",
        "Fall Prevention Programs",
        "Medication Review & Optimization",
        "Palliative & Supportive Care",
      ]}

      technologies={[
        "Advanced Geriatric Monitoring Systems",
        "Bone Density (DEXA) Scanning",
        "Cognitive Assessment Tools",
        "Rehabilitation & Mobility Aids",
        "Integrated Elderly Care Clinics",
      ]}
    />
  );
}
