import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Intro = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b  text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon icon="mdi:code-braces" className="w-8 h-8 text-purple-400" />
          <Icon icon="mdi:server" className="w-8 h-8 text-blue-400" />
          <Icon icon="ph:circles-three-plus-fill" className="w-8 h-8 text-yellow-400" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm <span className="text-purple-400">Błażej</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm a mid developer with{" "}
          <span className="text-purple-400 font-semibold">2 years</span> of experience in{" "}
          <span className="text-blue-400 font-semibold">Frontend</span> and{" "}
          <span className="text-yellow-400 font-semibold">Backend</span> technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/CV.pdf"
            download
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            <Icon icon="material-symbols:download" className="w-5 h-5" />
            Download CV
          </a>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/blazej-domagala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/petitoff"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 hover:bg-gray-800 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Icon icon="mdi:github" className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;