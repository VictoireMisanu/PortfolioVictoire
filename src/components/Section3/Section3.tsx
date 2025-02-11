"use client"

import { motion } from "framer-motion"


export default function SkillsSection() {
  const softwareSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "TypeScript", level: 60 },
    { name: "Node.js", level: 60 },
    { name: "ReactJS", level: 75 },
    { name: "TailwindCSS", level: 75 },
    { name: "ExpressJS", level: 50 },
    { name: "AdonisJS", level: 60 },
    { name: "SQL", level: 70 },
  ]

  const experiences = [
    {
      title: "FarmProd App",
      company: "Freelance",
      period: "2024 - Present",
      description: "Development of an e-commerce web application using React and Adonis.",
    },
    {
        title: "FarmProd Mock-up",
        company: "Freelance",
        period: "Dec. 2024 - Present",
        description: "Development of a mockup using Figma",
      },
    {
      title: "Les journées informatiques",
      company: "Freelance",
      period: "Sept. 2024 - Present",
      description: "Full stack development using Express.js and Ejs.",
    },
    {
      title: "Programme Drepano",
      company: "Freelance",
      period: "Dec. 2024 - Present",
      description: "Full stack development using Adonis.js with Inertia.",
    },
  ]

  const quickSkills = ["VSCode", "PostgreSQL", "SQLServer","WampServer", "Git", "Draw.io", "Figma", "Canva"]

  const languages = [
    { name: "English", level: 80 },
    { name: "French", level: 90 },
    { name: "Lingala", level: 90 },
  ]

  return (
    <section id="resume" className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto flex flex-row gap-16">
        {/* Software Skills Column */}
        <div id="software" className="space-y-6 w-4/12">
          <h2 className="text-xl font-bold mb-4">SOFTWARE SKILLS</h2>
          <div className="space-y-4">
            {softwareSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div id="language" className="mt-8">
            <h2 className="text-xl font-bold mb-4">LANGUAGES</h2>
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language.name}</span>
                    <span>{language.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${language.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div id="experience w-4/12">
          <h2 className="text-xl font-bold mb-6">EXPERIENCE</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Timeline line */}
                <div className="absolute left-[11px] top-0 h-full w-0.5 bg-blue-500" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-gray-900 border-2 border-blue-500" />

                <div className="space-y-2">
                  <h3 className="font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <p className="text-sm text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Column */}
        <div id="tools w-4/12">
          <h2 className="text-xl font-bold mb-6">TOOLS</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg">
                
                <span className="text-md font-semibold text-purple-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

