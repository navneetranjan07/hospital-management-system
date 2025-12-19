import DepartmentLayout from "./DepartmentLayout";

export default function Neurosurgery() {
  return (
    <DepartmentLayout
      title="Neurosurgery"
      specialization="Neurosurgery"
      intro="The Neurosurgery department provides advanced surgical care for disorders of the brain, spine, and nervous system, combining precision surgery with cutting-edge technology for optimal outcomes."

      conditions={[
        "Brain Tumors",
        "Spinal Cord Injuries",
        "Degenerative Spine Disorders",
        "Traumatic Brain Injury",
        "Hydrocephalus",
        "Neurovascular Disorders",
        "Congenital Nervous System Disorders",
      ]}

      services={[
        "Brain Tumor Surgery",
        "Minimally Invasive Spine Surgery",
        "Endoscopic Neurosurgery",
        "Neuro Trauma Surgery",
        "CSF Shunt Procedures",
        "Functional Neurosurgery",
      ]}

      technologies={[
        "Neuronavigation Systems",
        "Intraoperative MRI & CT",
        "High-End Surgical Microscopes",
        "Endoscopic Neurosurgical Tools",
        "Advanced Neuro ICUs",
      ]}
    />
  );
}
