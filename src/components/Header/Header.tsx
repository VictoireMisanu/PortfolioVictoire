
import { Link, useNavigate } from "react-router-dom"
import { useCallback } from "react"

interface Props{
    className:string;
}

function Header({className}:Props){

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
        <nav className={className}>
            <h2 className='font-bold text-xl text-purple-800'>Victoire Muvumbi.dev</h2>
            <div className="lg:flex gap-10">
                <ul className="text-white text-xl font-semibold leading-10 flex flex-row items-center gap-7 ">
                    <li className=" px-2 rounded-md hover:bg-purple-500/30"><Link to="/" onClick={() => scrollToSection("home")}>Home</Link></li>
                    <li className="px-2 rounded-md hover:bg-purple-500/30"><Link to="/" onClick={() => scrollToSection("about")}>About</Link></li>
                    <li className="px-2 rounded-md hover:bg-purple-500/30"><Link to="/" onClick={() => scrollToSection("resume")}>Resume</Link></li>
                    <li className="px-2 rounded-md hover:bg-purple-500/30"><Link to="/" onClick={() => scrollToSection("project")}>Projects</Link></li>
                    <li className="px-2 rounded-md hover:bg-purple-500/30"><Link to="/" onClick={() => scrollToSection("contact")}>Contact me</Link></li>
                    
                </ul>
            </div>
            {/* <SocialMedia/> */}
        </nav>
    )
}

export default Header