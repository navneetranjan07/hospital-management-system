import DepartmentLayout from "./DepartmentLayout";

export default function LiverTransplant() {
  return (
    <DepartmentLayout
      title="Liver Transplant & Hepatobiliary Sciences"
      intro="One of the most advanced liver transplant programs offering adult and pediatric liver transplants with excellent outcomes."

      conditions={[
        "Liver Cirrhosis",
        "Hepatitis",
        "Liver Cancer",
        "Fatty Liver Disease",
      ]}

      services={[
        "Living Donor Liver Transplant",
        "Deceased Donor Liver Transplant",
        "Hepatobiliary Surgery",
      ]}

      technologies={[
        "Dedicated Liver ICU",
        "Advanced Imaging",
        "3D Surgical Planning",
      ]}

      doctors={[
        {
          name: "Dr. Arvinder Singh Soin",
          designation: "Chairman – Liver Transplant",
          experience: "30+ years experience",
        },
      ]}
    />
  );
}
