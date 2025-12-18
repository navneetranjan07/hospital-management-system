import DepartmentLayout from "./DepartmentLayout";

export default function InternalMedicine() {
  return (
    <DepartmentLayout
      title="Internal Medicine"
      intro="Internal Medicine provides comprehensive adult healthcare focusing on prevention, diagnosis, and non-surgical treatment of diseases."

      conditions={[
        "Diabetes",
        "Hypertension",
        "Infections",
        "Chronic Diseases",
      ]}

      services={[
        "Preventive Health Checkups",
        "Chronic Disease Management",
        "Lifestyle Medicine",
      ]}

      technologies={[
        "Advanced Diagnostic Support",
        "Integrated Care Pathways",
      ]}

      doctors={[
        {
          name: "Dr. Arvind Gupta",
          designation: "Senior Physician",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
