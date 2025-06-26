import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Rocket, GraduationCap } from 'lucide-react';

const skills = [
  { name: 'React', icon: <Code /> },
  { name: 'Node.js', icon: <Database /> },
  { name: 'AI/ML', icon: <Cpu /> },
  { name: 'Space Tech', icon: <Rocket /> },
];

const About = () => (
  <section id="about" className="py-24 px-4 bg-zinc-900 flex justify-center">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      className="bg-zinc-800/80 rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center border border-zinc-700 animated-border neon-box">
      <h2 className="text-3xl font-bold mb-4 text-fuchsia-400 neon-text">About Me</h2>
      <p className="mb-6 text-zinc-200">I'm a final-year Electrical Engineering student at MANIT Bhopal, passionate about building scalable web applications, AI-powered tools, and exploring the universe of technology.</p>
      <div className="flex items-center justify-center gap-4 mb-6">
        <GraduationCap className="w-6 h-6 text-indigo-400" />
        <span className="text-zinc-100 font-medium">B.Tech, Electrical Engineering, MANIT Bhopal</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center">
            <span className="mb-2 text-fuchsia-400">{skill.icon}</span>
            <span className="text-zinc-200 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;