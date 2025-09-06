"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { label: "Students Reached", value: 1200, suffix: "+" },
    { label: "Schools Engaged", value: 25, suffix: "+" },
    { label: "Volunteers", value: 60, suffix: "+" },
    { label: "Devices Deployed", value: 150, suffix: "+" },
  ];

  return (
    <section className="section bg-gray-50" aria-labelledby="stats-heading">
      <div className="container">
        <h2 id="stats-heading" className="sr-only">Impact Stats</h2>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <dt className="text-sm text-gray-600">{s.label}</dt>
              <dd className="mt-2 text-3xl font-extrabold text-brand-700">
                <CountUp end={s.value} duration={2} suffix={s.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
