interface InputProps{
    type:string;
    value?:string;
    name?:string;
    className:string;
    id?:string;

}

function Input({type, value, name, className, id}:InputProps){
    return(
        <input type={type} value={value} name={name} className={className} id={id}/>
    )
}
export default Input