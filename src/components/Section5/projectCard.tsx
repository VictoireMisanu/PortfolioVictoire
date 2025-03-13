import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import type { Project } from "./type";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-500';
      case 'in progress':
        return 'text-yellow-500';
      case 'planned':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
      {/* Image du projet */}
      <div className="relative h-48 overflow-hidden">
        <img src={project.imageUrl || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Contenu du projet */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        {/* Statut du projet */}
        <p className={`mb-4 text-sm ${getStatusClass(project.status)}`}>Statut: {project.status}</p>

        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm ${tech.className}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Bouton Voir le projet */}
      <Link
        to={project.projectUrl}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Voir le projet <FiExternalLink className="ml-2" />
      </Link>
    </div>
  );
}