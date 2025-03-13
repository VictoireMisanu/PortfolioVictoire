import type { Project } from "./type"

export const projects: Project[] = [
  {
    title: "FarmProd App",
    description: "Development of an e-commerce web application for farm products",
    imageUrl: "/images/FarmProd.png",
    status:"in progress",
    technologies: [
      { name: "Full Stack", className: "bg-blue-100 text-blue-700" },
      { name: "AdonisJS", className: "bg-green-100 text-green-700" },
      { name: "ReactJS", className: "bg-orange-100 text-green-700" },
      { name: "Tailwind", className: "bg-purple-100 text-purple-700" },
    ],
    projectUrl: "https://front-farmprod.onrender.com/",
  },
  {
    title: "Les journées informatiques",
    description: "Full stack development using Express.js and Ejs.",
    imageUrl: "/images/Ji.png",
    status : "In progress",
    technologies: [
      { name: "Full stack", className: "bg-blue-100 text-blue-700" },
      { name: "PERN", className: "bg-yellow-100 text-yellow-700" },
      { name: "Tailwind", className: "bg-pink-100 text-pink-700" },
    ],
    projectUrl: "https://journeesinformatiques.onrender.com",
  },
  {
    title: "Mathinfo App",
    description:
      "A web site for the department of mathematics and computer science of the University of Kinshasa",
    imageUrl: "/images/mathinfo.png",
    status : "In progress",
    technologies: [
      { name: "ReactJS", className: "bg-purple-100 text-purple-700" },
      { name: "Tailwind", className: "bg-pink-100 text-pink-700" },
    ],
    projectUrl: "https://mathinfoapp.onrender.com/",
  },
  {
    title: "Victory's portfolio",
    description:
      "A web site thats presents my portfolio as a web developer",
    imageUrl: "/images/myportfolio.png",
    status : "Done",
    technologies: [
      { name: "ReactJS", className: "bg-blue-100 text-blue-700" },
      { name: "Tailwind", className: "bg-green-100 text-green-700" },
    ],
    projectUrl: "https://portfoliovictoire.onrender.com/",
  },
]

