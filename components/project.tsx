"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  mediaUrl,
  mediaType,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const renderMedia = () => {
    if (mediaType === "image") {
      return (
        <Image
          src={mediaUrl}
          alt={`Project: ${title}`}
          quality={95}
          width={500}
          height={300}
          className="absolute -right-40 top-10 w-[28rem] rounded-t-lg shadow-2xl transition
                    group-even:-left-36
                    group-even:right-[initial]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                    
                    group-hover:scale-[1.04]
                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3

                    group-even:group-hover:rotate-2 sm:block"
        />
      );
    } else if (mediaType === "video") {
      return (
        <video
          src={mediaUrl}
          title={`Project: ${title}`}
          controls
          // Apply similar dimensions for video
          className="absolute right-0 top-0 w-[28rem] rounded-t-lg shadow-2xl transition
          group-even:-left-0
          group-even:right-[initial]
          group-hover:-translate-x-3
          group-hover:translate-y-3"
        />
      );
    }
  };

  const handleOpenLinkNewTab = (
    link?: string,
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e?.stopPropagation();
    e?.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group relative mb-3 last:mb-0 sm:mb-8"
    >
      <section
        onClick={() => handleOpenLinkNewTab(link.live)}
        className="relative max-w-[59rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:cursor-pointer hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-fit sm:pr-8 sm:group-even:pl-8"
      >
        <div className="z-10 flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mb-4 mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-2">
            {link.live && (
              <>
                <button
                  onClick={(e) => handleOpenLinkNewTab(link.live, e)}
                  rel="noreferrer"
                  className="mt-4 inline-block text-lg font-semibold text-blue-600 hover:underline"
                >
                  Live
                </button>
                <span className="ml-2 opacity-30">|</span>
              </>
            )}

            <button
              onClick={(e) => handleOpenLinkNewTab(link.source, e)}
              rel="noreferrer"
              className="ml-2 inline-block text-lg font-semibold text-blue-600 hover:underline"
            >
              Source
            </button>
          </div>
        </div>

        <div className="absolute left-0 top-0 z-0 h-full w-full">
          {renderMedia()}
        </div>
      </section>
    </motion.div>
  );
}
