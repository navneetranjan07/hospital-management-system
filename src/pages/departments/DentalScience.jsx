import DepartmentLayout from "./DepartmentLayout";

export default function DentalScience() {
  return (
    <DepartmentLayout
      title="Dental Science"
      specialization="Dental Science"
      intro="Comprehensive dental care including preventive, restorative, and cosmetic dentistry."

      services={[
        "Root Canal Treatment",
        "Dental Implants",
        "Cosmetic Dentistry",
        "Oral Surgery",
      ]}
    />
  );
}
