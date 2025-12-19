import DepartmentLayout from "./DepartmentLayout";

export default function MentalHealthAndBehaviouralSciences() {
  return (
    <DepartmentLayout
      title="Mental Health & Behavioural Sciences"
      specialization="Mental Health & Behavioural Sciences"
      intro="Compassionate care for mental and emotional well-being."

      services={[
        "Psychiatry",
        "Counselling",
        "De-addiction Programs",
      ]}
    />
  );
}
