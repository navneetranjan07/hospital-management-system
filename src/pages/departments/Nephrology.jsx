import DepartmentLayout from "./DepartmentLayout";

export default function Nephrology() {
  return (
    <DepartmentLayout
      title="Nephrology"
      specialization="Nephrology"
      intro="Specialized kidney care including dialysis and transplant support."

      services={[
        "Hemodialysis",
        "Peritoneal Dialysis",
        "Kidney Disease Management",
      ]}
    />
  );
}
