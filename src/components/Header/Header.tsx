import { Link, useNavigate } from "react-router-dom"
import { useCallback, useState } from "react"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

interface Props {
    className: string;
}

function Header({ className }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
      
    const scrollToSection = useCallback(
      (sectionId: string) => {
        navigate("/") // Assurez-vous d'être sur la bonne page
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
          setIsMenuOpen(false); // Ferme le menu après la navigation
        }, 100) // Petit délai pour s'assurer que la navigation est terminée
      },
      [navigate],
    )

    return (
        <nav className={`${className}  fixed`}>
            {/* Container principal avec espacement et alignement */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div id="name" className="flex items-center justify-center">
                  <ChevronLeft className="w-12 h-12 text-blue-800 -mr-2"/><h2 className="font-bold text-xl text-blue-800">VM</h2><ChevronRight className="w-12 h-12 text-blue-800 -ml-2"/>
                </div>

                {/* Menu Desktop */}
                <div className="hidden lg:md:block">
                    <ul className="flex items-center space-x-8">
                        <li className="p-3 text-white rounded-md hover:bg-blue-500/30 transition-colors">
                            <Link to="/" onClick={() => scrollToSection("home")}>Home</Link>
                        </li>
                        <li className="p-3 text-white rounded-md hover:bg-blue-500/30 transition-colors">
                            <Link to="/" onClick={() => scrollToSection("about")}>About</Link>
                        </li>
                        <li className="p-3 text-white rounded-md hover:bg-blue-500/30 transition-colors">
                            <Link to="/" onClick={() => scrollToSection("resume")}>Resume</Link>
                        </li>
                        <li className="p-3 text-white rounded-md hover:bg-blue-500/30 transition-colors">
                            <Link to="/" onClick={() => scrollToSection("education")}>Education</Link>
                        </li>
                        <li className="p-3 text-white rounded-md hover:bg-blue-500/30 transition-colors">
                            <Link to="/" onClick={() => scrollToSection("project")}>Projects</Link>
                        </li>
                        <li className="p-3 rounded-md hover:bg-blue-500/30 text-white transition-colors">
                            <Link to="/" onClick={() => scrollToSection("contact")}>Contact me</Link>
                        </li>
                    </ul>
                </div>

                {/* Bouton Menu Mobile */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden z-20 p-2 hover:bg-blue-500/30 rounded-md transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-8 h-8 text-white transition-transform duration-300" />
                    ) : (
                        <Menu className="w-8 h-8 text-white transition-transform duration-300" />
                    )}
                </button>

                {/* Menu Mobile */}
                <div className={`
                    lg:hidden fixed inset-0 bg-black/95 z-10
                    transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                    <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white">
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                onClick={() => scrollToSection("home")}
                                className="block px-4 py-2 hover:bg-blue-500/30 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                onClick={() => scrollToSection("about")}
                                className="block px-4 py-2 hover:bg-blue-500/30 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                onClick={() => scrollToSection("resume")}
                                className="block px-4 py-2 hover:bg-blue-500/30 transition-colors"
                            >
                                Resume
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                onClick={() => scrollToSection("education")}
                                className="block px-4 py-2 hover:bg-blue-500/30 transition-colors"
                            >
                                Education
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                onClick={() => scrollToSection("project")}
                                className="block px-4 py-2 hover:bg-blue-500/30 transition-colors"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                onClick={() => scrollToSection("contact")}
                                className="block px-4 py-2 hover:bg-blue-500/30 transition-colors"
                            >
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header