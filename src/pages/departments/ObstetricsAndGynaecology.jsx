import DepartmentLayout from "./DepartmentLayout";

export default function ObstetricsAndGynaecology() {
  return (
    <DepartmentLayout
      title="Obstetrics & Gynaecology"
      intro="Comprehensive women’s healthcare covering pregnancy, childbirth, and gynecological disorders with advanced maternal care."

      conditions={[
        "High-Risk Pregnancy",
        "Infertility",
        "Menstrual Disorders",
        "Gynecological Cancers",
      ]}

      services={[
        "Normal & Cesarean Deliveries",
        "Minimally Invasive Gynaec Surgery",
        "Antenatal Care",
      ]}

      technologies={[
        "Advanced Labour Rooms",
        "Minimally Invasive Surgery Suites",
      ]}

      doctors={[
        {
          name: "Dr. Neelam Bhardwaj",
          designation: "Senior Gynaecologist",
          experience: "25+ years experience",
        },
      ]}
    />
  );
}
