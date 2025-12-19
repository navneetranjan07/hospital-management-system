import DepartmentLayout from "./DepartmentLayout";

export default function VascularSurgery() {
  return (
    <DepartmentLayout
      title="Vascular Surgery"
      specialization="Vascular Surgery"
      intro="The Vascular Surgery department specializes in the diagnosis and treatment of disorders affecting arteries, veins, and lymphatic circulation using advanced surgical and minimally invasive techniques."

      conditions={[
        "Peripheral Artery Disease (PAD)",
        "Varicose Veins",
        "Aortic Aneurysms",
        "Carotid Artery Disease",
        "Deep Vein Thrombosis (DVT)",
        "Diabetic Vascular Complications",
      ]}

      services={[
        "Endovascular Procedures",
        "Varicose Vein Treatment",
        "Aneurysm Repair",
        "Carotid Endarterectomy",
        "Vascular Bypass Surgery",
        "Dialysis Access Surgery",
      ]}

      technologies={[
        "Endovascular Imaging Systems",
        "Laser & Radiofrequency Ablation",
        "Hybrid Operating Theatres",
        "Advanced Vascular Ultrasound",
        "Minimally Invasive Surgical Tools",
      ]}
    />
  );
}
