import DepartmentLayout from "./DepartmentLayout";

export default function CardiacScience() {
  return (
    <DepartmentLayout
      title="Cardiac Sciences"
      specialization="Cardiac Sciences"
      intro="Comprehensive heart care with advanced diagnostics and surgery."

      conditions={[
        "Coronary Artery Disease",
        "Heart Failure",
        "Arrhythmias",
        "Valvular Disorders",
      ]}

      services={[
        "Angiography & Angioplasty",
        "Bypass Surgery (CABG)",
        "Pacemaker Implantation",
      ]}

      technologies={[
        "Cath Labs with 3D Imaging",
        "Robotic Cardiac Surgery",
        "Advanced Cardiac ICU",
      ]}
    />
  );
}
