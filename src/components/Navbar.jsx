import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaUserInjured,
  FaCalendarAlt,
  FaCalendarCheck,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaBuilding,
  FaPhoneAlt,
  FaStethoscope,
  FaAngleDown,
  FaUserCog,
} from "react-icons/fa";
import { Stethoscope } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const toSlug = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const toSlugAdmin = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");



  const hospitalData = {
    "North India": {
      Delhi: [
        "Fortis Cancer Institute, Defence Colony",
        "Fortis CDOC, Chirag Enclave",
        "Fortis Escorts Heart Institute",
      ],
      Punjab: ["Fortis Hospital, Mohali"],
      Haryana: ["Fortis Memorial Research Institute, Gurgaon"],
    },
    "South India": {
      Karnataka: ["Fortis Hospital, Bannerghatta Road"],
      TamilNadu: ["Fortis Malar Hospital, Chennai"],
    },
    "West India": {
      Maharashtra: ["Fortis Hospital, Mulund"],
    },
  };
  const [activeRegion, setActiveRegion] = useState("North India");
  const [activeState, setActiveState] = useState("Delhi");

  const adminPannelData = [
     {
      label: "Patients",
      to: "/patients",
      icon: <FaUserInjured />,
      isLink: true,
    },
    {
      label: "Doctors",
      to: "/doctors",
      icon: <FaUserInjured />,
      isLink: true,
    },
  ]

  const specialtiesData = [
    "Cardiac Sciences",
    "Infertility Medicine",
    "Dental Science",
    "Endocrine Surgery",
    "Geriatric Medicine",
    "Liver Transplant & Hepatobiliary Sciences",
    "Neurology",
    "Ophthalmology",
    "Pain & Palliative Medicine",
    "Pulmonology",
    "Thoracic Surgery",

    "ENT",
    "Dermatology",
    "Haematology",
    "Medical Genetics",
    "Neurosurgery",
    "Organ Transplant",
    "Palliative Medicine",
    "Radiology",
    "Transfusion Medicine",

    "General Surgery",
    "Nephrology",
    "Diabetology / Endocrinology",
    "Foetal Medicine",
    "Infectious Diseases",
    "Mental Health & Behavioural Sciences",
    "Oncology",
    "Orthopaedics",
    "Physiotherapy & Rehabilitation",
    "Rheumatology",
    "Urology",

    "Critical Care",
    "Emergency & Trauma",
    "Internal Medicine",
    "Neurointerventional Radiology",
    "Obstetrics & Gynaecology",
    "Paediatrics",
    "Plastic & Reconstructive Surgery",
    "Support Specialities",
    "Vascular Surgery",
  ];

  const centreOfExcellenceData = [
    "Fortis Institute of Robotic Surgery",
    "Fortis Cancer Institute",
    "Fortis Institute of Genomic Medicine",
    "Centre for Gynae Oncology",
  ];

  const mediaCentreData = [
    "Press Release",
    "Media Coverage",
    "Newsletters",
    "Media Connect",
  ];

  const medicalServicesData = [
    "Medical Procedures",
    "Health Packages",
    "Health Checkup",
  ];

  const patientCornerData = [
    { label: "Patient Services" },
    { label: "Patient Rights & Responsibilities" },
    { label: "Billing Information" },
    { label: "Insurance & Cashless Services" },
  ];




  return (
    <>

      {/* first nav open */}
      <nav className="bg-blue-100 w-full py-2 flex justify-center items-center shadow-md sticky top-0 z-50 ">
        <div className=" flex w-9/12 justify-between items-center pr-10">

          <div>{localStorage.getItem("username") && (
            <span className="hidden md:block text-sm bg-white/10 px-3 rounded-full ml-4">
              Welcome, {localStorage.getItem("username")}!
            </span>
          )}</div>

          <div>
            <Link to="/find-doctor" className=" px-4 py-2 text-sm hover:underline">Find a doctor</Link>
            <Link to="/about-us" className="px-4 py-2 text-sm hover:underline">About Us</Link>
            <Link to="/careers" className=" px-4 py-2 text-sm hover:underline">Carrers</Link>
            <Link to="/contact-us" className=" px-4 py-2 text-sm hover:underline">Contact us</Link>
            <select
              name="location"
              id="selectLocation"
              className="h-6 min-w-40 bg-gray-100 text-sm rounded-md ml-4 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select City --</option>

              {/* METRO CITIES */}
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
              <option>Chennai</option>
              <option>Bengaluru</option>
              <option>Hyderabad</option>
              <option>Pune</option>
              <option>Ahmedabad</option>
            </select>
          </div>

        </div>
        <button onClick={handleLogout} className=" bg-indigo-700 text-white px-4 py-1 rounded-3xl flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] mr-5">
          <FaSignOutAlt /> Logout
        </button>
        
         <div className="relative group ">
            <button className="bg-indigo-700 text-white px-4 py-1 rounded-3xl flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              Admin Corner <FaAngleDown />
            </button>

            {/* ================= SPECIALITIES MEGA MENU ================= */}
            <div className="absolute left-1/2 -translate-x-3/4 top-full hidden group-hover:block z-[999] pt-4">
              <div className=" bg-white shadow-2xl rounded-xl p-2">

                <div className="flex w-auto gap-5 z-50">

                  {adminPannelData.map((item, index) => 
                 item.isLink ? (
                    <Link
                      key={index}
                      to={item.to}
                      className="flex items-center gap-2 px-5 py-3 text-sm
                      hover:bg-gray-100 hover:text-blue-600 transition"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ) : (
                    <div
                      key={index}
                      className="px-5 py-3 text-sm cursor-pointer
                      hover:bg-gray-100 hover:text-orange-600 transition"
                    >
                      {item.label}
                    </div>
                  )
                  )}


                </div>
              </div>
            </div>
          </div>

      </nav>
      {/* first nav close */}

      {/* second nav start */}
      <nav className="bg-blue-200 w-full py-3 flex justify-around items-center shadow-inner sticky top-0 z-40 ">
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/home"><FaUserMd className="text-2xl text-indigo-900" /></Link>
            <div>
              <h1 className="text-xl cursor-pointer font-semibold tracking-wide">
                <Link to="/home">CityCare Hospital</Link>
              </h1>
              <p className="text-sm text-indigo-900 opacity-80"><Link to="/home">Your Health, Our Priority</Link></p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">

          {/* Hospital section */}
          <div className="relative group">
            <button className="flex gap-1 items-center">
              Hospitals <FaAngleDown className="mt-1" />
            </button>

            {/* ================= HOSPITAL MEGA MENU ================= */}
            <div className="absolute left-0 top-full hidden group-hover:block z-[999] pt-4">
              <div className="w-[900px] bg-white shadow-2xl rounded-xl p-6 grid grid-cols-4 gap-6">

                {/* Regions */}
                <div className="border-r space-y-2">
                  {Object.keys(hospitalData).map(region => (
                    <button
                      key={region}
                      onMouseEnter={() => {
                        setActiveRegion(region);
                        setActiveState(Object.keys(hospitalData[region])[0]);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-md transition
              ${activeRegion === region
                          ? "bg-orange-100 text-orange-600 font-semibold"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>

                {/* States */}
                <div className="border-r space-y-2">
                  {Object.keys(hospitalData[activeRegion]).map(state => (
                    <button
                      key={state}
                      onMouseEnter={() => setActiveState(state)}
                      className={`w-full text-left px-4 py-2 rounded-md transition
              ${activeState === state
                          ? "bg-orange-50 text-orange-600 font-medium"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>

                {/* Hospitals */}
                <div className="col-span-2 space-y-3">
                  {hospitalData[activeRegion][activeState].map((hospital, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                    >
                      {hospital}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
          {/* hospital section end */}

          {/* Specialities section */}
          <div className="relative group">
            <button className="flex gap-1 items-center">
              Specialities <FaAngleDown />
            </button>

            {/* ================= SPECIALITIES MEGA MENU ================= */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block z-[999] pt-4">
              <div className="w-[1100px] bg-white shadow-2xl rounded-xl p-8">

                <div className="grid grid-cols-4 gap-x-10 gap-y-3 text-sm">

                  {specialtiesData.map((item, index) => (
                    <Link
                      key={index}
                      to={`/departments/${toSlug(item)}`}
                      className="flex items-center justify-between cursor-pointer
               hover:text-orange-600 transition group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-100
                       flex items-center justify-center text-purple-600 text-xs">
                          <Stethoscope size={12} />
                        </span>
                        {item}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition">›</span>
                    </Link>
                  ))}


                </div>
              </div>
            </div>
          </div>
          {/* specialities section end */}

          {/* center of excellence section */}
          <div className="relative group">
            <button className="flex gap-1 items-center">
              Center of Excellence <FaAngleDown />
            </button>

            {/* ============ CENTRE OF EXCELLENCE DROPDOWN ============ */}
            <div className="absolute left-0 top-full hidden group-hover:block z-[999] pt-3">
              <div className="w-[300px] bg-white shadow-xl rounded-md overflow-hidden">

                {centreOfExcellenceData.map((item, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 text-sm cursor-pointer
                     hover:bg-gray-100 hover:text-orange-600 transition"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>
          </div>
          {/* center of excellence section end */}

          {/* media centre section */}
          <div className="relative group">
            <button className="flex gap-1 items-center">
              Media Centre <FaAngleDown />
            </button>

            {/* ============ MEDIA CENTRE DROPDOWN ============ */}
            <div className="absolute left-0 top-full hidden group-hover:block z-[999] pt-3">
              <div className="w-[260px] bg-white shadow-xl rounded-md overflow-hidden">

                {mediaCentreData.map((item, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 text-sm cursor-pointer
                     hover:bg-gray-100 hover:text-orange-600 transition"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>
          </div>
          {/* media centre section end */}

          {/* Medical section */}
          <div className="relative group">
            <button className="flex gap-1 items-center">
              Medical Centre <FaAngleDown />
            </button>

            {/* ============ MEDIA CENTRE DROPDOWN ============ */}
            <div className="absolute left-0 top-full hidden group-hover:block z-[999] pt-3">
              <div className="w-[260px] bg-white shadow-xl rounded-md overflow-hidden">

                {medicalServicesData.map((item, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 text-sm cursor-pointer
                     hover:bg-gray-100 hover:text-orange-600 transition"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>
          </div>
          {/* medical section end */}

          {/* Patient center */}
          <div className="relative group">
            <button className="flex gap-1 items-center">
              Patient Centre <FaAngleDown />
            </button>

            <div className="absolute left-0 top-full hidden group-hover:block z-[999] pt-3">
              <div className="w-[260px] bg-white shadow-xl rounded-md overflow-hidden">
                {patientCornerData.map((item, index) =>
                  item.isLink ? (
                    <Link
                      key={index}
                      to={item.to}
                      className="flex items-center gap-2 px-5 py-3 text-sm
                      hover:bg-gray-100 hover:text-blue-600 transition"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ) : (
                    <div
                      key={index}
                      className="px-5 py-3 text-sm cursor-pointer
                      hover:bg-gray-100 hover:text-orange-600 transition"
                    >
                      {item.label}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* patient center end */}



          <button className="flex gap-1 items-center">International Selection</button>
        </div>
      </nav>
      {/* second nav end */}

      {/* third nav start  */}
      <nav className="bg-blue-100 backdrop-blur-sm py-4 shadow-inner sticky top-16 z-30">

        <div className="flex justify-between items-center">

          {/* Desktop Menu */}
          <div className="w-screen flex items-center gap-6 justify-center ">

            <Link to="/home" className=" flex items-center px-6 py-1 gap-2 rounded-3xl transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              <FaPhoneAlt /> Request a Callback
            </Link>
            {/* <Link to="/patients" className=" flex items-center p-1 gap-1 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              <FaUserInjured /> Patients
            </Link>
            <Link to="/doctors" className="flex items-center p-1 gap-1 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              <FaUserMd /> Doctors
            </Link> */}
            <Link
              to="/appointments" className="flex bg-green-500/60 items-center px-6 py-1 gap-2 rounded-3xl  transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              <FaCalendarCheck /> Book Appointments
            </Link>
            <Link
              to="/home" className="flex items-center px-6 py-1 gap-2 rounded-3xl transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              <FaStethoscope /> Get Health Checkup
            </Link>

            {/* <Link to="/departments" className="flex items-center p-1 gap-1 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]"            >
              <FaBuilding /> Disease Departments
            </Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl focus:outline-none hover:text-teal-300 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* third nav end */}

      {/* Mobile Side Menu Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-side">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Menu</h2>

          </div>
          <Link
            to="/patients"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaUserInjured /> Patients
          </Link>
          <Link
            to="/doctors"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaUserMd /> Doctors
          </Link>
          <Link
            to="/appointments"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaCalendarAlt /> Appointments
          </Link>
          <Link
            to="/departments"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaBuilding /> Departments
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 bg-gradient-to-r  from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-xl mt-6 transition-all duration-300 hover:scale-105 font-medium w-full justify-center"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </>
  );
}
