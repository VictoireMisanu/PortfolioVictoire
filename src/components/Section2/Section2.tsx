import { User, Wrench } from "lucide-react"

export default function AboutSection() {
  const technicalSkills = [
    { name: "Autonomy" },
    { name: "Creativity"},
    { name: "Pragmatism" },
    { name: "Innovation"},
    { name: "Self-control"},
    { name: "Communication" },
    { name: "Teamwork"},
    { name: "Problem solving"},
    { name: "Adaptability"},
    { name: "Crital thinking"},
    { name: "Time management"},
    { name: "Empathy"},
    { name: "Leadership"},
    { name: "Negociation"},
    { name: "Conflict resolution"},
    { name: "Emotional intelligence"},
  ]

  return (
    <section className=" mx-auto py-12 px-20 bg-slate-200">
      <div className=" flex flex-row items-center justify-center gap-20">
        {/* Header */}
        <div id="about" className="flex flex-col items-center gap-10 w-1/2">
            <div className="flex gap-5">
                <div className="bg-gray-900 p-1.5 rounded-full">
                    <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
            </div>
            <div className="space-y-4 text-gray-600 text-justify">
                <p>
                    As a Full Stack Developer, I bring a comprehensive approach to web development combining technical expertise
                    with a strong focus on creating impactful user experiences.
                </p>
                <p>
                    I'm passionate about leveraging modern technologies to build scalable and efficient solutions while
                    continuously expanding my knowledge in the ever-evolving tech landscape.
                </p>
            </div>
        </div>
        

        {/* Skills Section */}
        <div id="skills" className=" w-1/2 h-72 mt-10 flex flex-col items-center gap-10">
            <div className="flex gap-5">
                <div className="bg-gray-900 p-1.5 rounded-full">
                    <Wrench className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Soft skills</h2>
            </div>
          <div className="flex flex-wrap gap-2 ">
            {technicalSkills.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

