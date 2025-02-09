interface Props {
    
    children: JSX.Element | JSX.Element[]
  }

function FooterItem({children}:Props){
    return(
        <div className="py-2">
            <div className="flex flex-col items-center lg:items-start gap-1">
                {children}
            </div>
            
        </div>
    )
}

export default FooterItem