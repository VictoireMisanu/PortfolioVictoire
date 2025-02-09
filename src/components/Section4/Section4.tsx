interface Props {
    
    children: JSX.Element | JSX.Element[]
  }

function Section4({children}:Props){
    return(
        <div className="h-[40rem] w-full lg:h-0 pt-[70rem] lg:pt-44">
            <div className="flex justify-center items-center flex-col">
                {children}
            </div>
            
        </div>
    )
}

export default Section4