"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="container flex items-center justify-between h-16">
        <Link href="#" className="font-bold text-lg sm:text-xl">CMIA</Link>
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium hover:text-brand-700">
              {l.label}
            </a>
          ))}
          <a href="#donate" className="rounded-2xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold hover:bg-brand-700 transition">
            Donate
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(o=>!o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-base font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#donate" className="rounded-2xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold w-fit" onClick={() => setOpen(false)}>
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
