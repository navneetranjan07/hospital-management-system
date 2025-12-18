import DepartmentLayout from "./DepartmentLayout";

export default function GeriatricMedicine() {
  return (
    <DepartmentLayout
      title="Geriatric Medicine"
      intro="Geriatric Medicine provides specialized care for elderly patients focusing on chronic disease management and quality of life."

      conditions={[
        "Arthritis",
        "Dementia",
        "Osteoporosis",
        "Diabetes in Elderly",
      ]}

      services={[
        "Comprehensive Geriatric Assessment",
        "Fall Prevention Programs",
        "Memory Clinics",
      ]}

      technologies={[
        "Multidisciplinary Care Teams",
        "Remote Monitoring",
      ]}

      doctors={[
        {
          name: "Dr. S. K. Gupta",
          designation: "Senior Geriatric Physician",
          experience: "22+ years experience",
        },
      ]}
    />
  );
}
