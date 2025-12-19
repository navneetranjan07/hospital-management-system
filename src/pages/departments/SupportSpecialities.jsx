import DepartmentLayout from "./DepartmentLayout";

export default function SupportSpecialities() {
  return (
    <DepartmentLayout
      title="Support Specialities"
      specialization="Support Specialities"
      intro="Essential medical support services for accurate diagnosis and recovery."

      services={[
        "Physiotherapy",
        "Nutrition & Dietetics",
        "Radiology",
      ]}
    />
  );
}
