"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200"
    >
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="font-bold text-lg sm:text-xl">
          CMIA
        </Link>

        {/* Desktop Links */}
        <motion.div
          className="hidden md:flex gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium group"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {l.label}
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-600 transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#donate"
            className="rounded-2xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold hover:bg-brand-700 transition"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Donate
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <motion.div
              className="container py-4 flex flex-col gap-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="text-base font-medium"
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#donate"
                className="rounded-2xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold w-fit"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                Donate
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
