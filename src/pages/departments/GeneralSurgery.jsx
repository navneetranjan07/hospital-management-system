import DepartmentLayout from "./DepartmentLayout";

export default function GeneralSurgery() {
  return (
    <DepartmentLayout
      title="General Surgery"
      specialization="General Surgery"
      intro="The General Surgery department offers comprehensive surgical care using modern minimally invasive and open surgical techniques for a wide range of conditions."

      conditions={[
        "Hernia (Inguinal, Umbilical, Incisional)",
        "Gallbladder Diseases (Gallstones)",
        "Appendicitis",
        "Breast Lumps & Breast Disorders",
        "Thyroid Disorders",
        "Abdominal Infections & Abscesses",
      ]}

      services={[
        "Laparoscopic & Open Hernia Surgery",
        "Laparoscopic Cholecystectomy",
        "Appendectomy",
        "Breast Surgery",
        "Minor & Major General Surgical Procedures",
      ]}

      technologies={[
        "Advanced Laparoscopic Systems",
        "Energy-Based Surgical Devices",
        "Modern Operation Theatres",
        "Enhanced Recovery After Surgery (ERAS) Protocols",
      ]}
    />
  );
}
