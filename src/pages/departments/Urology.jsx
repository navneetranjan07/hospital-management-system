import DepartmentLayout from "./DepartmentLayout";

export default function Urology() {
  return (
    <DepartmentLayout
      title="Urology"
      intro="Urology provides comprehensive care for urinary tract and male reproductive system disorders using minimally invasive techniques."

      conditions={[
        "Kidney Stones",
        "Prostate Disorders",
        "Urinary Tract Infections",
        "Male Infertility",
        "Urological Cancers",
      ]}

      services={[
        "Laser Stone Surgery",
        "Prostate Surgery",
        "Uro-Oncology",
        "Reconstructive Urology",
      ]}

      technologies={[
        "Holmium Laser Systems",
        "Endourology Equipment",
      ]}

      doctors={[
        {
          name: "Dr. Anil Mandhani",
          designation: "Senior Urologist",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
