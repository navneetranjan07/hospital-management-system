import DepartmentLayout from "./DepartmentLayout";

export default function CardiacSciences() {
  return (
    <DepartmentLayout
      title="Cardiac Sciences"
      specialization="Cardiac Sciences"
      intro="The Cardiac Sciences department provides comprehensive heart care with advanced diagnostics, interventional cardiology, and cardiac surgery under one roof."

      conditions={[
        "Coronary Artery Disease",
        "Heart Failure",
        "Arrhythmias",
        "Valvular Heart Disease",
        "Congenital Heart Defects",
        "Hypertension",
      ]}

      services={[
        "Angiography & Angioplasty",
        "Bypass Surgery (CABG)",
        "Pacemaker & ICD Implantation",
        "Heart Failure Clinics",
        "Preventive Cardiology",
      ]}

      technologies={[
        "Cath Labs with 3D Imaging",
        "Intravascular Ultrasound (IVUS)",
        "Robotic Cardiac Surgery",
        "Advanced Cardiac ICU",
      ]}
    />
  );
}
