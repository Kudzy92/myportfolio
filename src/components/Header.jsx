import { Menu, Close } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/kudzy-logo.png"

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='logo'>
            <img src={logo} alt=''  />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link  className={selectedPage===links.text  ? "nav-link active" : 'nav-link'} to={links.url} key={i} onClick={()=>{setSelectedPage(links.text)}}>
                {links.text}
                <span></span>
              </Link>
            ))}
        <Link  className='nav-link' to='./contact'>
               <button className='btn-1' onClick={() => setResponsive(!responsive)}>get a quote now</button>
              </Link>
          </div>
          <span className='toggle' onClick={() => setResponsive(!responsive)}>
            {!responsive ? <Menu /> : <Close /> }
          </span>
        </div>
      </header>
    </>
  )
}
export default Header
