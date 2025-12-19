import DepartmentLayout from "./DepartmentLayout";

export default function MedicalGenetics() {
  return (
    <DepartmentLayout
      title="Medical Genetics"
      specialization="Medical Genetics"
      intro="The Medical Genetics department focuses on the diagnosis, management, and counseling of inherited and genetic disorders, using advanced genomic technologies to provide personalized and preventive healthcare."

      conditions={[
        "Inherited Genetic Disorders",
        "Chromosomal Abnormalities",
        "Congenital Birth Defects",
        "Metabolic Disorders",
        "Rare Genetic Diseases",
        "Familial Cancer Syndromes",
        "Neuromuscular Genetic Conditions",
      ]}

      services={[
        "Genetic Counseling",
        "Prenatal & Preconception Genetic Testing",
        "Carrier Screening",
        "Newborn Screening",
        "Cancer Genetics Evaluation",
        "Molecular & Cytogenetic Testing",
      ]}

      technologies={[
        "Next-Generation Sequencing (NGS)",
        "Whole Exome & Genome Sequencing",
        "Microarray & Karyotyping",
        "Molecular Diagnostic Labs",
        "Advanced Bioinformatics Platforms",
      ]}
    />
  );
}
