"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { IProject, projectsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { openLinkInNewTab } from "@/utils/openLinkInNewTab";
import { useTheme } from "@/context/theme-context";

export default function Project() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();

  // Pobierz wartość query parameter o kluczu id
  const id = searchParams.get("id");

  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const handleGetProject = () => {
      const project = projectsData.find((project) => project.title === id);
      setProject(project);
    };

    handleGetProject();
  }, [id]);

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <motion.h1
        className="relative mb-10 mt-4 flex items-center justify-center px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <svg
          onClick={() => router.push("/#projects")}
          className="absolute left-0 mr-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill={theme === "light" ? "black" : "white"}
            d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
          />
        </svg>
        <span>{project?.title}</span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <p>{project?.description}</p>
      </motion.div>

      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={(e) => openLinkInNewTab(project?.link.live, e)}
          className="h-10 w-16 rounded-md bg-indigo-600 text-white transition-colors hover:bg-white hover:text-indigo-600"
        >
          Live
        </button>

        <button
          onClick={(e) => openLinkInNewTab(project?.link.source, e)}
          className="h-10 w-20 rounded-md border-2 border-indigo-600 transition-colors hover:bg-indigo-600 hover:text-white"
        >
          Source
        </button>
      </div>
    </section>
  );
}
