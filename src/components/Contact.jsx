import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const contact = {
  email: 'hardiksahu@email.com',
  linkedin: 'https://linkedin.com/in/hardiksahu',
  github: 'https://github.com/hardiksahu',
};

const Contact = () => (
  <section id="contact" className="py-24 px-4 bg-zinc-900 flex justify-center">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      className="bg-zinc-800/80 rounded-2xl shadow-xl p-8 max-w-xl w-full text-center border border-zinc-700 animated-border neon-box">
      <h2 className="text-3xl font-bold mb-4 text-fuchsia-400 neon-text">Contact Me</h2>
      <div className="flex justify-center gap-6 mb-6">
        <a href={`mailto:${contact.email}`} className="text-zinc-200 hover:text-fuchsia-400 transition"><Mail size={28} /></a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-fuchsia-400 transition"><Linkedin size={28} /></a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-fuchsia-400 transition"><Github size={28} /></a>
      </div>
      <form className="flex flex-col gap-4 mt-4">
        <input type="text" placeholder="Your Name" className="bg-zinc-900/80 border border-zinc-700 rounded px-4 py-2 text-zinc-100 focus:outline-none focus:border-fuchsia-400" required />
        <input type="email" placeholder="Your Email" className="bg-zinc-900/80 border border-zinc-700 rounded px-4 py-2 text-zinc-100 focus:outline-none focus:border-fuchsia-400" required />
        <textarea placeholder="Your Message" rows={4} className="bg-zinc-900/80 border border-zinc-700 rounded px-4 py-2 text-zinc-100 focus:outline-none focus:border-fuchsia-400" required />
        <button type="submit" className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition-transform animated-border">Send</button>
      </form>
    </motion.div>
  </section>
);

export default Contact;
