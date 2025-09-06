"use client";

import { motion, Variants, MotionProps } from "framer-motion";

type Member = {
  name: string;
  role: string;
  blurb?: string;
  photo?: string;
};

const team: Member[] = [
  {
    name: "Engr. Adelere Oluwafemi",
    role: "ICT Expert & Cybersecurity Professional | CMIA Ambassador",
    photo: "/assets/team-1.jpg",
  },
  {
    name: "Mrs. Ogunmola Eniola",
    role: "Project Director, GFK Tech | STEM Educator | Technova | CMIA Project Director",
    photo: "/assets/team-3.jpg",
  },
  {
    name: "Olaseni Ajayi",
    role: "Software Engineer & IT Consultant | CMIA Ambassador",
    photo: "/assets/team-4.jpg",
  },
  {
    name: "Engr. Sunday Oyinbo",
    role: "Mechanical Engineer (Ph.D., United States) | Education Advocate",
    photo: "/assets/team-2.jpg",
  },
  {
    name: "Mrs Ayodele Joseph",
    role: "Career Counselor (United Kingdom) | Children Support Advocate",
    photo: "/assets/team-5.jpg",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export default function Team() {
  return (
    <section id="team" className="section bg-gray-50" aria-labelledby="team-heading">
      <div className="container">
        <motion.h2
          id="team-heading"
          className="text-3xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        <motion.div
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              layout
              className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.img
                src={member.photo ?? "/assets/team-placeholder.jpg"}
                alt={member.name}
                className="mx-auto h-32 w-32 object-cover rounded-full ring-2 ring-brand-500 shadow-sm"
                variants={photoVariants}
              />
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{member.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{member.role}</p>
              {member.blurb && <p className="mt-2 text-xs text-gray-500">{member.blurb}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
