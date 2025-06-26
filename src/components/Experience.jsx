import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Industrial Training at Habile Labs',
    description: 'Learned PCB design, MicroPython, 3D modeling in Blender, and built IoT projects like Smart Bell and RFID Attendance System.'
  },
  {
    title: 'Certification: Full Stack Development',
    description: 'Completed MERN stack course with multiple projects.'
  }
];

const Experience = () => (
  <section id="experience" className="py-24 px-4 bg-zinc-900">
    <h2 className="text-3xl font-bold mb-10 text-center text-fuchsia-400 neon-text">Experience</h2>
    <div className="max-w-2xl mx-auto flex flex-col gap-8">
      {experiences.map((exp, idx) => (
        <motion.div key={exp.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-zinc-800/80 rounded-xl shadow-lg p-6 border border-zinc-700 flex gap-4 items-start animated-border neon-box">
          <Briefcase className="w-8 h-8 text-indigo-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-1">{exp.title}</h3>
            <p className="text-zinc-300">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
