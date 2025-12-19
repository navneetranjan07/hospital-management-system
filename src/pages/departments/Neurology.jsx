import DepartmentLayout from "./DepartmentLayout";

export default function Neurosurgery() {
  return (
    <DepartmentLayout
      title="Neurosurgery"
      specialization="Neurosurgery"
      intro="Advanced surgical care for brain, spine, and nervous system disorders."

      services={[
        "Brain Tumor Surgery",
        "Spine Surgery",
        "Minimally Invasive Neurosurgery",
      ]}
    />
  );
}
