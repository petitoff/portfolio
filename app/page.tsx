"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";

export default function Home() {
  useGoogleAnalytics();

  return (
    <main className="flex flex-col items-center px-4">
      <Header />

      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
      <Skills />
      {/* <Contact /> */}
    </main>
  );
}
