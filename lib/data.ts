import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import devdocketImg from "@/public/devdocket.png";
import bookshelfImg from "@/public/bookshelf.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { StaticImageData } from "next/image";

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
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
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

export const projectsData: IProject[] = [
  {
    title: "Dev Docket",
    description:
      "I created full-stack application to manage projects and teams. It provides comprehensive task and project management, progress tracking, collaboration, access control, issue tracking, and accessibility through web browsers.",
    tags: [
      "React & Vite",
      "RTK",
      "React Router DOM",
      "Nestjs",
      "Postgresql",
      "Tailwind",
      "Sequelize",
    ],
    mediaUrl: "/devdocket.png",
    mediaType: "image",
    link: {
      live: "https://dev-docket.vercel.app",
      source: "https://github.com/dev-docket",
    },
  },
  {
    title: "Bookshelf",
    description:
      "Bookshelf is a modern web application built using ReactJS with TypeScript, Firebase, Redux Toolkit, and React Router DOM. The website allows users to browse, read, and rate books online, as well as create reading lists and share books with friends.",
    tags: ["React", "React Router DOM", "Firebase", "SCSS", "RTK"],
    mediaUrl: "/bookshelf.png",
    mediaType: "image",
    link: {
      live: "https://bookshelf-petitoff.vercel.app/books",
      source: "https://github.com/petitoff/bookshelf",
    },
  },
  {
    title: "Robotic Painting Simulator",
    description:
      "I created a robotic painting simulator in WPF. It was a project for senior interview. The application allows you to create a painting and then simulate the painting process. I used C# and .NET Framework. I also used the MVVM pattern, implemented the INotifyPropertyChanged interface, and used the ICommand interface and implemented dependency injection. ",
    tags: ["C#", ".NET Framework", "WPF"],
    mediaUrl: "/RoboticPaintingSimulator.mp4",
    mediaType: "video",
    link: {
      source: "https://github.com/petitoff/RoboticPaintingSimulator",
    },
  },
] as const;

interface IProject {
  title: string;
  description: string;
  tags: string[];
  mediaUrl: string;
  mediaType: "image" | "video";
  link: {
    live?: string;
    source: string;
  };
}

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Styled Components",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Redux Toolkit",
  "Framer Motion",
  "Gatsby",
  "Node.js",
  "Express",
  "Nest.js",
  "C#",
  ".NET Framework",
  ".ASP.NET Core",
  "Swagger/OpenAPI",
  "Git",
  "PostgreSQL",
  "Docker",
  "JWT (JSON Web Tokens)",
] as const;
