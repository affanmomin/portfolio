import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaMobile, FaMobileAlt, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import ouferImg from "@/public/ouferr.png";

import culinImg from "@/public/culin.png";
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
    title: "Flutter / Full Stack Developer Internship",
    location: "Incipient Technologies Pvt.Ltd.",
    description:
      "I gained experience by working on various Flutter projects, I developed a Tree Census application along with a Admin Panel to monitor and assess user inputs.",
    icon: React.createElement(FaMobileAlt),
    date: "2022",
  },
  {
    title: "Front-end Developer",
    location: "Freelancing",
    description:
      " I've had the privilege of collaborating with various clients. I developed and deployed visually appealing websites as per the requirements of the clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer Internship",
    location: "TechVenture",
    description:
      "I worked as a full-stack developer. My stack includes React, Next.js, Angular.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "CUL.IN",
    description:
      "I developed a comprehensive cloud kitchen management application, encompassing both a Point of Sale (POS) system and web panels for kitchen and order management. ",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "React-Bootstrap"],
    imageUrl: culinImg,
  },
  {
    title: "Oufer",
    description:
      "Oufer is a marketplace application that offers consumers and merchants a streamlined solution to save time and resources while shopping.",
    tags: ["Angular", "NodeJS", "Express"],
    imageUrl: ouferImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Flutter",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Java",
  "Framer Motion",
] as const;
