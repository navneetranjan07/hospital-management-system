export default function DepartmentLayout({
  title,
  intro,
  conditions,
  services,
  technologies,
  doctors,
}) {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white px-8 py-14">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 max-w-4xl text-indigo-100">{intro}</p>
      </div>

      {/* CONDITIONS */}
      <section className="bg-white px-8 py-10">
        <h2 className="text-xl font-semibold mb-4">Conditions We Treat</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 list-disc pl-5 text-gray-700">
          {conditions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* SERVICES */}
      <section className="px-8 py-10">
        <h2 className="text-xl font-semibold mb-4">Services & Procedures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-white px-8 py-10">
        <h2 className="text-xl font-semibold mb-4">Advanced Technology</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {technologies.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      {/* DOCTORS */}
      <section className="px-8 py-10">
        <h2 className="text-xl font-semibold mb-4">Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold">{d.name}</h3>
              <p className="text-sm text-gray-600">{d.designation}</p>
              <p className="text-sm text-gray-500">{d.experience}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
