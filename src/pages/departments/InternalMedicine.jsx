import DepartmentLayout from "./DepartmentLayout";

export default function InternalMedicine() {
  return (
    <DepartmentLayout
      title="Internal Medicine"
      specialization="Internal Medicine"
      intro="The Internal Medicine department focuses on the prevention, diagnosis, and non-surgical treatment of adult diseases, offering comprehensive and long-term care for complex medical conditions."

      conditions={[
        "Diabetes Mellitus",
        "Hypertension",
        "Thyroid Disorders",
        "Infectious Diseases",
        "Chronic Liver Disease",
        "Respiratory Infections",
        "Fever of Unknown Origin",
      ]}

      services={[
        "Comprehensive Health Checkups",
        "Chronic Disease Management",
        "Preventive Healthcare",
        "Lifestyle & Diet Counseling",
        "Geriatric Medical Care",
      ]}

      technologies={[
        "Advanced Diagnostic Labs",
        "Digital X-Ray & Ultrasound",
        "ECG & Holter Monitoring",
        "Electronic Medical Records (EMR)",
      ]}
    />
  );
}
