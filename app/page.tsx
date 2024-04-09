import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect } from "react";
import Analytics from "react-ga4";

export default function Home() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (!gaId) return console.error("Google Analytics ID is not set");

    Analytics.initialize(gaId);
  }, []);

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
