import React from "react"
import { about, skills, social } from "../data/dummydata"
import {Link} from "react-router-dom"


 const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
        <div className="section-title text-align">
                    <h5 className="sub-title">About</h5>
                    <h3 className="main-title">Why You Hire Me?</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
  <div className='section-content flex'>
          {about.map((val) => (
            <div className='about-content' key={val.id}>
              <div  className='left' data-aos='fade-down-right'>
                <div className="about-kudzy-img">
                <img src={val.cover} alt='' />
                </div>
                <div className="about-social">
        {social.map((item,i) => (
          
          <Link key={i} to={item.url}>
          <i data-aos='zoom-in'>{item.icon}</i>
          </Link>
            
          
        ))}
      
      </div>
              </div>
              <div className='right' data-aos='fade-down-left'>
               
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <div className='about-skills'>
                {skills.map((item,i) => (
                 <div key={i} className='skill-item'>
                 <div className='skill-header'>
                     <h6 className='skill-title'>{item.name}</h6>
                     <div className='skill-percentage'>
                         <p><span className='counter'>{item.percentage}</span>%</p>
                     </div>
                 </div>
                 <div className='skill-bar'>
                     <div className='bar-inner'>
                         <div className='bar progress-line'></div>
                     </div>
                 </div>
             </div>
                ))}
                  </div>
                  <div className='about-btn'>
                  <button className="btn-1">Download CV</button>
                <button className='btn-1'>Hire me</button>

                  </div>
                
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default About