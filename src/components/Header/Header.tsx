import SocialMedia from './SocialMedia'

interface Props{
    className:string;
}

function Header({className}:Props){
    return(
        <div className={className}>
            <div className="w-1/2 flex lg:gap-10">
                <ul className="text-white text-xl font-semibold leading-10 flex flex-row gap-7 lg:mt-3">
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