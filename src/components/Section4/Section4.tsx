import { Briefcase, CodeXml, Database, GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <div id='education' className="relative container mx-auto px-6 pt-12">
        <div className="flex items-center gap-5 mb-12">
                <div className="bg-gray-900 p-1.5 rounded-full">
                    <Briefcase className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
      {/* Ligne verticale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-[35rem] w-0.5 bg-purple-500"></div>

      <div id='diplome' className="mb-16 relative">
        {/* Point sur la timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-white border-[3px]"></div>

        {/* Date */}
        <div className="absolute right-[calc(50%+1rem)] bg-purple-100 rounded-full px-4 py-1 text-sm">2019 - 2024</div>

        {/* Contenu */}
        <div className="ml-[calc(50%+2rem)] bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bac + 5 in Computer science</h3>
                <p className="text-purple-500">Mathematics and computer science</p>
                <p className="text-gray-600 mt-1">University of Kinshasa</p>
              </div>
            </div>
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Diploma</span>
          </div>
        </div>
      </div>

      <div id='simplon' className="mb-16 relative">
        {/* Point sur la timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-white border-[3px]"></div>

        {/* Date */}
        <div className="absolute left-[calc(50%+1rem)] bg-blue-100 rounded-full px-4 py-1 text-sm">2024</div>

        {/* Contenu */}
        <div className="mr-[calc(50%+2rem)] bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <CodeXml className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Simplon certification (Bac + 2)</h3>
                <p className="text-blue-500">Web developpment</p>
                <p className="text-gray-600 mt-1">Kadea Academy</p>
              </div>
            </div>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Training</span>
          </div>
        </div>
      </div>
      
      <div id='performax' className="mb-16 relative">
        {/* Point sur la timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-white border-[3px]"></div>

        {/* Date */}
        <div className="absolute right-[calc(50%+1rem)] bg-purple-100 rounded-full px-4 py-1 text-sm">2024</div>

        {/* Contenu */}
        <div className="ml-[calc(50%+2rem)] bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Certificate</h3>
                <p className="text-purple-500">DataBase and distributed database on SQLServer</p>
                <p className="text-gray-600 mt-1">Université de Kinshasa</p>
              </div>
            </div>
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Training</span>
          </div>
        </div>
      </div>
    </div>
  )
}
