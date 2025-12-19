import DepartmentLayout from "./DepartmentLayout";

export default function OrganTransplant() {
  return (
    <DepartmentLayout
      title="Organ Transplant"
      specialization="Organ Transplant"
      intro="The Organ Transplant department provides comprehensive transplant services with a multidisciplinary team, advanced infrastructure, and world-class post-transplant care to ensure optimal patient outcomes."

      conditions={[
        "End-Stage Liver Disease",
        "Chronic Kidney Failure",
        "Heart Failure Requiring Transplant",
        "Lung Failure",
        "Pancreatic Disorders",
        "Multi-Organ Failure",
      ]}

      services={[
        "Kidney Transplant",
        "Liver Transplant",
        "Heart Transplant",
        "Lung Transplant",
        "Pancreas Transplant",
        "Post-Transplant Follow-up & Care",
      ]}

      technologies={[
        "Advanced Transplant ICUs",
        "Immunosuppression Monitoring Systems",
        "High-Precision Surgical Suites",
        "Organ Preservation Technology",
        "Infection Control & Isolation Units",
      ]}
    />
  );
}
