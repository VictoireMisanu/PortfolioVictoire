interface Props {
    
    children: JSX.Element | JSX.Element[]
  }
function Section2({children}:Props){
    return(
        <div className="h-[40rem] w-full">
            <div className="flex justify-center items-center flex-col">
                {children}
            </div>
            
        </div>
    )
    
}

export default Section2