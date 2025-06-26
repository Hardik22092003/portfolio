import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-zinc-950/90 py-8 border-t border-zinc-800 animated-border">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      className="flex flex-col items-center gap-3">
      <div className="flex gap-5 mb-2">
        <a href="mailto:hardiksahu@email.com" className="text-zinc-300 hover:text-fuchsia-400 transition neon-text"><Mail size={22} /></a>
        <a href="https://linkedin.com/in/hardiksahu" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-fuchsia-400 transition neon-text"><Linkedin size={22} /></a>
        <a href="https://github.com/hardiksahu" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-fuchsia-400 transition neon-text"><Github size={22} /></a>
      </div>
      <p className="text-xs text-zinc-500 neon-text">&copy; {new Date().getFullYear()} Hardik Sahu. All rights reserved.</p>
    </motion.div>
  </footer>
);

export default Footer;