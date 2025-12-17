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
import Cardiology from "./pages/departments/Cardiology";
import Neurology from "./pages/departments/Neurology";
import Orthopedics from "./pages/departments/Orthopedics";
import Oncology from "./pages/departments/Oncology";
import Pediatrics from "./pages/departments/Pediatrics";
import Dermatology from "./pages/departments/Dermatology";
import Gynecology from "./pages/departments/Gynecology";
import EmergencyMedicine from "./pages/departments/EmergencyMedicine";
import Urology from "./pages/departments/Urology";

import FindDoctor from "./pages/firstNavbar/FindDoctor";
import AboutUs from "./pages/firstNavbar/AboutUs";
import Carrers from "./pages/firstNavbar/Carrers";
import Contactus from "./pages/firstNavbar/ContactUs";

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
                   <Route path="/find-doctor" element={<FindDoctor />} />
                   <Route path="/about-us" element={<AboutUs />} />
                   <Route path="/careers" element={<Carrers />} />
                   <Route path="/contact-us" element={<Contactus />} />
                  <Route path="/patients" element={<Patients />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/departments/cardiology" element={<Cardiology />} />
                  <Route path="/departments/neurology" element={<Neurology />} />
                  <Route path="/departments/orthopedics" element={<Orthopedics />} />
                  <Route path="/departments/oncology" element={<Oncology />} />
                  <Route path="/departments/pediatrics" element={<Pediatrics />} />
                  <Route path="/departments/dermatology" element={<Dermatology />} />
                  <Route path="/departments/gynecology" element={<Gynecology />} />
                  <Route path="/departments/emergency-medicine" element={<EmergencyMedicine />} />
                  <Route path="/departments/urology" element={<Urology />} />
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
