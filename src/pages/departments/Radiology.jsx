import DepartmentLayout from "./DepartmentLayout";

export default function Radiology() {
  return (
    <DepartmentLayout
      title="Radiology"
      specialization="Radiology"
      intro="The Radiology department provides accurate diagnosis through advanced imaging technologies, enabling early detection, precise treatment planning, and continuous monitoring of medical conditions."

      conditions={[
        "Bone & Joint Disorders",
        "Neurological Conditions",
        "Chest & Lung Diseases",
        "Abdominal & Pelvic Disorders",
        "Cancer Imaging & Staging",
        "Vascular Abnormalities",
      ]}

      services={[
        "X-Ray & Digital Radiography",
        "Ultrasound & Doppler Studies",
        "CT Scan & MRI",
        "Interventional Radiology",
        "Mammography",
        "Image-Guided Biopsies",
      ]}

      technologies={[
        "High-Resolution MRI Systems",
        "Multi-Slice CT Scanners",
        "Digital X-Ray & PACS",
        "Ultrasound with Doppler Imaging",
        "Image-Guided Intervention Suites",
      ]}
    />
  );
}
