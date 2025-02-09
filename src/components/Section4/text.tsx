interface Props{
    className:string;
    children: string;
}

function Section4Text ({className, children}:Props){
    return(
        <p className={className}>{children}</p>
    )
}

export default Section4Text