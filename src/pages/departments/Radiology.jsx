import DepartmentLayout from "./DepartmentLayout";

export default function Radiology() {
  return (
    <DepartmentLayout
      title="Radiology"
      intro="Radiology provides advanced diagnostic imaging services supporting accurate diagnosis and treatment planning across all medical specialties."

      conditions={[
        "Cancer Diagnosis",
        "Neurological Disorders",
        "Orthopedic Injuries",
        "Cardiac Conditions",
      ]}

      services={[
        "X-Ray & Ultrasound",
        "CT Scan & MRI",
        "Interventional Radiology",
        "Image Guided Biopsies",
      ]}

      technologies={[
        "3 Tesla MRI",
        "128 Slice CT Scanner",
        "Digital PACS System",
      ]}

      doctors={[
        {
          name: "Dr. Sanjay Gupta",
          designation: "Senior Radiologist",
          experience: "22+ years experience",
        },
      ]}
    />
  );
}
