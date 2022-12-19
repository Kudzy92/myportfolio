import React from "react"
import { experience } from "../data/dummydata"
import { Link } from "react-router-dom"

const Experience = () => {
  return (
    <>
      <section className='experience'>
        <div className='container'>
        <div className="section-title text-align">
                    <h5 className="sub-title">Work & Experience</h5>
                    <h3 className="main-title">What I did in the past and gained.</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
        <div className='timeline'>
							<div className='timeline-inner'>
          {experience.map((val) => (
           <div key={val.id} className='single-main' data-aos='fade-down-left'>
									<div  className='single-timeline'>

										<div className='single-content'>
											<div className="date">
												<p>{val.year} <br /><span>{val.duration}</span></p>
											</div>
											<div className='timeline-heading'>
											<h2>{val.level}</h2>
											 <ul className='line'>
                                             <li></li>
                                               <li></li>
                                              <li></li>
                                            </ul>
					                        </div>
											<Link to={val.school_url}>{val.school_name}</Link>
                                            <p>{val.location}</p>
											<p>{val.description}.</p>
										</div>
									</div>
								</div>
                        
							
          ))}
          </div>
          </div>
          </div>
      </section>
    </>
  )
}
export default Experience
