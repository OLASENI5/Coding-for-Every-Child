type Member = { name: string; role: string; blurb?: string; photo?: string };

const team: Member[] = [
  { name: "Engr. Adelere Oluwafemi", role: "ICT Expert & Cybersecurity Professional | CMIA Ambassador", photo: "/assets/team-1.jpg" },
  { name: "Engr. Sunday Oyinbo", role: "Mechanical Engineer (Ph.D., United States) | Education Advocate", photo: "/assets/team-2.jpg" },
  { name: "Mrs. Ogunmola Eniola", role: "Project Director, GFK Tech | STEM Educator | Technova | CMIA Project Director", photo: "/assets/team-3.jpg" },
  { name: "Olaseni Ajayi", role: "Software Engineer & IT Consultant | CMIA Ambassador", photo: "/assets/team-4.jpg" },
  { name: "Mrs Ayodele Joseph", role: "Career Counselor (United Kingdom) | Children Support Advocate", photo: "/assets/team-5.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="section bg-gray-50" aria-labelledby="team-heading">
      <div className="container">
        <h2 id="team-heading" className="text-3xl font-bold">Our Team</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.photo ?? "/assets/team-placeholder.jpg"} alt={m.name} className="mx-auto h-32 w-32 object-cover rounded-full ring-1 ring-gray-200" />
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
