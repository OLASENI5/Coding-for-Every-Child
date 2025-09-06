"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 via-white to-white"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="container py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              Coding for Every Child
            </motion.h1>

            <motion.p
              className="mt-3 text-xl text-gray-700 italic"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              “No African child should be left behind.”
            </motion.p>

            <motion.p
              className="mt-6 text-gray-700 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Code Mining Initiatives for Africa (CMIA) equips primary and secondary school students across Africa with digital literacy and coding skills—laying the foundation for innovation, critical thinking, and 21st-century opportunities.
            </motion.p>

            {/* Buttons with stagger + hover bounce */}
            <motion.div
              className="mt-8 flex gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.a
                href="#programs"
                className="rounded-2xl bg-brand-600 px-5 py-3 text-white font-semibold hover:bg-brand-700 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.a>
              <motion.a
                href="#contact"
                className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold hover:border-gray-400 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner with Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl shadow-xl ring-1 ring-gray-200 overflow-hidden"
          >
            <video
              src="/assets/hero-sample.mp4"
              poster="/assets/hero-poster.jpg"
              controls
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
