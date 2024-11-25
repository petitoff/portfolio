import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  title: string;
  mediaUrl: string;
  tags: string[];
  link: {
    live?: string;
    source: string;
  };
  description: string;
}

const ProjectCard = ({ project, isSelected, onClick }: { project: Project; isSelected: boolean; onClick: (project: Project) => void }) => (
  <motion.div
    layout
    onClick={() => onClick(project)}
    className="group cursor-pointer relative col-span-1 aspect-[16/10] overflow-hidden rounded-2xl bg-gray-900/5 dark:bg-gray-800/50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    {/* Dark overlay for better text visibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    
    <Image
      src={project.mediaUrl}
      alt={project.title}
      width={800}
      height={600}
      className="h-full w-full object-cover transition-transform duration-300"
    />
    
    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
        {project.title}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-white/90">
        <div className="flex items-center gap-1">
          <Icon icon="ph:eye-duotone" className="w-5 h-5" />
          <span className="text-sm">View Details</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectDetail = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
  >
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
    
    <motion.div 
      className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
      layoutId={`project-${project.title}`}
    >
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <Icon icon="ph:x-bold" className="w-6 h-6 text-white" />
      </button>

      <div className="relative h-72 sm:h-96">
        <Image
          src={project.mediaUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
          <div className="flex gap-2">
            {project.link.live && (
              <a
                href={project.link.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                <Icon icon="ph:globe-duotone" className="w-5 h-5 text-white" />
              </a>
            )}
            <a
              href={project.link.source}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Icon icon="ph:github-logo-duotone" className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Icon icon="ph:stack-duotone" className="w-5 h-5 text-blue-500" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm flex items-center gap-1"
              >
                <Icon icon="ph:code-simple-duotone" className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon icon="ph:rocket-launch-duotone" className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isSelected={selectedProject?.title === project.title}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
