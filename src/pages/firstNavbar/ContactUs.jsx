export default function ContactUs() {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
      <div className="relative bg-gradient-to-r from-gray-200 to-gray-100 px-10 py-16">
        <div className="max-w-xl bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-semibold mb-2">Contact us</h1>
          <p className="text-gray-600">For all types of queries</p>
        </div>
      </div>

      {/* ================= CONTACT CARD ================= */}
      <div className="px-10 -mt-12">
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h3 className="font-semibold text-orange-600">Fortis Healthcare Ltd.</h3>

          <p className="text-sm text-gray-600">
            Tower A, Unitech Business Park, Block - F, South City 1,
            Sector - 41, Gurugram, Haryana - 122001
          </p>

          <p className="text-sm">
            <strong>Appointment Queries:</strong> 9205 010 100
          </p>

          <p className="text-sm">
            <strong>Corporate Office:</strong> +91 124 4921021 / +91 124 4921041
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <p>
              <strong>Feedback/Complaints:</strong><br />
              feedback@fortishealthcare.com
            </p>
            <p>
              <strong>Business Queries:</strong><br />
              reachus@fortishealthcare.com
            </p>
            <p>
              <strong>Investor Queries:</strong><br />
              investor.relations@fortishealthcare.com
            </p>
          </div>

          <p className="text-sm">
            <strong>International Patients:</strong> ips@fortishealthcare.com
          </p>
        </div>
      </div>

      {/* ================= GET IN TOUCH FORM ================= */}
      <div className="px-10 py-12 bg-white mt-10">
        <h2 className="text-xl font-semibold mb-6">Get in touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select className="border rounded-lg p-3">
            <option>Select Type of Feedback</option>
            <option>Complaint</option>
            <option>Query</option>
            <option>Feedback</option>
          </select>

          <select className="border rounded-lg p-3">
            <option>Select Hospital</option>
            <option>Fortis Gurgaon</option>
            <option>Fortis Delhi</option>
          </select>

          <input className="border rounded-lg p-3" placeholder="First Name" />
          <input className="border rounded-lg p-3" placeholder="Last Name" />

          <input className="border rounded-lg p-3" placeholder="Mobile Number" />
          <input className="border rounded-lg p-3" placeholder="Email" />

          <textarea
            className="border rounded-lg p-3 md:col-span-2"
            placeholder="Feedback"
            rows="4"
          ></textarea>

          <button className="bg-orange-200 px-6 py-2 rounded-lg w-fit">
            Submit
          </button>
        </div>
      </div>

      {/* ================= APP DOWNLOAD ================= */}
      <div className="px-10 py-8">
        <div className="bg-blue-500 text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Keep track of your appointments, get updates & more!</p>
          <div className="flex gap-3">
            <button className="bg-white text-black px-4 py-2 rounded">App Store</button>
            <button className="bg-white text-black px-4 py-2 rounded">Google Play</button>
          </div>
        </div>
      </div>

      {/* ================= FEEL FREE TO ASK ================= */}
      <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Feel Free to ask us</h2>
          <input
            type="text"
            placeholder="Ask your question"
            className="w-full border rounded-lg py-3 px-4"
          />
        </div>

        <div className="space-y-3">
          {[
            "About Us",
            "Patient Care and Services",
            "Statutory Compliances",
            "Clinical Outcomes",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg px-5 py-4 cursor-pointer hover:bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
