import DepartmentLayout from "./DepartmentLayout";

export default function NeurointerventionalRadiology() {
  return (
    <DepartmentLayout
      title="Neurointerventional Radiology"
      specialization="Neurointerventional Radiology"
      intro="The Neurointerventional Radiology department offers minimally invasive, image-guided treatments for complex brain, spine, and vascular disorders, providing advanced care with faster recovery and improved outcomes."

      conditions={[
        "Brain Aneurysms",
        "Arteriovenous Malformations (AVMs)",
        "Ischemic Stroke",
        "Hemorrhagic Stroke",
        "Carotid Artery Stenosis",
        "Spinal Vascular Disorders",
        "Brain Tumors (Vascular)",
      ]}

      services={[
        "Mechanical Thrombectomy for Stroke",
        "Aneurysm Coiling & Flow Diversters",
        "AVM & AV Fistula Embolization",
        "Carotid & Intracranial Stenting",
        "Tumor Embolization",
        "Spinal Angiography & Interventions",
      ]}

      technologies={[
        "Biplane Cath Labs",
        "Advanced Digital Subtraction Angiography (DSA)",
        "3D Rotational Angiography",
        "AI-Assisted Imaging Analysis",
        "High-Resolution Neuro Imaging",
      ]}
    />
  );
}
