import DepartmentLayout from "./DepartmentLayout";

export default function Paediatrics() {
  return (
    <DepartmentLayout
      title="Paediatrics"
      specialization="Paediatrics"
      intro="Comprehensive healthcare for infants, children, and adolescents."

      services={[
        "Child Vaccination",
        "Growth Monitoring",
        "Pediatric ICU",
      ]}
    />
  );
}
