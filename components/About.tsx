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
          Code Mining Initiatives for Africa (CMIA) is a non-profit committed to
          equipping African primary and secondary school students with essential
          technological skills. We believe every child deserves the right to
          learn, explore, and thrive in the digital age. Our initiative makes
          computer literacy and coding a foundational knowledge base—fueling
          innovation and career readiness.
        </motion.p>
      </div>
    </section>
  );
}
