import { Code, Bot, Shield, Cpu, PencilRuler, Network } from "lucide-react";

const programs = [
  { icon: Code, title: "Fundamentals of Coding", text: "Block-based (Scratch, PictoBlox) and text-based (Python, HTML/CSS) programming." },
  { icon: Cpu, title: "Computer Literacy", text: "Basic operations, productivity tools, OS navigation, and Internet essentials." },
  { icon: Bot, title: "Robotics & AI Concepts", text: "Hands-on introduction to sensors, actuators, and beginner AI ideas." },
  { icon: Shield, title: "Cybersecurity Basics", text: "Digital safety, citizenship, and responsible technology use." },
  { icon: PencilRuler, title: "Creative Challenges", text: "Tech bootcamps, hackathons, and problem-solving sprints." },
  { icon: Network, title: "Teacher Training", text: "Train-the-trainer sessions to sustain ICT education in schools." },
];

export default function Programs() {
  return (
    <section id="programs" className="section" aria-labelledby="programs-heading">
      <div className="container">
        <h2 id="programs-heading" className="text-3xl font-bold">Our Programs</h2>
        <p className="mt-2 text-gray-700 max-w-3xl">
          We introduce students to coding and digital skills through engaging, age-appropriate experiences, while empowering teachers to keep the momentum.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <Icon className="w-8 h-8" aria-hidden />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
