import Logo from "../Section3/logo"

function SocialMedia(){
    return(
        <ul className="w-36 flex flex-row items-center justify-center gap-3 my-8 lg:my-3 ">
                
                <li><a href="#"><Logo src="/svg/github.svg" alt=""/></a></li>
                <li><a href="#"><Logo src="/svg/linkedin.svg" alt=""/></a></li>
                <li><a href="#"><Logo src="/svg/twitter.svg" alt=""/></a></li>
            </ul>
    )
}
export default SocialMedia