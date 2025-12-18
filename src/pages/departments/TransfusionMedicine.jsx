import DepartmentLayout from "./DepartmentLayout";

export default function TransfusionMedicine() {
  return (
    <DepartmentLayout
      title="Transfusion Medicine"
      intro="The Transfusion Medicine department ensures safe, timely, and effective blood and blood component services."

      conditions={[
        "Severe Anemia",
        "Blood Loss Emergencies",
        "Bleeding Disorders",
        "Cancer-related Transfusions",
      ]}

      services={[
        "Blood Component Therapy",
        "Apheresis Services",
        "Pre-Transfusion Testing",
        "Blood Donation Programs",
      ]}

      technologies={[
        "Automated Blood Analyzers",
        "Component Separation Units",
        "Blood Storage Monitoring Systems",
      ]}

      doctors={[
        {
          name: "Dr. Meena Kapoor",
          designation: "Transfusion Medicine Specialist",
          experience: "18+ years experience",
        },
      ]}
    />
  );
}
