import React from "react"
import { services } from "../data/dummydata"

const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
        <div className="section-title text-align">
                    <h5 className="sub-title">Services</h5>
                    <h3 className="main-title">what I Provide.</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
          <div className='content grid3'>
            {services.map((item) => (
              <div key={item.id} className='box' data-aos='flip-left'>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Services