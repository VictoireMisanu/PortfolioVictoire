interface Props {
    
    children: JSX.Element | JSX.Element[]
  }

function Section3({children}:Props){
    return(
        <div className="h-[40rem] w-full lg:pt-80 pt-[30rem]">
            <div className="flex justify-center items-center flex-col">
                {children}
            </div>
            
        </div>
    )
}

export default Section3