import DepartmentLayout from "./DepartmentLayout";

export default function EmergencyAndTrauma() {
  return (
    <DepartmentLayout
      title="Emergency & Trauma"
      specialization="Emergency & Trauma"
      intro="24/7 emergency services with rapid response trauma care."

      services={[
        "Accident & Trauma Care",
        "Critical Emergency Response",
      ]}
    />
  );
}
