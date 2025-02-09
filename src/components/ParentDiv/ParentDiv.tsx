
interface Props {
    
    className?:string;
    children: JSX.Element | JSX.Element[]
  }
function Parent({children}:Props) {
    return(
        <div>
            {children}
        </div>
            
        
    )
}
export default Parent