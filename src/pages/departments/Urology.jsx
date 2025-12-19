import DepartmentLayout from "./DepartmentLayout";

export default function Urology() {
  return (
    <DepartmentLayout
      title="Urology"
      specialization="Urology"
      intro="The Urology department provides comprehensive diagnosis and treatment for disorders of the urinary tract and male reproductive system, using minimally invasive techniques and advanced surgical technology."

      conditions={[
        "Kidney Stones",
        "Prostate Disorders",
        "Urinary Tract Infections (UTI)",
        "Bladder Disorders",
        "Male Infertility",
        "Urological Cancers",
      ]}

      services={[
        "Endoscopic & Laparoscopic Urology",
        "Kidney Stone Management",
        "Prostate Surgery",
        "Male Infertility Treatment",
        "Uro-Oncology Services",
        "Reconstructive Urology",
      ]}

      technologies={[
        "Laser Lithotripsy Systems",
        "Flexible & Rigid Endoscopes",
        "Robotic-Assisted Urological Surgery",
        "Advanced Imaging & Navigation Tools",
        "Modern Urology ICUs",
      ]}
    />
  );
}
