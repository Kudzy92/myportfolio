import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Experience } from "./Experience"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"
import {Hireme} from './Hireme'
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
       
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/Experience' component={Experience} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/Hireme' component={Hireme} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
