import Logo from './logo'

function LogoList(){
    return(
        <div className='flex flex-col gap-4 lg:flex-row lg:px-60 lg:pt-10 lg:flex-wrap justify-center '>
            <Logo src="google.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="amazon.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="microsoft.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="uber.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="microsoft.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="google.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="uber.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
            <Logo src="amazon.png" className='w-40 p-5 border-solid border-[1px]  border-gray-200'/>
        </div>
    )
}

export default LogoList