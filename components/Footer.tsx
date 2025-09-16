"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        
        {/* Brand */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left"
        >
          © {new Date().getFullYear()} <span className="font-semibold">Code Mining Initiatives for Africa (CMIA)</span>.  
          All rights reserved.
        </motion.p>

        {/* Links + Social */}
        <motion.div 
          className="flex flex-wrap gap-4 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Section Links */}
          <Link href="#about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#programs" className="hover:text-gray-900 transition-colors">
            Programs
          </Link>
          <Link href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3 ml-2">
            <a href="mailto:info@cmia.org" aria-label="Email" className="hover:text-gray-900 transition-colors">
              <Mail className="w-15 h-15" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-900 transition-colors">
              <Facebook className="w-15 h-15" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-gray-900 transition-colors">
              <X className="w-15 h-15" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 transition-colors">
              <Linkedin className="w-15 h-15" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
