"use client"

import { useEffect } from "react"
import { BrowserRouter, useLocation } from "react-router-dom"
import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"
import Section3 from "./components/Section3/Section3"
import Section4 from "./components/Section4/Section4"
import Section5 from "./components/Section5/Section5"


function ScrollToSection() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash])

  return null
}

function MainContent() {
  return (
    <>
  
      <main>
        <section id="home">
          <Section1 />
        </section>
        <section id="about">
          <Section2 />
        </section>
        <section id="resume">
          <Section3 />
        </section>
        <section id="education">
          <Section4 />
        </section>
        <section id="project">
          <Section5 />
        </section>
      </main>
      <ScrollToSection />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  )
}

export default App

