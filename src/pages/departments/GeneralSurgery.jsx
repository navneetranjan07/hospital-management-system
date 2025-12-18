import DepartmentLayout from "./DepartmentLayout";

export default function GeneralSurgery() {
  return (
    <DepartmentLayout
      title="General Surgery"
      intro="General Surgery provides surgical care for a wide range of abdominal, gastrointestinal, and soft tissue conditions using minimally invasive techniques."

      conditions={[
        "Hernia",
        "Appendicitis",
        "Gall Bladder Disease",
        "Colorectal Disorders",
      ]}

      services={[
        "Laparoscopic Surgery",
        "Hernia Repair",
        "Colorectal Surgery",
        "Emergency Surgical Care",
      ]}

      technologies={[
        "Advanced Laparoscopy Systems",
        "Robotic Assisted Surgery",
      ]}

      doctors={[
        {
          name: "Dr. P. Raghu Ram",
          designation: "Senior General Surgeon",
          experience: "28+ years experience",
        },
      ]}
    />
  );
}
