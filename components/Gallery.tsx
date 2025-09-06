"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/lib/gallery";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % gallery.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-10 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center mb-8"
      >
        Our Gallery
      </motion.h2>

      {/* Grid of images with stagger animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedIndex(index)}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()} // prevent close on inner click
            >
              <Image
                src={gallery[selectedIndex].src}
                alt={gallery[selectedIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <motion.button
                className="absolute top-2 right-2 text-white text-3xl font-bold"
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
