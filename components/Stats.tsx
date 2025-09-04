export default function Stats() {
  const stats = [
    { label: "Students Reached", value: "1,200+" },
    { label: "Schools Engaged", value: "25+" },
    { label: "Volunteers", value: "60+" },
    { label: "Devices Deployed", value: "150+" },
  ];
  return (
    <section className="section bg-gray-50" aria-labelledby="stats-heading">
      <div className="container">
        <h2 id="stats-heading" className="sr-only">Impact Stats</h2>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
              <dt className="text-sm text-gray-600">{s.label}</dt>
              <dd className="mt-2 text-3xl font-extrabold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
