import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Blog App',
    description: 'A blog app powered by Gemini AI and MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/400x200?text=AI+Blog',
  },
  {
    title: 'Agroww Dashboard',
    description: 'An admin dashboard for farmers built with Spring Boot and H2 DB.',
    tech: ['Spring Boot', 'H2', 'React'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/400x200?text=Agroww',
  },
  {
    title: 'Space Explorer',
    description: 'A space-themed project explorer using NASA APIs.',
    tech: ['React', 'API', 'Tailwind'],
    github: '#',
    demo: '#',
    image: 'https://via.placeholder.com/400x200?text=Space+Explorer',
  },
];

const tilt = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, boxShadow: '0 0 16px #f472b6, 0 0 32px #818cf8' },
  hover: {
    scale: 1.04,
    rotateX: -6,
    rotateY: 6,
    boxShadow: '0 0 32px #f472b6, 0 0 64px #818cf8',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const Projects = () => (
  <section id="projects" className="py-24 px-4 bg-zinc-900">
    <h2 className="text-3xl font-bold mb-10 text-center text-fuchsia-400 neon-text">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={tilt}
          className="bg-zinc-800/80 rounded-xl shadow-lg overflow-hidden border border-zinc-700 flex flex-col animated-border neon-box"
          style={{ perspective: 1000 }}
        >
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-zinc-100">{project.title}</h3>
            <p className="mb-3 text-zinc-300 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map(tech => (
                <span key={tech} className="bg-fuchsia-700/30 text-fuchsia-300 px-2 py-1 rounded text-xs font-medium">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={project.github} className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} className="text-pink-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
