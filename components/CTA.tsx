"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="donate" className="section py-16 px-4" aria-labelledby="cta-heading">
      <div className="container">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 sm:p-12 text-white shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Help Us Empower the Next Generation
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-brand-100 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your support funds devices, internet access, and training in underserved schools across Africa.
          </motion.p>

          {/* Buttons with stagger */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.a
              href="#contact"
              className="rounded-2xl bg-white text-brand-700 px-6 py-3 font-semibold shadow hover:shadow-lg transition"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.a>

            <motion.a
              href="mailto:hello@cmia.africa"
              className="rounded-2xl border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
