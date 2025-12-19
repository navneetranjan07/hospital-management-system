import DepartmentLayout from "./DepartmentLayout";

export default function TransfusionMedicine() {
  return (
    <DepartmentLayout
      title="Transfusion Medicine"
      specialization="Transfusion Medicine"
      intro="The Transfusion Medicine department ensures safe, timely, and effective blood and blood component services, supporting critical care, surgeries, oncology, and emergency medicine with stringent quality and safety standards."

      conditions={[
        "Anemia & Blood Disorders",
        "Massive Blood Loss",
        "Bleeding Disorders",
        "Thalassemia & Hemoglobinopathies",
        "Oncology-Related Transfusions",
        "Pre- and Post-Surgical Transfusion Needs",
      ]}

      services={[
        "Blood & Blood Component Transfusions",
        "Apheresis Services",
        "Compatibility Testing & Cross-Matching",
        "Massive Transfusion Protocols",
        "Therapeutic Plasma Exchange",
        "Donor Screening & Counseling",
      ]}

      technologies={[
        "Automated Blood Grouping & Screening",
        "Apheresis Machines",
        "Component Separation Units",
        "Cold Chain Storage & Monitoring",
        "Quality-Controlled Blood Bank Systems",
      ]}
    />
  );
}
