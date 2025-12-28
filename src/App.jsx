import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import EmailVerification from "./pages/auth/EmailVerification";
import Navbar from "./components/Navbar";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Departments from "./pages/diseaseDepartments";
import HospitalInfo from "./pages/HospitalInfo"
import HealthCheckup from "./pages/HealthCheckup";

import FindDoctor from "./pages/firstNavbar/FindDoctor";
import AboutUs from "./pages/firstNavbar/AboutUs";
import Carrers from "./pages/firstNavbar/Carrers";
import Contactus from "./pages/firstNavbar/ContactUs";

// departments
import CardiacSciences from "./pages/departments/CardiacScience";
import InfertilityMedicine from "./pages/departments/InfertilityMedicine";
import DentalScience from "./pages/departments/DentalScience";
import EndocrineSurgery from "./pages/departments/EndocrineSurgery";
import GeriatricMedicine from "./pages/departments/GeriatricMedicine";
import LiverTransplant from "./pages/departments/LiverTransplant";

import Neurology from "./pages/departments/Neurology";
import Ophthalmology from "./pages/departments/Ophthalmology";
import PainAndPalliativeMedicine from "./pages/departments/PainAndPalliativeMedicine";
import Pulmonology from "./pages/departments/Pulmonology";
import ThoracicSurgery from "./pages/departments/ThoracicSurgery";
import ENT from "./pages/departments/ENT";

import Dermatology from "./pages/departments/Dermatology";
import Haematology from "./pages/departments/Haematology";
import MedicalGenetics from "./pages/departments/MedicalGenetics";
import Neurosurgery from "./pages/departments/Neurosurgery";
import OrganTransplant from "./pages/departments/OrganTransplant";

import PalliativeMedicine from "./pages/departments/PalliativeMedicine";
import Radiology from "./pages/departments/Radiology";
import TransfusionMedicine from "./pages/departments/TransfusionMedicine";
import GeneralSurgery from "./pages/departments/GeneralSurgery";
import Nephrology from "./pages/departments/Nephrology";
import DiabetologyAndEndocrinology from "./pages/departments/DiabetologyAndEndocrinology";

import FoetalMedicine from "./pages/departments/FoetalMedicine";
import InfectiousDiseases from "./pages/departments/InfectiousDiseases";
import MentalHealthAndBehaviouralSciences from "./pages/departments/MentalHealthAndBehaviouralSciences";
import Oncology from "./pages/departments/Oncology";
import Orthopaedics from "./pages/departments/Orthopaedics";
import PhysiotherapyAndRehabilitation from "./pages/departments/PhysiotherapyAndRehabilitation";

import Rheumatology from "./pages/departments/Rheumatology";
import Urology from "./pages/departments/Urology";
import CriticalCare from "./pages/departments/CriticalCare";
import EmergencyAndTrauma from "./pages/departments/EmergencyAndTrauma";
import InternalMedicine from "./pages/departments/InternalMedicine";
import NeurointerventionalRadiology from "./pages/departments/NeurointerventionalRadiology";
import ObstetricsAndGynaecology from "./pages/departments/ObstetricsAndGynaecology";
import Paediatrics from "./pages/departments/Paediatrics";
import PlasticAndReconstructiveSurgery from "./pages/departments/PlasticAndReconstructiveSurgery";
import SupportSpecialities from "./pages/departments/SupportSpecialities";
import VascularSurgery from "./pages/departments/VascularSurgery";

// centers of excellence
import FortisInstituteOfRoboticSurgery from "./pages/centersOfExcellence/FortisInstituteOfRoboticSurgery";
import FortisCancerInstitute from "./pages/centersOfExcellence/FortisCancerInstitute";
import FortisInstituteOfGenomicMedicine from "./pages/centersOfExcellence/FortisInstituteOfGenomicMedicine";
import CentreForGynaeOncology from "./pages/centersOfExcellence/CentreForGynaeOncology";



