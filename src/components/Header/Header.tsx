import SocialMedia from './SocialMedia'

interface Props{
    className:string;
}

function Header({className}:Props){
    return(
        <div className={className}>
            <h2 className='font-bold text-xl text-purple-800'>Victoire Muvumbi.dev</h2>
            <div className="w-1/2 flex lg:gap-10">
                <ul className="text-white text-xl font-semibold leading-10 flex flex-row items-center gap-7 ">
                    <li className="hover:text-blue-700"><a href="#">Home</a></li>
                    <li className="hover:text-blue-700"><a href="#">About</a></li>
                    <li className="hover:text-blue-700"><a href="#">Resume</a></li>
                    <li className="hover:text-blue-700"><a href="#">Projects</a></li>
                    <li className="hover:text-blue-700"><a href="#">Contact me</a></li>
                    
                </ul>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default Header