"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 via-white to-white" />
      <div className="container py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Coding for Every Child
            </motion.h1>
            <p className="mt-3 text-xl text-gray-700 italic">“No African child should be left behind.”</p>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Code Mining Initiatives for Africa (CMIA) equips primary and secondary school students across Africa with digital literacy and coding skills—
              laying the foundation for innovation, critical thinking, and 21st‑century opportunities.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#programs" className="rounded-2xl bg-brand-600 px-5 py-3 text-white font-semibold hover:bg-brand-700 transition">Explore Programs</a>
              <a href="#contact" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold hover:border-gray-400 transition">Partner with Us</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl shadow-xl ring-1 ring-gray-200 overflow-hidden"
          >
            <video src="/assets/hero-sample.mp4" poster="/assets/hero-poster.jpg" controls className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
