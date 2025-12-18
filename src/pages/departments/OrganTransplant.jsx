import DepartmentLayout from "./DepartmentLayout";

export default function OrganTransplant() {
  return (
    <DepartmentLayout
      title="Organ Transplant"
      intro="The Organ Transplant program provides life-saving transplant services with ethical practices, advanced surgical expertise, and multidisciplinary care."

      conditions={[
        "End Stage Liver Disease",
        "End Stage Kidney Disease",
        "Heart Failure",
        "Organ Failure Conditions",
      ]}

      services={[
        "Kidney Transplant",
        "Liver Transplant",
        "Post Transplant Care",
        "Transplant Counseling",
      ]}

      technologies={[
        "Dedicated Transplant ICUs",
        "Advanced Immunology Labs",
        "Organ Preservation Systems",
      ]}

      doctors={[
        {
          name: "Dr. Arvinder Singh Soin",
          designation: "Transplant Surgeon",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
