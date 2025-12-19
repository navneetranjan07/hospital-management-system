import DepartmentLayout from "./DepartmentLayout";

export default function Haematology() {
  return (
    <DepartmentLayout
      title="Haematology"
      specialization="Haematology"
      intro="Diagnosis and treatment of blood disorders."

      services={[
        "Anemia Treatment",
        "Blood Cancer Care",
        "Bone Marrow Disorders",
      ]}
    />
  );
}
