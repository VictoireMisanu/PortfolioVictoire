import { Briefcase, CodeXml, Database, GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <div id='education' className="relative container mx-auto px-4 sm:px-6 py-8 sm:pt-12">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
        <div className="bg-gray-900 p-1.5 rounded-full">
          <Briefcase className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Education</h2>
      </div>

      {/* Timeline verticale - masquée sur mobile */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-[35rem] w-0.5 bg-purple-500"></div>

      {/* Conteneur des éléments de timeline */}
      <div className="relative space-y-8 sm:space-y-16">
        {/* Diplôme */}
        <div id='diplome' className="relative">
          {/* Point sur la timeline - visible uniquement sur desktop */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-white border-[3px]"></div>

          {/* Date */}
          <div className="mb-4 sm:mb-0 sm:absolute sm:right-[calc(50%+1rem)] bg-purple-100 rounded-full px-4 py-1 text-sm">
            2019 - 2024
          </div>

          {/* Contenu */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sm:ml-[calc(50%+2rem)]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 p-2 sm:p-3 rounded-lg shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Bac + 5 in Computer science</h3>
                  <p className="text-purple-500">Mathematics and computer science</p>
                  <p className="text-gray-600 mt-1">University of Kinshasa</p>
                </div>
              </div>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm self-start">Diploma</span>
            </div>
          </div>
        </div>

        {/* Simplon */}
        <div id='simplon' className="relative">
          {/* Point sur la timeline - visible uniquement sur desktop */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-white border-[3px]"></div>

          {/* Date */}
          <div className="mb-4 sm:mb-0 sm:absolute sm:left-[calc(50%+1rem)] bg-blue-100 rounded-full px-4 py-1 text-sm">
            2024
          </div>

          {/* Contenu */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sm:mr-[calc(50%+2rem)]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-2 sm:p-3 rounded-lg shrink-0">
                  <CodeXml className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Simplon certification (Bac + 2)</h3>
                  <p className="text-blue-500">Web developpment</p>
                  <p className="text-gray-600 mt-1">Kadea Academy</p>
                </div>
              </div>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm self-start">Training</span>
            </div>
          </div>
        </div>

        {/* Performax */}
        <div id='performax' className="relative">
          {/* Point sur la timeline - visible uniquement sur desktop */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-white border-[3px]"></div>

          {/* Date */}
          <div className="mb-4 sm:mb-0 sm:absolute sm:right-[calc(50%+1rem)] bg-purple-100 rounded-full px-4 py-1 text-sm">
            2024
          </div>

          {/* Contenu */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sm:ml-[calc(50%+2rem)]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 p-2 sm:p-3 rounded-lg shrink-0">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Certificate</h3>
                  <p className="text-purple-500">DataBase and distributed database on SQLServer</p>
                  <p className="text-gray-600 mt-1">Université de Kinshasa</p>
                </div>
              </div>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm self-start">Training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}