import { Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="w-full self-stretch py-10 px-6 flex flex-col justify-center items-center">
            <p className="w-full text-black text-md font-bold font-['Libre Baskerville'] text-center border-t-[1px] border-slate-800 pt-10 pb-4">Copyright © 2025 | Victoire Muvumbi</p>
            <div className="w-1/4 flex justify-center items-center gap-5">
                    <Link to={`https://github.com/VictoireMisanu`}><Github className="w-6 h-6 text-slate-600"/></Link>
                    <Link to={`https://www.linkedin.com/in/victoire-muvumbi-203680309/`}><Linkedin className="w-6 h-6 text-slate-600"/></Link>
                    <Link to={`mailto:vicmisanu63@gmail.com`}><Mail className="w-6 h-6 text-slate-600"/></Link>
            </div>
        </div>
    )
}

export default Footer