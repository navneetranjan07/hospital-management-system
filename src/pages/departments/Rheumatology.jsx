import DepartmentLayout from "./DepartmentLayout";

export default function Rheumatology() {
  return (
    <DepartmentLayout
      title="Rheumatology"
      specialization="Rheumatology"
      intro="Treatment of autoimmune and musculoskeletal disorders."

      conditions={[
        "Rheumatoid Arthritis",
        "Lupus",
        "Osteoarthritis",
      ]}
    />
  );
}
