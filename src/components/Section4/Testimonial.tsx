import Logo from "../Section3/logo"
import Section4Text from "./text"
function Testimonial(){
    return(
            <div className="flex gap-5 items-center">
                <div>
                <Logo src='avatar.png' className="rounded-full w-16 h-16 lg:w-20 lg:h-20"/>
            </div>
            <div>
                <Section4Text className="">Organize across</Section4Text>
                <Section4Text className="">UI designer</Section4Text>
            </div>
            </div>
    )
}
export default Testimonial