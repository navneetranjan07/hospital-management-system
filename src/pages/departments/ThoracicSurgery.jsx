import DepartmentLayout from "./DepartmentLayout";

export default function ThoracicSurgery() {
  return (
    <DepartmentLayout
      title="Thoracic Surgery"
      intro="Thoracic Surgery specializes in surgical treatment of diseases of the chest including lungs, esophagus, and mediastinum."

      conditions={[
        "Lung Cancer",
        "Chest Trauma",
        "Pleural Diseases",
        "Esophageal Disorders",
      ]}

      services={[
        "Minimally Invasive Thoracic Surgery",
        "Video-Assisted Thoracoscopic Surgery (VATS)",
        "Thoracic Oncology Surgery",
      ]}

      technologies={[
        "VATS Technology",
        "Advanced Surgical ICUs",
      ]}

      doctors={[
        {
          name: "Dr. Arvinder Singh",
          designation: "Thoracic Surgeon",
          experience: "22+ years experience",
        },
      ]}
    />
  );
}
