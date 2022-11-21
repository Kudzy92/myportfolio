import React from "react"
import { About } from "../pages/About"
import { Hireme } from "../pages/Hireme"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Experience } from "../pages/Experience"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Hireme />
      <Contact />
    </>
  )
}
