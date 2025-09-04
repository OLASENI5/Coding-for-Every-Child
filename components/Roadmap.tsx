const phases = [
  {
    title: "Phase 1 — Primary School (Basic 3–5)",
    items: [
      "Introduce basic computer operations and digital habits.",
      "Start with block‑based coding using Scratch and PictoBlox."
    ]
  },
  {
    title: "Phase 2 — Secondary School (JSS1–SS3)",
    items: [
      "Transition to text‑based programming (Python, HTML/CSS).",
      "Explore robotics, AI concepts, and cybersecurity foundations."
    ]
  },
  {
    title: "Phase 3 — School Empowerment",
    items: [
      "Train-the-trainer programs for ICT teachers and ambassadors.",
      "Donate laptops (target: 10 per school) and provide a free curriculum."
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section bg-gray-50" aria-labelledby="roadmap-heading">
      <div className="container">
        <h2 id="roadmap-heading" className="text-3xl font-bold">Strategic Roadmap</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
                {p.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
