"use client";

import { Code, Bot, Shield, Cpu, PencilRuler, Network } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  { icon: Code, title: "Fundamentals of Coding", text: "Block-based (Scratch, PictoBlox) and text-based (Python, HTML/CSS) programming." },
  { icon: Cpu, title: "Computer Literacy", text: "Basic operations, productivity tools, OS navigation, and Internet essentials." },
  { icon: Bot, title: "Robotics & AI Concepts", text: "Hands-on introduction to sensors, actuators, and beginner AI ideas." },
  { icon: Shield, title: "Cybersecurity Basics", text: "Digital safety, citizenship, and responsible technology use." },
  { icon: PencilRuler, title: "Creative Challenges", text: "Tech bootcamps, hackathons, and problem-solving sprints." },
  { icon: Network, title: "Teacher Training", text: "Train-the-trainer sessions to sustain ICT education in schools." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Programs() {
  return (
    <section id="programs" className="section" aria-labelledby="programs-heading">
      <div className="container">
        <motion.h2
          id="programs-heading"
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>

        <motion.p
          className="mt-2 text-gray-700 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We introduce students to coding and digital skills through engaging, age-appropriate experiences, while empowering teachers to keep the momentum.
        </motion.p>

        <motion.div
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                <Icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
