import DepartmentLayout from "./DepartmentLayout";

export default function Paediatrics() {
  return (
    <DepartmentLayout
      title="Paediatrics"
      intro="Paediatrics offers specialized healthcare for infants, children, and adolescents with compassionate and family-centered care."

      conditions={[
        "Newborn Care",
        "Childhood Infections",
        "Growth & Development Issues",
        "Pediatric Asthma",
      ]}

      services={[
        "Neonatal ICU (NICU)",
        "Vaccination Programs",
        "Child Development Clinics",
      ]}

      technologies={[
        "Advanced NICU Facilities",
        "Pediatric Monitoring Systems",
      ]}

      doctors={[
        {
          name: "Dr. Anita Saxena",
          designation: "Senior Pediatrician",
          experience: "28+ years experience",
        },
      ]}
    />
  );
}
