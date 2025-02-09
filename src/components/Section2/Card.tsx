import Logo from '../Section3/logo'

function Card (){
    return(
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center lg:py-8">
            <div className="w-60 px-8 gap-5 text-center flex flex-col justify-center items-center">
                <Logo src="feature1.png" alt="" className="w-20 h-20"/>
                <p className="font-semibold">OpenType features Variable fonts</p>
                <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
            </div>
            <div className="w-60 px-8 gap-5 text-center flex flex-col justify-center items-center">
                <Logo src="feature2.png" alt="" className="w-20 h-20"/>
                <p className="font-semibold">Design with real data</p>
                <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
            </div>
            <div className="w-60 px-8 gap-5 text-center flex flex-col justify-center items-center">
                <Logo src="feature3.png" alt="" className="w-20 h-20"/>
                <p className="font-semibold">Fastest way to take action</p>
                <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
            </div>
        </div>
    )
}

export default Card