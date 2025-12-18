import DepartmentLayout from "./DepartmentLayout";

export default function Haematology() {
  return (
    <DepartmentLayout
      title="Haematology"
      intro="The Haematology department manages disorders related to blood, bone marrow, and lymphatic system with comprehensive diagnostic and therapeutic services."

      conditions={[
        "Anemia",
        "Leukemia",
        "Lymphoma",
        "Bleeding Disorders",
        "Thalassemia",
      ]}

      services={[
        "Bone Marrow Examination",
        "Chemotherapy Support",
        "Blood Disorder Clinics",
        "Stem Cell Transplant Support",
      ]}

      technologies={[
        "Advanced Hematology Analyzers",
        "Flow Cytometry",
        "Bone Marrow Labs",
      ]}

      doctors={[
        {
          name: "Dr. Rahul Bhargava",
          designation: "Hematologist",
          experience: "18+ years experience",
        },
      ]}
    />
  );
}
