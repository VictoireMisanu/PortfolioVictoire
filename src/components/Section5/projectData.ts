import type { Project } from "./type"

export const projects: Project[] = [
  {
    title: "FarmProd App",
    description: "Development of an e-commerce web application for farm products",
    imageUrl: "/images/FarmProd.png",
    technologies: [
      { name: "Full Stack", className: "bg-blue-100 text-blue-700" },
      { name: "AdonisJS", className: "bg-green-100 text-green-700" },
      { name: "ReactJS", className: "bg-orange-100 text-green-700" },
      { name: "Tailwind", className: "bg-purple-100 text-purple-700" },
    ],
  },
  {
    title: "Les journées informatiques",
    description: "Full stack development using Express.js and Ejs.",
    imageUrl: "/images/Ji.png",
    technologies: [
      { name: "Full stack", className: "bg-blue-100 text-blue-700" },
      { name: "PERN", className: "bg-yellow-100 text-yellow-700" },
      { name: "Tailwind", className: "bg-pink-100 text-pink-700" },
    ],
  },
  {
    title: "Moke-up : FarmProd",
    description:
      "Development of a mockup using Figma",
    imageUrl: "/images/FarmProd.png",
    technologies: [
      { name: "Figma", className: "bg-purple-100 text-purple-700" },
    ],
  },
  {
    title: "Projet Drepano",
    description:
      "A web site for advising people about the sickle seal desease",
    imageUrl: "/images/Drepano.png",
    technologies: [
      { name: "AdonisJS", className: "bg-blue-100 text-blue-700" },
      { name: "PostgreSQL", className: "bg-orange-100 text-orange-700" },
      { name: "Inertia", className: "bg-purple-100 text-purple-700" },
    ],
  },
]

