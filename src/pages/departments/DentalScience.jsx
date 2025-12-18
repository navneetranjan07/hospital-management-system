import DepartmentLayout from "./DepartmentLayout";

export default function DentalScience() {
  return (
    <DepartmentLayout
      title="Dental Science"
      intro="The Dental Science department provides complete oral healthcare with cosmetic, restorative, and surgical dentistry."

      conditions={[
        "Dental Cavities",
        "Gum Disease",
        "Malocclusion",
        "Oral Infections",
      ]}

      services={[
        "Root Canal Treatment",
        "Dental Implants",
        "Cosmetic Dentistry",
        "Orthodontics (Braces)",
      ]}

      technologies={[
        "Digital X-rays",
        "CAD/CAM Dentistry",
        "Laser Dentistry",
      ]}

      doctors={[
        {
          name: "Dr. R. K. Jain",
          designation: "Senior Dental Surgeon",
          experience: "18+ years experience",
        },
      ]}
    />
  );
}
