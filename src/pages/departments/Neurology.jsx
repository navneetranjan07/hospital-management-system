import DepartmentLayout from "./DepartmentLayout";

export default function Neurology() {
  return (
    <DepartmentLayout
      title="Neurology"
      intro="The Neurology department offers advanced diagnosis and treatment for disorders of the brain, spine, nerves, and muscles."

      conditions={[
        "Stroke",
        "Epilepsy",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Headache & Migraine",
        "Neuromuscular Disorders",
      ]}

      services={[
        "Stroke Thrombolysis & Thrombectomy",
        "Epilepsy Management",
        "Movement Disorder Clinics",
        "Neuro Rehabilitation",
      ]}

      technologies={[
        "Advanced MRI & CT Neuro Imaging",
        "EEG & EMG Labs",
        "Neuro ICU",
      ]}

      doctors={[
        {
          name: "Dr. P. N. Renjen",
          designation: "Senior Neurologist",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
