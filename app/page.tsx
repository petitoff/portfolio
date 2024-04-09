"use client";

import { useEffect } from "react";
import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Analytics from "react-ga4";
import router from "next/router";

export default function Home() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      const gaId = process.env.NEXT_PUBLIC_GA_ID;

      if (gaId) {
        Analytics.initialize(gaId);
        const handleRouteChange = (url: string) => {
          Analytics.send({ hitType: "pageview", page: url });
        };

        // Śledzenie pierwszego załadowania strony
        Analytics.send({ hitType: "pageview", page: window.location.pathname });

        // Dodanie obserwatora dla zmian ścieżki
        router.events.on("routeChangeComplete", handleRouteChange);

        // Oczyszczenie event listenera
        return () => {
          router.events.off("routeChangeComplete", handleRouteChange);
        };
      } else {
        console.warn("Google Analytics ID is not set");
      }
    }
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
