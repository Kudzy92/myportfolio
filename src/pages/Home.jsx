import React from "react"
import About  from "../pages/About"
import  Hireme  from "../pages/Hireme"
import  Contact  from "../pages/Contact"
import  Counter  from "../pages/Counter"
import  Experience  from "../pages/Experience"
import  Portfolio  from "../pages/Portfolio"
import  Services  from "../pages/Services"
import  Pricing  from "../pages/Pricing"
import  Testimonials  from "../pages/Testimonials"
import  Hero  from "../components/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Counter />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Hireme />
  <Contact />
    </>
  )
}
export default Home