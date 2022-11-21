import React from "react"
import { social } from "../data/dummydata"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
          <Link key={item.id} to={item.url}>
          <i data-aos='zoom-in'>{item.icon}</i>
          </Link>
            
          </>
        ))}
        <p data-aos='zoom-in'>All Right Reserved 2022</p>
      </footer>
    </>
  )
}

export default Footer
