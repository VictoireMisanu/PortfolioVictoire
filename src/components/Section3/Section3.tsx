"use client"

// import { motion } from "framer-motion"

export default function SkillsSection() {


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

  const softwareSkills = ["HTML/CSS", "Javascript", "Typescript", "Node.js", "React.js", "TailwindCSS", "ExprssJS", "AdonisJS", "SQL"]
  const quickSkills = ["VSCode", "PostgreSQL", "SQLServer", "WampServer", "Git", "Draw.io", "Figma", "Canva"]

  const languages = ["English", "French", "Lingala", "Swahili"]

  return (
    <section id="resume" className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Software Skills Column */}
        <div id="software" className="space-y-6 w-full lg:w-4/12">
          <h2 className="text-lg sm:text-xl font-bold mb-4">SOFTWARE SKILLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
              {softwareSkills.map((skills) => (
                <div 
                  key={skills}
                  className="flex items-center gap-2 p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm sm:text-md font-semibold text-blue-300">{skills}</span>
                </div>
              ))}
            </div>

          {/* Languages Section */}
          <div className="w-full lg:w-4/12">
            <h2 className="text-lg sm:text-xl font-bold mb-6">LANGUAGES</h2>
            <div className="flex gap-2 lg:md:gap-3">
              {languages.map((language) => (
                <div 
                  key={language}
                  className="w-20 flex items-center gap-5 p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm sm:text-md font-semibold text-blue-300">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="experience" className="w-full lg:w-4/12">
          <h2 className="text-lg sm:text-xl font-bold mb-6">EXPERIENCE</h2>
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

        
        <div id="tools" className="w-full lg:w-4/12">
          <h2 className="text-lg sm:text-xl font-bold mb-6">TOOLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
            {quickSkills.map((skill) => (
              <div 
                key={skill} 
                className="flex items-center gap-2 p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm sm:text-md font-semibold text-blue-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}