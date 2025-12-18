import DepartmentLayout from "./DepartmentLayout";

export default function Nephrology() {
  return (
    <DepartmentLayout
      title="Nephrology"
      intro="The Nephrology department offers comprehensive care for kidney-related diseases including prevention, diagnosis, dialysis, and transplant support."

      conditions={[
        "Chronic Kidney Disease",
        "Acute Kidney Injury",
        "Hypertension",
        "Electrolyte Disorders",
      ]}

      services={[
        "Hemodialysis & Peritoneal Dialysis",
        "Kidney Disease Management",
        "Pre & Post Transplant Care",
      ]}

      technologies={[
        "Advanced Dialysis Units",
        "Continuous Renal Replacement Therapy (CRRT)",
      ]}

      doctors={[
        {
          name: "Dr. Vivekanand Jha",
          designation: "Senior Nephrologist",
          experience: "25+ years experience",
        },
      ]}
    />
  );
}
