interface Props {
    src:string;
    className?:string;
    alt?:string;
}

function Logo({src, className, alt}:Props){
    return(
        <img src={src} alt={alt} className={className}  />
    )
}

export default Logo