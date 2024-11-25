"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-20">
      <GoogleAnalytics />

      <Header />

      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Projects />
      <Experience />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </main>
  );
}