import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />

        {/* Protected routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Routes>
                  <Route path="/home" element={<HospitalInfo />} />
                  <Route path="/health-checkup" element={<HealthCheckup />} />
                   <Route path="/find-doctor" element={<FindDoctor />} />
                   <Route path="/about-us" element={<AboutUs />} />
                   <Route path="/careers" element={<Carrers />} />
                   <Route path="/contact-us" element={<Contactus />} />
                  <Route path="/patients" element={<Patients />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/departments/cardiac-sciences" element={<CardiacSciences />} />
<Route path="/departments/infertility-medicine" element={<InfertilityMedicine />} />
<Route path="/departments/dental-science" element={<DentalScience />} />
<Route path="/departments/endocrine-surgery" element={<EndocrineSurgery />} />
<Route path="/departments/geriatric-medicine" element={<GeriatricMedicine />} />
<Route path="/departments/liver-transplant-and-hepatobiliary-sciences" element={<LiverTransplant />} />

<Route path="/departments/neurology" element={<Neurology />} />
<Route path="/departments/ophthalmology" element={<Ophthalmology />} />
<Route path="/departments/pain-and-palliative-medicine" element={<PainAndPalliativeMedicine />} />
<Route path="/departments/pulmonology" element={<Pulmonology />} />
<Route path="/departments/thoracic-surgery" element={<ThoracicSurgery />} />
<Route path="/departments/ent" element={<ENT />} />

<Route path="/departments/dermatology" element={<Dermatology />} />
<Route path="/departments/haematology" element={<Haematology />} />
<Route path="/departments/medical-genetics" element={<MedicalGenetics />} />
<Route path="/departments/neurosurgery" element={<Neurosurgery />} />
<Route path="/departments/organ-transplant" element={<OrganTransplant />} />

<Route path="/departments/palliative-medicine" element={<PalliativeMedicine />} />
<Route path="/departments/radiology" element={<Radiology />} />
<Route path="/departments/transfusion-medicine" element={<TransfusionMedicine />} />
<Route path="/departments/general-surgery" element={<GeneralSurgery />} />
<Route path="/departments/nephrology" element={<Nephrology />} />
<Route path="/departments/diabetology-endocrinology" element={<DiabetologyAndEndocrinology />} />

<Route path="/departments/foetal-medicine" element={<FoetalMedicine />} />
<Route path="/departments/infectious-diseases" element={<InfectiousDiseases />} />
<Route path="/departments/mental-health-behavioural-sciences" element={<MentalHealthAndBehaviouralSciences />} />
<Route path="/departments/oncology" element={<Oncology />} />
<Route path="/departments/orthopaedics" element={<Orthopaedics />} />
<Route path="/departments/physiotherapy-rehabilitation" element={<PhysiotherapyAndRehabilitation />} />

<Route path="/departments/rheumatology" element={<Rheumatology />} />
<Route path="/departments/urology" element={<Urology />} />
<Route path="/departments/critical-care" element={<CriticalCare />} />
<Route path="/departments/emergency-trauma" element={<EmergencyAndTrauma />} />
<Route path="/departments/internal-medicine" element={<InternalMedicine />} />
<Route path="/departments/neurointerventional-radiology" element={<NeurointerventionalRadiology />} />
<Route path="/departments/obstetrics-gynaecology" element={<ObstetricsAndGynaecology />} />
<Route path="/departments/paediatrics" element={<Paediatrics />} />
<Route path="/departments/plastic-reconstructive-surgery" element={<PlasticAndReconstructiveSurgery />} />
<Route path="/departments/support-specialities" element={<SupportSpecialities />} />
<Route path="/departments/vascular-surgery" element={<VascularSurgery />} />

                  {/* Centers of Excellence */}
                  <Route path="/centers-of-excellence/fortis-institute-of-robotic-surgery" element={<FortisInstituteOfRoboticSurgery />} />
                  <Route path="/centers-of-excellence/fortis-cancer-institute" element={<FortisCancerInstitute />} />
                  <Route path="/centers-of-excellence/fortis-institute-of-genomic-medicine" element={<FortisInstituteOfGenomicMedicine />} />
                  <Route path="/centers-of-excellence/centre-for-gynae-oncology" element={<CentreForGynaeOncology />} />
                </Routes>
              </>
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
