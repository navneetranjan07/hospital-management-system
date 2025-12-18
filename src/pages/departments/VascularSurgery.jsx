import DepartmentLayout from "./DepartmentLayout";

export default function VascularSurgery() {
  return (
    <DepartmentLayout
      title="Vascular Surgery"
      intro="Vascular Surgery specializes in the treatment of diseases of arteries, veins, and lymphatic system using minimally invasive and open surgical techniques."

      conditions={[
        "Varicose Veins",
        "Peripheral Artery Disease",
        "Aneurysms",
        "Diabetic Foot",
      ]}

      services={[
        "Endovascular Procedures",
        "Varicose Vein Treatment",
        "Vascular Bypass Surgery",
      ]}

      technologies={[
        "Endovascular Suites",
        "Doppler Imaging",
      ]}

      doctors={[
        {
          name: "Dr. Muffazal Lakdawala",
          designation: "Vascular Surgeon",
          experience: "22+ years experience",
        },
      ]}
    />
  );
}
