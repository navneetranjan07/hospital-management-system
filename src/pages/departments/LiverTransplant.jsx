import DepartmentLayout from "./DepartmentLayout";

export default function LiverTransplant() {
  return (
    <DepartmentLayout
      title="Liver Transplant & Hepatobiliary Sciences"
      specialization="Liver Transplant & Hepatobiliary Sciences"
      intro="The Liver Transplant & Hepatobiliary Sciences department provides comprehensive care for complex liver, gallbladder, pancreas, and bile duct diseases, including advanced liver transplantation procedures."

      conditions={[
        "End-Stage Liver Disease (ESLD)",
        "Cirrhosis of Liver",
        "Acute Liver Failure",
        "Hepatitis B & C",
        "Fatty Liver Disease",
        "Liver Cancer (Hepatocellular Carcinoma)",
        "Biliary Tract Disorders",
      ]}

      services={[
        "Living Donor Liver Transplant",
        "Deceased Donor Liver Transplant",
        "Hepatobiliary Surgery",
        "Liver Cancer Management",
        "Post-Transplant Care & Follow-up",
        "Alcoholic Liver Disease Management",
      ]}

      technologies={[
        "Advanced Liver ICU",
        "High-End Imaging (CT / MRI / FibroScan)",
        "Robotic & Minimally Invasive Surgery",
        "Intraoperative Ultrasound",
        "Dedicated Transplant Operation Theatres",
      ]}
    />
  );
}
