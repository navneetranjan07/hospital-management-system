import DepartmentLayout from "./DepartmentLayout";

export default function EndocrineSurgery() {
  return (
    <DepartmentLayout
      title="Endocrine Surgery"
      specialization="ENT"
      intro="The Endocrine Surgery department specializes in the surgical treatment of hormonal gland disorders, using minimally invasive and advanced surgical techniques for optimal outcomes."

      conditions={[
        "Thyroid Nodules & Thyroid Cancer",
        "Parathyroid Disorders",
        "Adrenal Tumors",
        "Endocrine Hypertension",
        "Neuroendocrine Tumors",
        "Multiple Endocrine Neoplasia (MEN)",
      ]}

      services={[
        "Minimally Invasive Thyroid Surgery",
        "Parathyroidectomy",
        "Adrenalectomy (Laparoscopic & Robotic)",
        "Endocrine Tumor Surgery",
        "Hormonal Disorder Evaluation",
      ]}

      technologies={[
        "Intraoperative Nerve Monitoring",
        "Minimally Invasive & Robotic Surgery",
        "High-Resolution Imaging",
        "Advanced Hormonal Assay Labs",
      ]}
    />
  );
}
