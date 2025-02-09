interface Props {
    className?:string;
    children: JSX.Element | JSX.Element[]
  }

function Footer({children}:Props){
    return(
        <div className="lg:h-[20rem] w-full bg-slate-950 mt-[30rem] lg:pt-0 py-10 lg:py-20 lg:px-32">
            <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:justify-around lg:gap-0">
                {children}
            </div>
            
        </div>
    )
}

export default Footer