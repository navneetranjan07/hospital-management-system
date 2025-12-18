import DepartmentLayout from "./DepartmentLayout";

export default function MedicalGenetics() {
  return (
    <DepartmentLayout
      title="Medical Genetics"
      intro="Medical Genetics provides evaluation, diagnosis, and counseling for inherited and genetic disorders across all age groups."

      conditions={[
        "Inherited Genetic Disorders",
        "Congenital Anomalies",
        "Metabolic Disorders",
        "Prenatal Genetic Conditions",
      ]}

      services={[
        "Genetic Counseling",
        "Prenatal Screening",
        "Carrier Screening",
        "Molecular Diagnostic Testing",
      ]}

      technologies={[
        "Next Generation Sequencing (NGS)",
        "Cytogenetic Analysis",
        "Advanced Genetic Labs",
      ]}

      doctors={[
        {
          name: "Dr. Nandita Palshetkar",
          designation: "Clinical Geneticist",
          experience: "15+ years experience",
        },
      ]}
    />
  );
}
