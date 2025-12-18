import DepartmentLayout from "./DepartmentLayout";

export default function DiabetologyAndEndocrinology() {
  return (
    <DepartmentLayout
      title="Diabetology / Endocrinology"
      intro="This department manages hormonal disorders and diabetes with a holistic approach including lifestyle management and advanced therapies."

      conditions={[
        "Type 1 & Type 2 Diabetes",
        "Thyroid Disorders",
        "Hormonal Imbalances",
        "Metabolic Syndrome",
      ]}

      services={[
        "Diabetes Education Programs",
        "Insulin Pump Therapy",
        "Hormone Replacement Therapy",
      ]}

      technologies={[
        "Continuous Glucose Monitoring (CGM)",
        "Advanced Endocrine Labs",
      ]}

      doctors={[
        {
          name: "Dr. Ambrish Mithal",
          designation: "Senior Endocrinologist",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
