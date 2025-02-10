import Header from "../Header/Header"
import { Briefcase, Mail } from "lucide-react"


function Section1(){
    return(
        <div className="bg-bg1 bg-cover bg-center flex justify-center items-center h-screen w-full">
            <div className="w-full h-full bg-black bg-opacity-75">
                <Header className='hidden w-full h-20 lg:visible lg:flex justify-around items-center'/>
                <div id="middle" className="flex flex-row justify-center items-center gap-20 h-auto w-full py-20">
                    <div id="part1" className="w-1/2 flex flex-col ">
                        <div id="text" className="p-10 w-92">
                            <h1 className="text-2xl lg:text-3xl text-slate-300 font-bold">Hello, I'm <span className="text-blue-700">Victoire Muvumbi</span></h1>
                            <p className="text-xl lg:text-xl text-slate-300 text-justify">I'm a full stack developer with a passion for design. I specialize in creating fast,
                                responsive websites and applications that are easy to use and beautiful to look</p>
                        </div>
                        <div id="btnSection" className="pl-10 flex flex-row gap-10">
                            <button className="w-auto bg-black rounded-xl border-white border-[1px] cursor-pointer p-3 flex flex-row items-center justify-center gap-3"><Briefcase className="w-5 h-5 text-white" /><span className=' text-slate-300 font-normal text-xl '>View my work</span></button>
                            <button className="w-auto bg-blue-700 shadow-xl shadow-black rounded-xl cursor-pointer p-3 flex flex-row items-center justify-center gap-3"><Mail className="w-5 h-5 text-white"/><span className=' text-slate-300 font-normal text-xl '>Message me</span></button>
                        </div>
                    </div>
                    <div id="picture" className=" w-auto h-auto flex items-center justify-center">
                        <img src="/images/Vic1.png" alt="Vctoire Muvumbi" className=" bg-black/70 w-80 h-80 border-[1px] rounded-full border-white p-10 mb-5" />
                    </div>

                </div>
                
            </div>    
        </div>
    )
    
}

export default Section1