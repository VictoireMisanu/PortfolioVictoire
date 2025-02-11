import { Mail } from 'lucide-react'
// import React, { useState } from 'react'
import emailjs from "@emailjs/browser"

export const Section6: React.FC<{}> = () => {

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        // const [error, setError] = useState<string | null>(null);
        e.preventDefault()
        emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)

        .then(
            (result) => {
            console.log('Message envoyé avec succès', result.text);
            },
            (error) => {
            console.error('Erreur lors de l\'envoi du message', error.text);
            }
        );
        
    }
    return (
        <div id="writeUs" className=" w-full h-auto flex flex-col px-6 pt-12">
            <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
                <div className="bg-gray-900 p-1.5 rounded-full">
                    <Mail className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact me</h2>
            </div>
            <div id="content" className="w-full h-auto flex flex-row gap-20 items-center justify-center">
                <form className="w-full lg:md:w-1/2 h-full p-10 flex flex-col gap-10" onSubmit={handleSendEmail}>
                    <p className='text-sm md:lg:text-xl'>Let's keep in touch.</p>
                    <p className='text-sm md:lg:text-xl -mt-8'>I'm available to work with you together on your idea project.</p>
                    <div id="content" className='h-auto flex flex-col gap-5'>
                        <div id='userName'>
                            <input className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' placeholder='Your name' type="text" name='userName'/>
                        </div>
                        <div id='emailAddress'>
                            <input className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' placeholder='Your email address' type="email" name='emailAddress'/>
                        </div>
                        <div id='message'>
                            <input className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' placeholder='Your message'  type="text" name='message'/>
                        </div>
                        <input className='bg-purple-950 w-full h-12 text-white font-bold hover:cursor-pointer hover:text-purple-950 hover:border-purple-950 border-2 hover:bg-transparent hover:shadow-lg rounded-xl shadow-black' type="submit" value="Send" />
                                            
                    </div>
                </form>
                                
            </div>
        </div>
    )
}