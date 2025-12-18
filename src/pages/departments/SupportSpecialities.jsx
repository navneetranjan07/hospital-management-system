import DepartmentLayout from "./DepartmentLayout";

export default function SupportSpecialities() {
  return (
    <DepartmentLayout
      title="Support Specialities"
      intro="Support Specialities provide essential allied healthcare services that strengthen diagnosis, treatment, and patient recovery."

      conditions={[
        "Nutrition Needs",
        "Speech Disorders",
        "Rehabilitation Support",
      ]}

      services={[
        "Diet & Nutrition Counseling",
        "Speech Therapy",
        "Occupational Therapy",
      ]}

      technologies={[
        "Multidisciplinary Care Coordination",
      ]}

      doctors={[
        {
          name: "Dr. Ritu Gupta",
          designation: "Clinical Nutritionist",
          experience: "15+ years experience",
        },
      ]}
    />
  );
}
