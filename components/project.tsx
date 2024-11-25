import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRouter } from "next/navigation";
import { openLinkInNewTab } from "@/utils/openLinkInNewTab";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { Icon } from "@iconify/react";

type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  mediaUrl,
  mediaType,
  link,
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const renderMedia = () => {
    if (mediaType === "image") {
      return (
        <Image
          src={mediaUrl}
          alt={`Project: ${title}`}
          priority
          quality={95}
          width={500}
          height={300}
          className="absolute top-8 -right-64 w-[34rem] rounded-lg shadow-2xl 
            transition 
            group-even:-left-64 group-even:right-[initial]
            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
            group-hover:scale-[1.04] 
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            max-lg:static max-lg:w-full max-lg:-translate-x-0 max-lg:translate-y-0"
        />
      );
    } else if (mediaType === "video") {
      return (
        <video
          src={mediaUrl}
          title={`Project: ${title}`}
          controls
          preload="none"
          className="absolute top-8 -right-64 w-[34rem] rounded-lg shadow-2xl 
            transition 
            group-even:-left-64 group-even:right-[initial]
            max-lg:static max-lg:w-full"
        />
      );
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative mb-8 last:mb-0 sm:mb-12"
    >
      <section className="relative mx-auto max-w-[60rem] rounded-lg border border-black/5 
        bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20
        sm:h-[25rem] max-sm:p-8 sm:p-8 sm:pr-8 sm:group-even:pl-8">
        
        <div className="flex h-full flex-col justify-between sm:max-w-[50%] 
          sm:py-6 sm:group-even:ml-[25rem]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Icon 
                icon={mediaType === "video" ? "ph:video-camera-duotone" : "ph:image-duotone"} 
                className="w-6 h-6 text-blue-500"
              />
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            
            <p className="mt-2 text-lg leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 rounded-full bg-black/[0.7] px-4 py-1.5 
                    text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                >
                  <Icon icon="ph:code-simple-duotone" className="w-3.5 h-3.5" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {link.live && (
              <a
                href={link.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-2.5 
                  text-white text-sm font-medium transition hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon icon="ph:globe-duotone" className="w-5 h-5" />
                Live Demo
              </a>
            )}
            
            <a
              href={link.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border-2 border-gray-700 
                px-6 py-2.5 text-sm font-medium dark:border-white transition 
                hover:border-blue-500 hover:text-blue-500 
                dark:hover:border-blue-400 dark:hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="ph:github-logo-duotone" className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>

        {renderMedia()}
      </section>
    </motion.div>
  );
};

export default Project;