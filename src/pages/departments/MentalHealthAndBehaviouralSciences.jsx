import DepartmentLayout from "./DepartmentLayout";

export default function MentalHealthAndBehaviouralSciences() {
  return (
    <DepartmentLayout
      title="Mental Health & Behavioural Sciences"
      intro="This department provides comprehensive mental health care with compassionate, confidential, and evidence-based treatment."

      conditions={[
        "Depression",
        "Anxiety Disorders",
        "Bipolar Disorder",
        "Schizophrenia",
        "Stress & Burnout",
        "Substance Abuse",
      ]}

      services={[
        "Psychiatric Evaluation",
        "Counseling & Psychotherapy",
        "De-addiction Programs",
        "Child & Adolescent Psychiatry",
      ]}

      technologies={[
        "Tele-Psychiatry Services",
        "Multidisciplinary Mental Health Teams",
      ]}

      doctors={[
        {
          name: "Dr. Sameer Parikh",
          designation: "Senior Psychiatrist",
          experience: "25+ years experience",
        },
      ]}
    />
  );
}
