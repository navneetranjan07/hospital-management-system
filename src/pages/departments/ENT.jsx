import DepartmentLayout from "./DepartmentLayout";

export default function ENT() {
  return (
    <DepartmentLayout
      title="ENT (Ear, Nose & Throat)"
      intro="ENT department offers complete care for disorders of ear, nose, throat, head and neck."

      conditions={[
        "Hearing Loss",
        "Sinusitis",
        "Voice Disorders",
        "Tonsillitis",
        "Vertigo",
      ]}

      services={[
        "Endoscopic Sinus Surgery",
        "Hearing Evaluation & Implants",
        "Voice Therapy",
        "Head & Neck Surgery",
      ]}

      technologies={[
        "Endoscopic ENT Systems",
        "Audiology Labs",
        "Coblation Technology",
      ]}

      doctors={[
        {
          name: "Dr. Shashidhar TB",
          designation: "Senior ENT Surgeon",
          experience: "20+ years experience",
        },
      ]}
    />
  );
}
