import DepartmentLayout from "./DepartmentLayout";

export default function Ophthalmology() {
  return (
    <DepartmentLayout
      title="Ophthalmology"
      specialization="Ophthalmology"
      intro="Complete eye care including diagnosis and surgical treatments."

      services={[
        "Cataract Surgery",
        "LASIK",
        "Glaucoma Treatment",
      ]}
    />
  );
}
