import React from 'react'
import logo from "../data/images/kudzy-logo.png"

const Loader = () => {
  return (
    <div className='loader-container'>
 <div className='loading-logo'>  <img src={logo} alt=''  /></div>
        <div className='loading-wraper'>
        <div className="loader"></div>
        </div>
    </div>
  )
}

export default Loader