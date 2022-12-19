import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/dummydata"
import { Link } from "react-router-dom"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='testimonials hero'>
        <div className='container'>
        <div className="section-title text-align">
                    <h5 className="sub-title">testimonials</h5>
                    <h3 className="main-title">what our clients says.</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                
                
          <div className='section-content'>
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div key={val.id} className='box'>
                <i data-aos='zoom-out-up'>
                  <FormatQuoteIcon />
                </i>
                <p data-aos='zoom-out-down'>{val.text}</p>
                <div className='img' data-aos='zoom-out-right'>
                  <img src={val.image} alt='' />
                </div>
                <h3 data-aos='zoom-out-left'>{val.name}</h3>
                <label data-aos='zoom-out'>{val.post}</label>
                <br />
                <span data-aos='zoom-out-down'>{val.status}</span>
                <br />
                <Link to={val.link_url}  data-aos='zoom-in-left'>
                LinkedIn
              </Link>
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
export default Testimonials
