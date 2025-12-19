import DepartmentLayout from "./DepartmentLayout";

export default function Paediatrics() {
  return (
    <DepartmentLayout
      title="Paediatrics"
      specialization="Paediatrics"
      intro="The Paediatrics department provides comprehensive healthcare for infants, children, and adolescents, focusing on preventive care, early diagnosis, and compassionate treatment in a child-friendly environment."

      conditions={[
        "Newborn & Infant Care",
        "Childhood Infections",
        "Growth & Development Disorders",
        "Respiratory Illnesses in Children",
        "Paediatric Allergies & Asthma",
        "Nutritional Deficiencies",
      ]}

      services={[
        "Neonatal & Child Health Care",
        "Immunization Programs",
        "Paediatric Emergency Services",
        "Developmental Assessment",
        "Nutrition & Growth Monitoring",
        "Adolescent Health Care",
      ]}

      technologies={[
        "Neonatal Intensive Care Unit (NICU)",
        "Advanced Paediatric Monitoring Systems",
        "Child-Friendly Diagnostic Equipment",
        "Incubator & Ventilator Support",
        "Electronic Growth Tracking Tools",
      ]}
    />
  );
}
