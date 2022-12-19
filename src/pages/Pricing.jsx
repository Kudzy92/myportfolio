import React from 'react'

import  PricingPlanCard  from '../components/PricingPlanCard'

const Pricing = () => {
  /*import Slider from 'react-slick';
        import 'slick-carousel/slick/slick.css';
        import 'slick-carousel/slick/slick-theme.css';
        import MagicSliderDots from 'react-magic-slider-dots';
        import 'react-magic-slider-dots/dist/magic-dots.css';
  
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
    }
  };*/
  return (
   
    <section className='pricing section-padding' id='pricing'>
        <div className='container'>
          <div className='row'>
              <div className='section-title text-align'>
                  <h5 className='sub-title'>pricing</h5>
                  <h3 className='main-title'>pricing plans</h3>
                  <ul className='line'>
                      <li></li>
                      <li></li>
                      <li></li>
                  </ul>
              </div> {/*<!--===== Section Title =====-->*/}
            </div>
            </div>
            <div className='.container section-description text-align'>
              <p>
              Like our work and support us.Feel free to submit your quotation by filling out the form below or contact us.
              </p>
              </div>
            <div className='container pricing-plan-slider'>
           {/* <Slider {...settings}> */}
             
               
                 <PricingPlanCard />
             
              
              {/*</Slider>*/}
               <div className='swiper-pagination'></div>
            </div>
        
    </section>
 
  )
}
export default Pricing
