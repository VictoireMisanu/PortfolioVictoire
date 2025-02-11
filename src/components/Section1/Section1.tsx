import Header from "../Header/Header"
import { Briefcase, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useCallback } from "react"

function Presentation() {
    const navigate = useNavigate()
      
    const scrollToSection = useCallback(
      (sectionId: string) => {
        navigate("/") // Assurez-vous d'être sur la bonne page
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100) // Petit délai pour s'assurer que la navigation est terminée
      },
      [navigate],
    )

    return(
        <section id="home" className="bg-bg1 bg-cover bg-center flex justify-center items-center h-auto lg:md:h-screen w-full">
            <div className="w-full h-full bg-black bg-opacity-75">
                <Header className='w-full h-20 flex justify-between items-center px-4 md:px-10 fixed bg-black/20 shadow-b-black'/>
                
                <div id="middle" className="flex flex-col-reverse mt-20 lg:md:mt-0 lg:flex-row justify-center items-center gap-8 lg:gap-20 h-full w-full py-20 px-4 md:px-6 lg:px-10">
                    {/* Partie texte */}
                    <div id="part1" className="w-full lg:w-1/2 h-auto flex flex-col lg:mt-0">
                        <div id="text" className="p-4 lg:p-10 w-full lg:w-92">
                            <h1 className="text-2xl lg:text-3xl text-slate-300 font-bold mb-4">
                                Hello, I'm <span className="text-blue-700">Victoire Muvumbi</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 text-justify">
                                I'm a full stack developer with a passion for design. I specialize in creating fast,
                                responsive websites and applications that are easy to use and beautiful to look
                            </p>
                        </div>
                        
                        {/* Boutons */}
                        <div id="btnSection" className="px-4 lg:pl-10 flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6">
                            <Link 
                                to={`/`} 
                                onClick={() => scrollToSection("project")} 
                                className="w-full sm:w-auto bg-black rounded-xl border-white border-[1px] cursor-pointer p-3 flex flex-row items-center justify-center gap-3 hover:bg-black/70 transition-colors"
                            >
                                <Briefcase className="w-5 h-5 text-white" />
                                <span className='text-slate-300 font-normal text-lg lg:text-xl'>View my work</span>
                            </Link>
                            <Link 
                                to={`/`} 
                                onClick={() => scrollToSection("contact")} 
                                className="w-full sm:w-auto bg-blue-700 shadow-xl shadow-black rounded-xl cursor-pointer p-3 flex flex-row items-center justify-center gap-3 hover:bg-blue-800 transition-colors"
                            >
                                <Mail className="w-5 h-5 text-white"/>
                                <span className='text-slate-300 font-normal text-lg lg:text-xl'>Message me</span>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div id="picture" className="w-full lg:w-auto h-auto flex items-center justify-center mt-8 lg:mt-0">
                        <img 
                            src="/images/Vic1.png" 
                            alt="Victoire Muvumbi" 
                            className="bg-black/70 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 border-[1px] rounded-full border-white p-6 lg:p-10 mb-5 transition-transform hover:scale-105 duration-300" 
                        />
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default Presentation