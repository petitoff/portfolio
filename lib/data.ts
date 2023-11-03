import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import devdocketImg from "@/public/devdocket.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University Of Opole",
    location: "IT engineer",
    description:
      "I am studying computer science. These are engineering studies and I focus mainly on acquiring knowledge in the field of software engineering and mathematics.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Internship at CODEFUSION",
    location: "Opole, Poland",
    description:
      "I completed a one-month internship at CODEFUSION as a C# programmer in .NET MAUI. I was responsible for creating a mobile application for managing garbage collection.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 July",
  },
  {
    title: "React Native Developer at MyTaple",
    location: "Opole, Poland (Remote)",
    description:
      "I worked on creating a mobile application with events and restaurants in your area. The application was also used in field games.",
    icon: React.createElement(FaReact),
    date: "2022 August - 2023 January",
  },
] as const;

export const projectsData = [
  {
    title: "Dev Docket",
    description:
      "I created full-stack application to manage projects. App have a lot o feature for managing projects and teams.",
    tags: ["React & Vite", "Nestjs", "Postgresql", "Tailwind", "REST API"],
    imageUrl: devdocketImg,
    link: "https://dev-docket.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Nest.js",
  "Git",
  "Redux Toolkit",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
