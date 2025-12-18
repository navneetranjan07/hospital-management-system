import DepartmentLayout from "./DepartmentLayout";

export default function NeurointerventionalRadiology() {
  return (
    <DepartmentLayout
      title="Neurointerventional Radiology"
      intro="This specialty provides minimally invasive, image-guided treatment for complex brain and spine disorders."

      conditions={[
        "Brain Aneurysms",
        "Stroke",
        "AV Malformations",
        "Spinal Vascular Disorders",
      ]}

      services={[
        "Endovascular Stroke Therapy",
        "Aneurysm Coiling",
        "AVM Embolization",
      ]}

      technologies={[
        "Biplane Cath Labs",
        "3D Neuro Imaging Systems",
      ]}

      doctors={[
        {
          name: "Dr. Aditya Gupta",
          designation: "Neurointervention Specialist",
          experience: "15+ years experience",
        },
      ]}
    />
  );
}
