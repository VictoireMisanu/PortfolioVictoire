import type { Project } from "./type"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image du projet */}
      <div className="relative h-48 overflow-hidden">
        <img src={project.imageUrl || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Contenu du projet */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm ${tech.className}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

