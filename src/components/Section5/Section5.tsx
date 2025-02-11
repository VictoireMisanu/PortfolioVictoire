import { Briefcase} from "lucide-react"
import { projects } from "./projectData"
import ProjectCard from "./projectCard"


export default function Section5() {
    return (
        <div id="project" className="px-6 py-12 bg-slate-900/30">
            <div className="flex items-center gap-5 mb-16">
                <div className="bg-gray-900 p-1.5 rounded-full">
                    <Briefcase className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

        </div>
    )
}