import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../profile.jpeg';



const roles = [
  'Aspiring SDE',
  'MERN Stack Developer',
  'AI & Space Tech Enthusiast',
  'Open Source Contributor',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[roleIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIdx].slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setTyping(true);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-16 bg-zinc-900 overflow-hidden">
      {/* Space/starfield overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/space-bg.svg')] bg-cover bg-center opacity-40 pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-6 flex items-center justify-center">
          {/* Orbit/constellation SVG */}
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="80" stroke="#a21caf" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.5" />
            <circle cx="90" cy="90" r="60" stroke="#6d28d9" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.4" />
            <circle cx="90" cy="90" r="40" stroke="#818cf8" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
            {/* Animated orbiting dots */}
            <circle className="animate-[orbit1_4s_linear_infinite]" cx="170" cy="90" r="4" fill="#a21caf" />
            <circle className="animate-[orbit2_6s_linear_infinite]" cx="150" cy="90" r="3" fill="#6d28d9" />
            <circle className="animate-[orbit3_8s_linear_infinite]" cx="130" cy="90" r="2.5" fill="#818cf8" />
          </svg>
          <img src={profileImage} alt="Profile" className="w-36 h-36 rounded-full border-4 border-fuchsia-400 shadow-xl object-cover bg-zinc-800 neon-box relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-zinc-100 drop-shadow-lg neon-text">Hi, I'm Hardik Sahu</h1>
        <div className="h-10 mb-6">
          <span className="text-xl sm:text-2xl font-mono text-fuchsia-400 bg-zinc-800/80 px-4 py-1 rounded shadow animate-pulse">{displayed}<span className="text-fuchsia-400">|</span></span>
        </div>
        <a href="#projects" className="inline-block bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animated-border">View Projects</a>
      </motion.div>
    </section>
  );
};

export default Hero;