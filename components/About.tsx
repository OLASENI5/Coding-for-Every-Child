"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section py-12 px-4" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Heading */}
        <motion.h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About CMIA
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="mt-4 text-gray-700 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Code Mining Initiatives for Africa (CMIA) is a nonprofit organization
  dedicated to shaping the future of African children through technology
  education. We focus on primary and secondary school students, introducing
  them to essential skills in computer literacy, coding, and digital problem
  solving. At CMIA, we believe that every child, regardless of background,
  deserves the opportunity to learn, explore, and thrive in today’s digital
  age. Our programs are designed not only to teach technical skills but also
  to nurture creativity, critical thinking, and innovation. By embedding
  computer literacy and coding into early education, we are building a strong
  foundation for the next generation of African innovators, entrepreneurs,
  and leaders. Our vision is to bridge the digital divide, unlock potential,
  and prepare students to compete and excel in the global technology-driven
  economy.
        </motion.p>
      </div>
    </section>
  );
}
