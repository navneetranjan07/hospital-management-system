import DepartmentLayout from "./DepartmentLayout";

export default function ObstetricsAndGynaecology() {
  return (
    <DepartmentLayout
      title="Obstetrics & Gynaecology"
      specialization="Obstetrics & Gynaecology"
      intro="Complete care for women’s reproductive health and pregnancy."

      services={[
        "Normal & High-Risk Pregnancy",
        "Infertility Treatment",
        "Gynecological Surgery",
      ]}
    />
  );
}
