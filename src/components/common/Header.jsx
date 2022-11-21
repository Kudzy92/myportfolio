import { Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/kudzy-logo.png"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='logo'>
            <img src={logo} alt=''  data-aos='zoom-in-right' />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link  className='nav-link `${${links.text}="Home" ? "active" : ""}`' to={links.url} key={i} onClick={() => setResponsive(!responsive)} data-aos='zoom-in-left'>
                {links.text}
                <span></span>
              </Link>
            ))}
        <Link  className='nav-link' to='./contact'  data-aos='zoom-in-right'>
               <button className='btn-1' onClick={() => setResponsive(!responsive)}>get a quote now</button>
              </Link>
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  )
}
