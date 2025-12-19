import DepartmentLayout from "./DepartmentLayout";

export default function ThoracicSurgery() {
  return (
    <DepartmentLayout
      title="Thoracic Surgery"
      specialization="Thoracic Surgery"
      intro="The Thoracic Surgery department specializes in surgical treatment of diseases affecting the lungs, chest wall, mediastinum, and diaphragm, using minimally invasive and advanced surgical techniques for faster recovery and better outcomes."

      conditions={[
        "Lung Cancer",
        "Chest Wall Tumors",
        "Pleural Diseases",
        "Mediastinal Tumors",
        "Esophageal Disorders",
        "Thoracic Trauma",
      ]}

      services={[
        "Minimally Invasive Thoracic Surgery (VATS)",
        "Lung Cancer Surgery",
        "Chest Wall Reconstruction",
        "Esophageal Surgery",
        "Pleural Disease Management",
        "Thoracic Trauma Surgery",
      ]}

      technologies={[
        "Video-Assisted Thoracoscopic Surgery (VATS)",
        "Advanced Surgical Stapling Systems",
        "High-Resolution Imaging Support",
        "Modern Thoracic ICUs",
        "Enhanced Recovery After Surgery (ERAS) Protocols",
      ]}
    />
  );
}
