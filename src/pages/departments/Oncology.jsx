import DepartmentLayout from "./DepartmentLayout";

export default function Oncology() {
  return (
    <DepartmentLayout
      title="Oncology"
      specialization="Oncology"
      intro="Advanced cancer diagnosis, treatment, and supportive care."

      services={[
        "Chemotherapy",
        "Radiation Therapy",
        "Cancer Surgery",
      ]}
    />
  );
}
