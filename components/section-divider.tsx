import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const SectionDivider = () => {
  return (
    <motion.div
      className="flex items-center justify-center my-24 sm:my-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="hidden sm:flex items-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-700"></div>
        <Icon 
          icon="ph:code-block" 
          className="w-6 h-6 text-gray-400 dark:text-gray-500" 
        />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-200 dark:to-gray-700"></div>
      </div>
    </motion.div>
  );
};

export default SectionDivider;