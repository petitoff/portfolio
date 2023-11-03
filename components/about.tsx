'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Experienced Frontend Developer with a strong focus on{' '}
        <span className="font-bold">React and React Native</span>, with proficiency
        in backend technologies such as{' '}
        <span className="font-bold">Express, Nestjs</span> and{' '}
        <span className="font-bold">ASP.NET Core and WPF</span>.
      </p>

      <p className="mt-4">
        Creator and founder of <span className="font-bold">Dev Docket</span>{' '}
        Application for managing projects and programming teams. It provides freedom
        to work as a team and optimizes work.
      </p>
    </motion.section>
  );
}
