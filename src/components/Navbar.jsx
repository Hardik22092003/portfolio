import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 tracking-tight">Hardik Sahu</span>
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-fuchsia-400 transition-colors duration-200">{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-zinc-100" onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden flex flex-col gap-6 px-6 pb-6 text-lg bg-zinc-950/95">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="block py-2 hover:text-fuchsia-400 transition-colors duration-200" onClick={() => setOpen(false)}>{link.name}</a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
