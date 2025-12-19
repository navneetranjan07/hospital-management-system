import DepartmentLayout from "./DepartmentLayout";

export default function DiabetologyAndEndocrinology() {
  return (
    <DepartmentLayout
      title="Diabetology & Endocrinology"
      specialization="Diabetology & Endocrinology"
      intro="The Diabetology & Endocrinology department offers comprehensive care for diabetes and hormonal disorders, combining evidence-based treatment, lifestyle management, and advanced diagnostics for long-term control and improved quality of life."

      conditions={[
        "Type 1 & Type 2 Diabetes",
        "Gestational Diabetes",
        "Thyroid Disorders",
        "Obesity & Metabolic Syndrome",
        "Pituitary & Adrenal Disorders",
        "Osteoporosis & Calcium Disorders",
      ]}

      services={[
        "Comprehensive Diabetes Management",
        "Insulin Therapy & Pump Management",
        "Thyroid & Hormonal Clinics",
        "Lifestyle & Nutrition Counseling",
        "Diabetes Complication Screening",
        "Endocrine Disorder Evaluation",
      ]}

      technologies={[
        "Continuous Glucose Monitoring (CGM)",
        "Insulin Pump Therapy",
        "Advanced Hormonal Assay Labs",
        "Bone Density Scanning (DEXA)",
        "Integrated Metabolic Clinics",
      ]}
    />
  );
}
