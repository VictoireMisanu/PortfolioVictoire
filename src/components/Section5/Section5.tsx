import { Briefcase} from "lucide-react"


export default function Section5() {
    return (
        <div id="project" className="px-6 pt-12 bg-slate-900/30">
            <div className="flex items-center gap-5">
                <div className="bg-gray-900 p-1.5 rounded-full">
                    <Briefcase className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            </div>

        </div>
    )
}