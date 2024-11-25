import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Icon } from "@iconify/react";
import SectionDivider from "./section-divider";

const About = () => {
  const { ref } = useSectionInView("About", 1);

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section ref={ref} className="relative">
      <SectionDivider />
      
      <motion.div
        className="max-w-[45rem] mx-auto px-4 scroll-mt-28 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
          custom={1}
        >
          <Icon icon="ph:user-circle-duotone" className="w-8 h-8 text-purple-500" />
          <h2 className="text-3xl font-bold">About me</h2>
        </motion.div>

        <motion.div 
          className="space-y-6 text-gray-700 dark:text-gray-300"
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
          custom={2}
        >
          <div className="flex items-center gap-4 bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
            <div className="hidden sm:block">
              <Icon icon="ph:code-duotone" className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-lg leading-relaxed">
              Experienced Frontend Developer with a strong focus on{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">React and React Native</span>, 
              with proficiency in backend technologies such as{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">Express, Nestjs</span> and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">ASP.NET Core and WPF</span>.
            </p>
          </div>

          <motion.div 
            className="flex items-center gap-4 bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            custom={3}
          >
            <div className="hidden sm:block">
              <Icon icon="ph:rocket-launch-duotone" className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-lg leading-relaxed">
              Creator and founder of{" "}
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">Dev Docket</span>{" "}
              Application for managing projects and programming teams. It provides
              freedom to work as a team and optimizes work.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center gap-6"
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
          custom={4}
        >
          <div className="flex items-center gap-2">
            <Icon icon="ph:code-simple-duotone" className="w-6 h-6 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ph:database-duotone" className="w-6 h-6 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ph:device-mobile-duotone" className="w-6 h-6 text-purple-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Mobile</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;