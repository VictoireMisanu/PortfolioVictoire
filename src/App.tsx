// import { useState } from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section3Text from './components/Section3/text'
import LogoList from './components/Section3/logoList'
import Section4 from './components/Section4/Section4'
import Section4Text from './components/Section4/text'
import Logo from './components/Section3/logo'
import Footer from './components/footer/Footer'
import FooterItem from './components/footer/FooterItem'
import Testimonial from './components/Section4/Testimonial'
import SocialMedia from './components/Header/SocialMedia'


function App() {
  

  return (
    <>
    <Section1/>
    <Section2/>
    <Section3/>
        <Section4>
          <Section4Text className='text-4xl sm:lg:px-48 font-sans text-slate-600 text-center'>Testimonials</Section4Text>
          <Logo src='ibm.png' className='w-20 lg:w-32 pt-16'/>
          <Section4Text className='px-12 sm:lg:text-slate-700 sm:lg:px-60 py-10 sm:lg:text-xl text-center'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</Section4Text>
          <Testimonial/>
        </Section4>
        <Footer>
          <FooterItem>
            <Section4Text className='sm:lg:text-2xl font-bold font-sans text-slate-200 pb-5'>Pages</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Home</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Product</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Pricing</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>About</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Contact</Section4Text>
          </FooterItem>
          <FooterItem>
            <Section4Text className='sm:lg:text-2xl font-bold font-sans text-slate-200 pb-5'>Tomothy</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Muvumbi Victoire</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Kaba Christian</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Mashaury Rachel</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Nsasi Béni</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Lenda Grâce</Section4Text>
          </FooterItem>
          <FooterItem>
            <Section4Text className='sm:lg:text-2xl font-bold font-sans text-slate-200 pb-5'>Jane Black</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Onek Isaac</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Mukanza Jemima</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Luswanga Grâce</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Iswa Josué</Section4Text>
            <Section4Text className='sm:lg:text-lg font-sans text-slate-500'>Egbende Dorcas</Section4Text>
          </FooterItem>
          <FooterItem>
            <div className='flex flex-row items-center gap-3 mb-5'>
              <Logo src='location.png' className='w-6 h-6'/>
              <Section4Text className='sm:lg:text-sm font-sans text-slate-500'>7480 MockingBird Hill undefined</Section4Text>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <Logo src='phone.png' className='w-6 h-6'/>
              <Section4Text className='mr-32 sm:lg:mr-0 sm:lg:text-sm font-sans  text-slate-500'>(239) 555-0106</Section4Text>
            </div>
            <SocialMedia/>
          </FooterItem>
        </Footer>
    </>
  )
}

export default App
