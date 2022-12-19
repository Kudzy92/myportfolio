import React from "react"
import { social } from "../data/dummydata"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <footer>
        <div className='footer-content-1' >
        {social.map((item,i) => (
          <div key={i} className='social-btn'>
          <Link  to={item.url}>
          <span>{item.icon}</span>
          </Link>
          </div>  
        ))
        }
        </div>
        <p>© 2018 - by Kudzy Technologies Pvt Ltd.All rights reserved</p>
      </footer>
    
  )
}

export default Footer
