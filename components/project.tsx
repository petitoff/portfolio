"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionStyle } from "framer-motion"; // Or the appropriate import path

import { useRouter } from "next/navigation";
import { openLinkInNewTab } from "@/utils/openLinkInNewTab";
import Link from "next/link";

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
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const router = useRouter();

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
          className="absolute -right-40 top-10 w-[28rem] rounded-t-lg shadow-2xl transition group-even:-left-36
                    group-even:right-[initial]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                    group-hover:scale-[1.04]
                    
                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    max-md:hidden sm:block"
        />
      );
    } else if (mediaType === "video") {
      return (
        <video
          src={mediaUrl}
          title={`Project: ${title}`}
          controls
          preload="none"
          // Apply similar dimensions for video
          className="absolute right-0 top-0 w-[28rem] rounded-t-lg shadow-2xl 
                    max-lg:hidden lg:block"
        />
      );
    }
  };

  const handleRedirectProject = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    router.push(`/projects?id=${title}`);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="group relative mb-3 last:mb-0 sm:mb-8"
    >
      <section
        onClick={handleRedirectProject}
        className="relative max-w-[59rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:cursor-pointer hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-fit sm:pr-8 sm:group-even:pl-8"
      >
        <div className="sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <div className="z-10 flex h-full flex-col pb-2 pt-4 sm:max-w-[50%]">
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
          </div>

          <div className="flex items-center justify-between pb-6">
            <div className="mt-2 flex items-center">
              {link.live && (
                <>
                  <button
                    onClick={(e) => openLinkInNewTab(link.live, e)}
                    rel="noreferrer"
                    className="inline-block text-lg font-semibold text-blue-600 hover:underline"
                  >
                    Live
                  </button>
                  <span className="ml-2 opacity-30">|</span>
                </>
              )}

              <button
                onClick={(e) => openLinkInNewTab(link.source, e)}
                rel="noreferrer"
                className="ml-2 inline-block text-lg font-semibold text-blue-600 hover:underline"
              >
                Source
              </button>
            </div>

            <div>
              <Link
                className="rounded-md border-2 px-4 py-2"
                href={`/projects?id=${title}`}
              >
                See details
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="absolute left-0 top-0 z-0 h-full w-full"> */}
        {renderMedia()}
        {/* </div> */}
      </section>
    </motion.div>
  );
}
