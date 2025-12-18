import DepartmentLayout from "./DepartmentLayout";

export default function EndocrineSurgery() {
  return (
    <DepartmentLayout
      title="Endocrine Surgery"
      intro="Endocrine Surgery focuses on surgical management of hormone-producing glands using minimally invasive techniques."

      conditions={[
        "Thyroid Disorders",
        "Parathyroid Disease",
        "Adrenal Tumors",
      ]}

      services={[
        "Thyroidectomy",
        "Parathyroid Surgery",
        "Adrenalectomy",
      ]}

      technologies={[
        "Intraoperative Nerve Monitoring",
        "Minimally Invasive Surgery",
      ]}

      doctors={[
        {
          name: "Dr. Arvinder Singh Soin",
          designation: "Endocrine Surgeon",
          experience: "25+ years experience",
        },
      ]}
    />
  );
}
