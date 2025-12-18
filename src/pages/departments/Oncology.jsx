import DepartmentLayout from "./DepartmentLayout";

export default function Oncology() {
  return (
    <DepartmentLayout
      title="Oncology"
      intro="The Oncology department offers comprehensive cancer care through a multidisciplinary approach including medical, surgical, and radiation oncology."

      conditions={[
        "Breast Cancer",
        "Lung Cancer",
        "Gastrointestinal Cancers",
        "Blood Cancers",
        "Head & Neck Cancer",
      ]}

      services={[
        "Chemotherapy",
        "Immunotherapy",
        "Targeted Therapy",
        "Cancer Surgery",
        "Radiation Therapy",
      ]}

      technologies={[
        "Linear Accelerator (LINAC)",
        "Robotic Cancer Surgery",
        "Advanced Oncology ICUs",
      ]}

      doctors={[
        {
          name: "Dr. Ashok Vaid",
          designation: "Medical Oncologist",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
