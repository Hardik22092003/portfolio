import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Starfield from './components/Starfield';
import { AnimatePresence, motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const App = () => (
  <div className="min-h-screen bg-zinc-900 text-zinc-100 font-sans relative overflow-x-hidden">
    <Starfield />
    <Navbar />
    <AnimatePresence>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden">
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden">
        <About />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden">
        <Projects />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden">
        <Experience />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden">
        <Contact />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden">
        <Footer />
      </motion.div>
    </AnimatePresence>
    <DarkModeToggle />
  </div>
);

export default App;
