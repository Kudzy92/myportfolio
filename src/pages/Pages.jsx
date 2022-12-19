import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from "../components/Footer"
import  Header  from "../components/Header"
import ThemeSwitcher from "../components/ThemeSwitcher"
import  Home  from "./Home"
import About from "./About"
import  Contact  from "./Contact"
import  Experience  from "./Experience"
import  Portfolio  from "./Portfolio"
import  Services  from "./Services"
import  Testimonials  from "./Testimonials"
import Hireme from './Hireme'
import NotFound from './NotFound'
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <ThemeSwitcher/>
        <Routes>
       
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/Experience' element={<Experience/>} />
          <Route exact path='/portfolio' element={<Portfolio/>} />
          <Route exact path='/testimonials' element={<Testimonials/>} />
          <Route exact path='/Hireme' element={<Hireme/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default Pages
