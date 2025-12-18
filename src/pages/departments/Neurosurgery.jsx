import DepartmentLayout from "./DepartmentLayout";

export default function Neurosurgery() {
  return (
    <DepartmentLayout
      title="Neurosurgery"
      intro="The Neurosurgery department offers surgical treatment for complex disorders of the brain, spine, and nervous system using minimally invasive techniques."

      conditions={[
        "Brain Tumors",
        "Spinal Disorders",
        "Head Injury",
        "Hydrocephalus",
        "Disc Prolapse",
      ]}

      services={[
        "Brain Tumor Surgery",
        "Spine Surgery",
        "Minimally Invasive Neurosurgery",
        "Neuro Trauma Care",
      ]}

      technologies={[
        "Neuronavigation Systems",
        "Intraoperative MRI",
        "Neuro ICU",
      ]}

      doctors={[
        {
          name: "Dr. Rana Patir",
          designation: "Senior Neurosurgeon",
          experience: "35+ years experience",
        },
      ]}
    />
  );
}
